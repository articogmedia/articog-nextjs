import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Lightbulb, Target, LayoutGrid, CheckCircle2, ChevronRight } from "lucide-react";

export default function KeyVisualsPage() {
  const steps = [
    {
      title: "Concept Routes",
      desc: "Multiple creative directions explored before committing. We present diverse interpretations of your brief to ensure the strongest path forward.",
      icon: Lightbulb,
    },
    {
      title: "Hero Key Visual",
      desc: "One core image or visual system selected and refined to perfection. This anchors the entire campaign's aesthetic identity.",
      icon: Target,
    },
    {
      title: "Visual System",
      desc: "Guidelines for extending the hero visual across formats and channels while maintaining absolute brand coherence.",
      icon: LayoutGrid,
    },
    {
      title: "Product Fidelity",
      desc: "Your product represented accurately throughout. We use advanced AI techniques to maintain perfect likeness in every rendering.",
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
                Services / Ad Creative
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Campaign Key Visuals
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Developing the core visual system that anchors a campaign across every channel. We build worlds that your brand lives within.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">How It Works</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              From initial concepting to final multi-channel rollout, we ensure your campaign's visual anchor is both stunning and scalable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div 
                key={step.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10 max-w-2xl">
            <h4 className="font-display text-lg font-semibold text-white mb-3">Rollout Examples</h4>
            <p className="font-sans text-sm text-white/50 leading-relaxed mb-4">
              Our process shows exactly how one key visual extends into a full campaign—from billboard-scale hero assets to social reels and display banners.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Hero Key Visual', 'Social Reels', 'Display Ads', 'Out of Home'].map((tag) => (
                <div key={tag} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/40 uppercase tracking-widest">
                  <ChevronRight className="w-3 h-3" />
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to build your campaign world?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Develop a Campaign World
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
