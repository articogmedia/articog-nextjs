import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilot / Exploratory Project — Articog",
  description: "Start small with a fixed-scope pilot project to evaluate quality and fit.",
};
import { Link } from "@/components/ui/Link";
import { Container, Section, Button, Heading } from "@/components/ui";
import { Check } from "lucide-react";

export default function PilotPage() {
  const steps = [
    {
      title: "Eligibility",
      description: "Best suited for brands new to working with us, providing a low-risk way to experience our high-velocity production.",
    },
    {
      title: "Fixed Scope",
      description: "A clearly defined single deliverable, not open-ended, ensuring we hit specific creative and performance targets.",
    },
    {
      title: "Timeline",
      description: "A fast, bounded delivery window—typically within 5-7 business days from brief alignment.",
    },
    {
      title: "Rights",
      description: "Full usage rights for the pilot deliverable are confirmed and granted upfront upon final delivery.",
    },
    {
      title: "What Happens After",
      description: "A clear path to a larger engagement if the pilot goes well, with absolutely no obligation to continue.",
    },
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
              GETTING STARTED
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Pilot / Exploratory Project
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Experience the Articog creative engine with a single, high-impact pilot. Evaluate our quality, speed, and workflow before committing to a larger scale.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
            {steps.map((step) => (
              <div 
                key={step.title}
                className="rounded-2xl p-8 border border-white/[0.08]"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Check size={20} className="text-accent" />
                </div>
                <h3 className="mb-4 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Start a Pilot</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
