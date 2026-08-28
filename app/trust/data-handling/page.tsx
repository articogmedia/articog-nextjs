import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Handling & Retention — Articog",
  description: "Learn how Articog manages, stores, and protects client data throughout the creative production process.",
};
import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Database, Shield, Trash2, HardDrive, RefreshCw, FileText } from "lucide-react";

export default function DataHandlingPage() {
  const sections = [
    {
      title: "Storage & Security",
      icon: <Database className="w-5 h-5 text-white/40" />,
      description: "All client materials and project assets are stored in secure, encrypted environments for the duration of the engagement. We implement strict access controls to ensure only authorized team members can access project data.",
    },
    {
      title: "Retention Policy",
      icon: <HardDrive className="w-5 h-5 text-white/40" />,
      description: "Retention periods are defined per engagement. We do not keep client materials indefinitely without a clear business reason. Standard retention policies are discussed and finalized during onboarding.",
    },
    {
      title: "AI Training Policy",
      icon: <Shield className="w-5 h-5 text-white/40" />,
      description: "We maintain a clear policy regarding AI training: client-provided proprietary materials are not used to train foundation models without explicit, written consent. Your brand's intellectual property remains yours.",
    },
    {
      title: "Vendor & Sub-Processing",
      icon: <RefreshCw className="w-5 h-5 text-white/40" />,
      description: "Any third-party tools or sub-processors used in our production pipeline are vetted for rigorous data handling and security standards to ensure your data remains protected at every stage.",
    },
    {
      title: "Data Deletion",
      icon: <Trash2 className="w-5 h-5 text-white/40" />,
      description: "Upon project completion and delivery, client materials can be deleted from our active production environments on request, subject to any necessary backup or legal requirements.",
    },
    {
      title: "Backups & Continuity",
      icon: <FileText className="w-5 h-5 text-white/40" />,
      description: "We maintain regular backups of delivered work to ensure project continuity and prevent data loss, ensuring your final assets are available when you need them.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-20">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              TRUST & GOVERNANCE
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Data Handling & Retention
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
              How we manage, store, and protect your brand's data and creative materials throughout our partnership.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
            {sections.map((section) => (
              <div
                key={section.title}
                className="group rounded-2xl p-8 border border-white/[0.08] transition-all hover:border-white/20 hover:bg-white/[0.02]"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                <div className="mb-6 w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                  {section.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-4">{section.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {section.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto p-10 rounded-2xl border border-white/[0.08] bg-white/[0.01] mb-24 text-center">
            <p className="font-sans text-sm leading-relaxed mb-0" style={{ color: "rgba(255,255,255,0.40)" }}>
              Note: Specific data handling terms, retention schedules, and security protocols are detailed in each client's master service agreement (MSA).
            </p>
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Heading as="h2" size="section" className="mb-8">
              Review our practices
            </Heading>
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Review Our Data Practices</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
