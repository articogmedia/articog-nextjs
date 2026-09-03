import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works Articog",
  description: "Our human-directed, AI-accelerated creative production process.",
};
import { Link } from "@/components/ui/Link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Button, Heading } from "@/components/ui";

export default function HowItWorksPage() {
  const steps = [
    {
      step: "Day 1",
      title: "Brief",
      description: "Share your goal and references. We align on brand voice, visual direction, and performance objectives before production."
    },
    {
      step: "Day 1-2",
      title: "Generate",
      description: "Our brand-calibrated AI pipeline explores creative directions and delivers first outputs within hours."
    },
    {
      step: "Day 2-3",
      title: "Refine",
      description: "Review a curated selection. Creative directors refine each asset through fast feedback cycles."
    },
    {
      step: "Day 3-4",
      title: "Deliver",
      description: "Receive production-ready assets in the formats, aspect ratios, and language variants your campaign needs."
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              HOW IT WORKS
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              From brief to live in days
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
              We replace rigid timelines and overhead with a high-velocity engine powered by AI and directed by humans.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
            {steps.map((step) => (
              <div 
                key={step.title}
                className="rounded-2xl p-8 border border-white/[0.08]"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="mb-6 font-sans text-xs font-bold uppercase tracking-widest text-accent">
                  {step.step}
                </div>
                <h3 className="mb-4 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <Link
              href="/how-it-works/ai-creative-pipeline"
              className="group block rounded-2xl p-8 border border-white/[0.08] transition-all hover:border-white/20 hover:bg-white/[0.02] text-center"
              style={{ background: "rgba(255,255,255,0.01)" }}
            >
              <h3 className="mb-2 font-display text-xl font-semibold text-white flex items-center justify-center gap-2">
                AI Creative Pipeline
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </h3>
              <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.50)" }}>
                Take a deeper technical look at our internal creative engine.
              </p>
            </Link>
          </div>
        </Container>
      </Section>

      <Section size="md" className="pt-0">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Heading as="h2" size="section" className="mb-6">
              Human oversight, every step
            </Heading>
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.60)" }}>
              A Creative Director reviews every project for brand safety, legal compliance, and quality.
            </p>
          </div>
        </Container>
      </Section>

      <Section size="lg" className="pb-32">
        <Container>
          <div className="text-center pt-16 border-t border-white/10">
            <Heading as="h2" size="section" className="mb-8">
              Ready to accelerate your production?
            </Heading>
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Talk to us</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
