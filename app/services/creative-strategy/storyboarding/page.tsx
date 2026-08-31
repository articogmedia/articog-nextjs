import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storyboarding & Previsualization Articog",
  description: "Planning every shot before production begins to ensure consistency and eliminate surprises.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { List, Layout, Play, RefreshCw, Lock } from "lucide-react";

export default function StoryboardingPage() {
  const howItWorks = [
    {
      title: "Shot List",
      desc: "Every shot planned and sequenced to ensure the narrative flow is tight and effective.",
      icon: List,
    },
    {
      title: "Storyboard",
      desc: "A visual frame-by-frame plan of the project, establishing composition and lighting early.",
      icon: Layout,
    },
    {
      title: "Animatic",
      desc: "A rough timed cut showing pacing and timing before moving into final production.",
      icon: Play,
    },
    {
      title: "Continuity",
      desc: "Consistency checks across every shot and scene to maintain a cohesive visual world.",
      icon: RefreshCw,
    },
    {
      title: "Approval Gates",
      desc: "Clear checkpoints where you sign off on the plan before we move to full-scale production.",
      icon: Lock,
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
              Storyboarding & Previsualization
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Plan every shot before production begins, so there are no surprises later. We provide a clear visual roadmap for your campaign.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">How It Works</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              Our previsualization process bridge the gap between concept and reality.
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
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to see the plan?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Previsualize Your Campaign
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
