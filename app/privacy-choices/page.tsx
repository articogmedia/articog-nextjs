import type { Metadata } from "next";
import { Container, Section, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";

export const metadata: Metadata = {
  title: "Your Privacy Choices | Articog",
  description: "Information about your privacy rights and how to exercise them.",
};

export default function PrivacyChoicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Legal
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Your Privacy Choices
            </Heading>
            <p className="mb-12 font-sans text-base leading-relaxed text-white/60 md:text-lg">
              Articog respects your privacy. Depending on where you live and
              which laws apply, you may have rights regarding your personal
              information.
            </p>

            <div className="space-y-12 font-sans text-sm leading-relaxed text-white/60">
              <section>
                <h2 className="mb-4 font-display text-xl font-semibold text-white">
                  Your Rights
                </h2>
                <p>
                  Depending on applicable law, you may have the right to know
                  about personal information we process, request correction or
                  deletion, withdraw consent, opt out of certain processing,
                  and request grievance redressal.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-display text-xl font-semibold text-white">
                  Global Privacy Control
                </h2>
                <p>
                  We honor Global Privacy Control signals where legally
                  required. Your browser or device must be configured to send
                  the signal for it to be detected.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-display text-xl font-semibold text-white">
                  How to Submit a Request
                </h2>
                <p>
                  To exercise a privacy right, submit a request through our{" "}
                  <Link
                    href="/privacy/request"
                    className="text-white underline underline-offset-4 hover:text-white/80"
                  >
                    Data Rights Request
                  </Link>{" "}
                  page. You can also email us at{" "}
                  <a
                    href="mailto:info@articog.com"
                    className="text-white underline underline-offset-4 hover:text-white/80"
                  >
                    info@articog.com
                  </a>
                  . We may need to verify your identity before processing a
                  request.
                </p>
              </section>

              <div className="border-t border-white/10 pt-12">
                <p className="text-xs text-white/40">
                  For more detailed information about our privacy practices,
                  please read our full{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-white hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
