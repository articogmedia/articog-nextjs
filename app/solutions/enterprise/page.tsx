import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Production — Articog",
  description: "Creative production built for large organizations with procurement, security, and governance requirements.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ShieldCheck, FileText, Users, Eye, ClipboardList, Info } from "lucide-react";

export default function EnterpriseSolutionPage() {
  const whatIsIncluded = [
    {
      title: "Security & NDA",
      desc: "Formal confidentiality agreements and data handling standards that meet enterprise requirements.",
      icon: ShieldCheck,
    },
    {
      title: "IP & Ownership",
      desc: "Clear, contract-defined ownership terms ensuring you own the assets we produce.",
      icon: FileText,
    },
    {
      title: "Dedicated Account Model",
      desc: "A consistent account team who understands your organization and brand nuances.",
      icon: Users,
    },
    {
      title: "Governance",
      desc: "Structured brand and compliance review built directly into the production workflow.",
      icon: Eye,
    },
    {
      title: "Onboarding",
      desc: "A defined process for bringing your brand assets, stakeholders, and approval chain into our system.",
      icon: ClipboardList,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Solutions
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Enterprise AI Production
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Creative production built for large organizations with procurement, security and governance requirements. We scale with you while maintaining full compliance.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">What's Included</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              Our enterprise framework is designed for transparency, security, and seamless organizational integration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whatIsIncluded.map((item) => (
              <div 
                key={item.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4 max-w-2xl mx-auto text-center justify-center">
            <Info className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" />
            <p className="font-sans text-sm text-white/50 italic leading-relaxed">
              Procurement documentation and security whitepapers are available on request.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to bring Articog to your organization?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Talk to Enterprise Sales
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
