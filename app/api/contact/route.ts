import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, inquiryType, message } = data;

    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const googleSheetsUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;

    if (!googleSheetsUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Google Sheets URL is not configured.",
        },
        { status: 500 }
      );
    }

    const response = await fetch(googleSheetsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        inquiryType,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save data to Google Sheets.");
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