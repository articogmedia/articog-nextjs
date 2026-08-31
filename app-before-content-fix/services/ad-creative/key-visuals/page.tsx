import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import {
  Lightbulb,
  Target,
  LayoutGrid,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Campaign Key Visuals   Articog",
  description:
    "Core visual systems that anchor campaigns across channels. Developing high-fidelity hero visuals and scalable creative frameworks.",
};

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

  const rolloutExamples = [
    "Hero Key Visual",
    "Social Reels",
    "Display Ads",
    "Out of Home",
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Services / Ad Creative
              </span>
            </div>

            <Heading as="h1" size="hero" className="mb-6">
              Campaign Key Visuals
            </Heading>

            <p className="font-sans text-xl leading-relaxed text-white/60">
              Developing the core visual system that anchors a campaign across
              every channel. We build worlds that your brand lives within.
            </p>
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section className="bg-white/[0.02] py-20">
        <Container>
          <div className="mb-12">
            <h2 className="mb-4 font-display text-3xl font-semibold text-white">
              How It Works
            </h2>

            <p className="max-w-2xl font-sans text-white/50">
              From initial concepting to final multi-channel rollout, we ensure
              your campaign's visual anchor is both stunning and scalable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <h3 className="mb-2 font-display text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="font-sans text-sm leading-relaxed text-white/50">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Rollout Examples */}
          <div className="mt-12 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8">
            <h4 className="mb-3 font-display text-lg font-semibold text-white">
              Rollout Examples
            </h4>

            <p className="mb-4 font-sans text-sm leading-relaxed text-white/50">
              Our process shows exactly how one key visual extends into a full
              campaign from billboard-scale hero assets to social reels and
              display banners.
            </p>

            <div className="flex flex-wrap gap-3">
              {rolloutExamples.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white/40"
                >
                  <ChevronRight className="h-3 w-3" />
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 font-display text-4xl font-semibold text-white">
              Ready to build your campaign world?
            </h2>

            <Link href="/book-a-demo">
              <Button
                size="lg"
                className="h-14 rounded-full px-8 text-lg"
              >
                Develop a Campaign World
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}