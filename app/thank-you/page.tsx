import type { Metadata } from "next";
import { Link } from "@/components/ui/Link";
import { Container, Section, Button } from "@/components/ui";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You Articog",
  description: "Thank you for contacting Articog.",
  robots: { index: false, follow: false },
};

export default function ContactThankYouPage() {
  return (
    <Section size="lg" className="pt-32 md:pt-40 min-h-[80vh] flex items-center bg-black">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <CheckCircle2 size={32} />
            </div>
          </div>
          <h1 className="font-display font-semibold text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            Message received
          </h1>
          <p className="mx-auto mb-10 max-w-md font-sans text-base md:text-lg" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
            Thanks for reaching out. We&apos;ll follow up within 1 business day.
          </p>
          <Button asChild variant="primary" size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
