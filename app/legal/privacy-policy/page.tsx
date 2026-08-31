import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy Articog",
  description: "How Articog collects, uses, and protects your personal information.",
};
import { Container, Section, Heading } from "@/components/ui";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us via our contact and demo request forms, including your full name, work email, company name, and any details you include in your creative briefs. We also collect site usage data and information through cookies to understand how visitors interact with our website.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use your information to respond to your inquiries, schedule demos, and improve our creative production services. We do not sell your personal data to third parties.",
    },
    {
      title: "Cookies & Tracking",
      content:
        "We use cookies to analyze site traffic and optimize your experience. By using our site, you consent to our use of tracking technologies for these purposes.",
    },
    {
      title: "Your Rights",
      content:
        "For visitors from the United States, you have the right to know what personal information is collected, request deletion of your information, and opt out of the sale of personal information under the CCPA/CPRA. We do not sell personal data, but we honor all verified deletion requests.",
    },
    {
      title: "Data Security",
      content:
        "We implement appropriate technical and organizational measures to protect your data against unauthorized access, disclosure, or destruction. We use secure servers and industry-standard encryption for data in transit.",
    },
    {
      title: "Contact Us",
      content:
        "If you have questions about this Privacy Policy or our data practices, please contact our team at info@articog.com.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl mb-24">
            <span className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">Privacy</span>
            <Heading as="h1" size="hero" className="mb-4">
              Privacy Policy
            </Heading>
            <p className="font-sans text-sm mb-16 text-white/40">
              Last updated: August 19, 2026
            </p>

            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-display text-xl font-semibold text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="font-sans text-base leading-relaxed text-white/60">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
