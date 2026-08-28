import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concept Development — Articog",
  description: "Exploring multiple creative directions before committing to production to ensure alignment with your goals.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Layers, Target, Image, FileText, CheckCircle2 } from "lucide-react";

export default function ConceptDevelopmentPage() {
  const howItWorks = [
    {
      title: "Multiple Routes",
      desc: "3-5 distinct creative concepts developed per brief to give you a range of strategic options.",
      icon: Layers,
    },
    {
      title: "Rationale",
      desc: "Each concept presented with clear reasoning tied directly to your business goals and audience.",
      icon: Target,
    },
    {
      title: "Moodboards",
      desc: "Visual references grounding each direction in a specific aesthetic and emotional tone.",
      icon: Image,
    },
    {
      title: "Script & Visual Direction",
      desc: "Early direction for tone, pacing, and look to establish the foundation of the project.",
      icon: FileText,
    },
    {
      title: "Feasibility Review",
      desc: "Each concept checked against timeline and budget constraints before you make your selection.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Services / Strategy
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Concept Development
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Explore multiple creative directions before committing to production. We ensure every idea is strategically sound and aligned with your vision.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">How It Works</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              Our systematic approach to creative exploration ensures you never have to settle for the first idea.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to define your direction?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Develop Concepts
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
