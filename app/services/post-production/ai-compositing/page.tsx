import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Compositing & Cleanup — Articog",
  description: "Using AI to fix, enhance and clean up existing footage. Remove unwanted elements and improve quality without a reshoot.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Eye, ShieldCheck, Wand2, UserCheck } from "lucide-react";

export default function AICompositingPage() {
  const howItWorks = [
    {
      title: "Before/After Proof",
      desc: "Results shown transparently so you can see exactly what changed and verify the improvement.",
      icon: Eye,
    },
    {
      title: "Product & Logo Integrity",
      desc: "Careful preservation of brand and product accuracy through any automated or manual edit.",
      icon: ShieldCheck,
    },
    {
      title: "Artifact Cleanup",
      desc: "Removing visual noise, glitches, or unwanted elements that distract from the main subject.",
      icon: Wand2,
    },
    {
      title: "Human QA",
      desc: "Every AI-assisted edit is meticulously reviewed by a human finishing artist before delivery.",
      icon: UserCheck,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Services / Post-Production
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              AI Compositing & Cleanup
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Using AI to fix, enhance and clean up existing footage. We remove unwanted elements, correct visual issues, and improve quality without the need for a full reshoot.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">How It Works</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              Our AI-native cleanup process combines technical precision with brand-safe fidelity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {howItWorks.map((item) => (
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
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to improve your sequence?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Improve Your Sequence
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
