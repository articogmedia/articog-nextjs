import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "California Privacy Notice — Articog",
  description: "Supplemental privacy notice for California residents under CCPA/CPRA.",
};
import { Container, Section, Heading } from "@/components/ui";

export default function CaliforniaPrivacyPage() {
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
              SUPPLEMENTAL NOTICE
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              California Privacy Notice
            </Heading>
            <p className="mb-12 font-sans text-xs uppercase tracking-widest text-white/30">
              Last updated: {today}
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">Applicability</h2>
                <div className="font-sans text-sm leading-relaxed text-white/60">
                  <p>
                    This California Privacy Notice ("Notice") applies as required under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). 
                  </p>
                  <p className="mt-4 italic text-white/40 border-t border-white/5 pt-2">
                    Note: Applicability is subject to statutory thresholds and will be confirmed with legal counsel.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">Categories of Personal Information Collected</h2>
                <div className="font-sans text-sm leading-relaxed text-white/60 space-y-4">
                  <p>In the past 12 months, we may have collected the following categories of personal information:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Identifiers:</strong> Such as contact information (name, email address).</li>
                    <li><strong>Usage Data:</strong> Information about your interaction with our website and services.</li>
                  </ul>
                  <p className="text-white/40 italic">Categories and specific data points are being finalized based on internal data mapping.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">Purposes of Collection</h2>
                <div className="font-sans text-sm leading-relaxed text-white/60 space-y-4">
                  <p>We collect this personal information for the following business purposes:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Responding to your inquiries and providing customer support.</li>
                    <li>Analyzing website performance and improving our services.</li>
                    <li>Marketing our services to you, where permitted by law.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">Your California Rights</h2>
                <div className="font-sans text-sm leading-relaxed text-white/60 space-y-4">
                  <p>As a California resident, you have the following rights:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Right to Know:</strong> Right to request details about the personal information we collect and share.</li>
                    <li><strong>Right to Delete:</strong> Right to request deletion of your personal information.</li>
                    <li><strong>Right to Correct:</strong> Right to correct inaccurate personal information.</li>
                    <li><strong>Right to Opt-Out:</strong> Right to opt-out of the "sale" or "sharing" of personal information.</li>
                    <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising any of these rights.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-white mb-4">How to Exercise Your Rights</h2>
                <div className="font-sans text-sm leading-relaxed text-white/60">
                  <p>
                    To exercise your rights, please visit our <a href="/privacy-choices" className="text-white underline underline-offset-4 hover:text-white/80 transition-colors">Privacy Choices</a> page or submit a request via our specialized intake form.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
