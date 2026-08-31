import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Confidentiality Articog",
  description: "NDA, access control, and data handling practices at Articog.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Lock, ShieldCheck, Key } from "lucide-react";

export default function SecurityPage() {
  const sections = [
    {
      title: "Data Handling",
      desc: "Client materials, briefs, and source assets are used exclusively for the purposes of your engagement. We do not use your proprietary data to train general models or share it beyond the immediate production team.",
      icon: Lock,
    },
    {
      title: "Confidentiality",
      desc: "We understand the sensitive nature of pre-launch campaigns and product roadmaps. Standard Non-Disclosure Agreements (NDAs) are available on request for all projects to ensure your peace of mind.",
      icon: ShieldCheck,
    },
    {
      title: "Access Controls",
      desc: "Project access is strictly limited to the specific creative leads and production specialists assigned to your account, ensuring your assets remain secure throughout the creative pipeline.",
      icon: Key,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Trust Center
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Security & Confidentiality
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Protecting your briefs, assets, and data throughout the production cycle is our highest priority. We build security into every step of our creative pipeline.
            </p>
          </div>
        </Container>
      </Section>

      {/* Standards Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div 
                key={section.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <section.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-4">{section.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">{section.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Onboarding Note Section */}
      <Section className="py-20 border-t border-white/5">
        <Container>
          <div className="p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 max-w-4xl text-center mx-auto">
            <p className="font-sans text-white/70 leading-relaxed">
              Every brand has unique requirements. Specific security protocols, data retention terms, and compliance needs can be discussed and formalized as part of your onboarding process.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Discuss your security requirements</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Book a Demo
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
