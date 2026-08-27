import { Container, Section, Heading } from "@/components/ui";

export default function PrivacyChoicesPage() {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              LEGAL
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Your Privacy Choices
            </Heading>
            <p className="mb-12 font-sans text-xs uppercase tracking-widest text-white/30">
              Last updated: {today}
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">Your Rights</h2>
                <div className="font-sans text-sm leading-relaxed text-white/60 space-y-4">
                  <p>
                    Articog respects your privacy and is committed to being transparent about how we process your personal information. Depending on where you reside and which state privacy laws apply, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Right to Know:</strong> The right to request information about the categories and specific pieces of personal information we have collected about you.</li>
                    <li><strong>Right to Delete:</strong> The right to request the deletion of personal information we have collected from you, subject to certain exceptions.</li>
                    <li><strong>Right to Correct:</strong> The right to request that we correct inaccurate personal information that we maintain about you.</li>
                    <li><strong>Right to Opt-Out:</strong> The right to opt-out of the "sale" or "sharing" of your personal information for targeted advertising purposes.</li>
                  </ul>
                  <p className="italic text-white/40 pt-2 border-t border-white/5">
                    Note: These rights are subject to finalization based on legal review of applicable state laws.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">Global Privacy Control</h2>
                <div className="font-sans text-sm leading-relaxed text-white/60">
                  <p>
                    We honor Global Privacy Control (GPC) signals where legally required. If you have a GPC signal enabled on your browser, our systems will detect and respect your preference to opt-out of the sale or sharing of your personal information for targeted advertising purposes on that browser.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">How to Submit a Request</h2>
                <div className="font-sans text-sm leading-relaxed text-white/60">
                  <p>
                    To exercise any of your privacy rights, please submit a request by emailing us at:
                  </p>
                  <p className="mt-4 font-medium text-white">
                    <a href="mailto:info@articog.com" className="underline hover:text-white/80 transition-colors">info@articog.com</a>
                  </p>
                  <p className="mt-4 text-white/40">
                    Additional request methods, including a dedicated web form, are being finalized.
                  </p>
                </div>
              </section>

              <div className="pt-12 border-t border-white/10">
                <p className="font-sans text-xs text-white/40">
                  For more detailed information about our privacy practices, please visit our full <a href="/privacy" className="text-white hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
