import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible AI Articog",
  description: "Our principles for ethical and responsible AI use in creative production.",
};
import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ShieldCheck, UserCheck, Eye, AlertCircle } from "lucide-react";

export default function ResponsibleAIPage() {
  const principles = [
    {
      title: "Consent for Likeness & Voice",
      icon: <UserCheck className="w-6 h-6 text-white/40" />,
      description: "We strictly adhere to ethical standards regarding synthetic media. Any use of a real person's likeness or voice in our production pipeline requires explicit, documented authorization and proper licensing.",
    },
    {
      title: "No Deceptive Impersonation",
      icon: <ShieldCheck className="w-6 h-6 text-white/40" />,
      description: "We do not produce content designed to deceive audiences. Our AI-generated assets are intended for creative expression and brand storytelling, not for misleading impersonation without proper disclosure where appropriate.",
    },
    {
      title: "Human Review",
      icon: <Eye className="w-6 h-6 text-white/40" />,
      description: "AI is an accelerator, not an autopilot. Every asset produced by Articog undergoes a thorough manual review by our creative team to ensure brand integrity, quality standards, and ethical compliance before final delivery.",
    },
    {
      title: "Escalation & Governance",
      icon: <AlertCircle className="w-6 h-6 text-white/40" />,
      description: "We maintain clear internal governance for AI production. A defined escalation process exists for flagging and resolving any content concerns, ensuring that all work meets our high bars for responsibility and quality.",
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
              TRUST & ETHICS
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Responsible AI
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
              The principles and ethical guardrails that guide how we use AI to build the future of creative production.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-24">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="group rounded-2xl p-8 border border-white/[0.08] transition-all hover:border-white/20 hover:bg-white/[0.02]"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                <div className="mb-6 w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-4">{principle.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Heading as="h2" size="section" className="mb-8">
              Commitment to Transparency
            </Heading>
            <p className="mx-auto max-w-xl font-sans text-base mb-10 text-white/60">
              Our approach to AI is built on the foundation of trust. We work closely with brand legal and creative teams to ensure every project aligns with both industry standards and company-specific values.
            </p>
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Talk to our Team</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
