import { NextResponse } from "next/server";

type ContactData = {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
};

const DEFAULT_INTERNAL_ALERT_EMAIL = "articog.media.01@gmail.com";
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestHistory = new Map<string, number[]>();

function isRateLimited(request: Request): boolean {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp = forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip");

  if (!clientIp) return false;

  const now = Date.now();
  const recentRequests = (requestHistory.get(clientIp) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestHistory.set(clientIp, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestHistory.set(clientIp, recentRequests);
  return false;
}

async function sendEmail(to: string, subject: string, text: string, replyTo?: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    throw new Error("Email is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], subject, text, ...(replyTo ? { reply_to: replyTo } : {}) }),
  });

  if (!response.ok) throw new Error(`Email provider returned ${response.status}.`);
}

async function alertSheetFailure(data: ContactData, error: unknown) {
  const recipient = process.env.CONTACT_INTERNAL_ALERT_EMAIL || DEFAULT_INTERNAL_ALERT_EMAIL;

  if (!recipient) {
    console.error(
      "Contact lead backup alert is not configured. Set CONTACT_INTERNAL_ALERT_EMAIL so failed Google Sheets submissions trigger an internal notification.",
      error
    );
    return;
  }

  try {
    await sendEmail(
      recipient,
      "Contact form backup alert: Google Sheets submission failed",
      [
        "A contact form lead could not be saved to Google Sheets.",
        "",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Inquiry type: ${data.inquiryType}`,
        `Message: ${data.message}`,
        "",
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
      ].join("\n")
    );
  } catch (alertError) {
    console.error("Contact lead backup alert failed:", alertError);
  }
}

export async function POST(request: Request) {
  try {
    if (isRateLimited(request)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data = await request.json();

    const { name, email, inquiryType, message, website } = data;

    if (website) {
      return NextResponse.json({ success: true, message: "Message submitted successfully." });
    }

    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required.",
        },
        { status: 400 }
      );
    }

    try {
      const googleSheetsUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;

      if (!googleSheetsUrl) throw new Error("Google Sheets URL is not configured.");

      const response = await fetch(googleSheetsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, inquiryType, message }),
      });

      if (!response.ok) throw new Error("Failed to save data to Google Sheets.");
    } catch (error) {
      await alertSheetFailure({ name, email, inquiryType, message }, error);
      throw error;
    }

    try {
      await sendEmail(
        email,
        "We received your message | Articog",
        [`Hi ${name},`, "", "Thanks for reaching out to Articog. We received your message and will follow up within 1 business day.", "", "Best,", "The Articog team"].join("\n"),
        email
      );
    } catch (emailError) {
      console.error("Contact confirmation email failed after lead was saved:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Message submitted successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}