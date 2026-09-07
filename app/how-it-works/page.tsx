import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works Articog",
  description: "Our human-directed, AI-accelerated creative production process.",
  alternates: { canonical: "https://articog.com/how-it-works" },
};
import { Link } from "@/components/ui/Link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Button, Heading } from "@/components/ui";
import { Pipeline } from "@/components/sections/Pipeline";

export default function HowItWorksPage() {
  const pipelineSteps = [
    {
      step: 1,
      title: "Brief",
      description: "Share your goal and references. We align on brand voice, visual direction, and performance objectives before production.",
      tag: "Day 1",
    },
    {
      step: 2,
      title: "Generate",
      description: "Our brand-calibrated AI pipeline explores creative directions and delivers first outputs within hours.",
      tag: "Day 1-2",
    },
    {
      step: 3,
      title: "Refine",
      description: "Review a curated selection. Creative directors refine each asset through fast feedback cycles.",
      tag: "Day 2-3",
    },
    {
      step: 4,
      title: "Deliver",
      description: "Receive production-ready assets in the formats, aspect ratios, and language variants your campaign needs.",
      tag: "Day 3-4",
    },
  ];

  const onboardingSteps = [
    ["Brand Assets", "Collecting your logo, guidelines, and existing creative for reference to ensure brand consistency."],
    ["Stakeholders", "Identifying who's involved in review and approval to streamline the feedback loop."],
    ["Rights & Permissions", "Confirming usage rights and any necessary consents upfront to protect your brand."],
    ["Approval SLAs", "Agreeing on how fast reviews and feedback will happen to maintain production momentum."],
    ["First Project Roadmap", "A clear, milestone-driven timeline for your first deliverable and campaign launch."],
  ];

  const deliverySteps = [
    ["Feedback Windows", "A defined period for review and feedback on each round to maintain production velocity."],
    ["Version Control", "Every revision clearly labeled and tracked so nothing gets lost and the latest version is always accessible."],
    ["Revision Policy", "A clear number of included revision rounds per project, with any additional disputes handled case by case."],
    ["Final Formats", "Assets delivered in every aspect ratio, file format, and technical spec your campaign requires."],
    ["Archive", "Delivered projects kept securely accessible for future reference and repurposing."],
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

        </Container>
      </Section>

      <Pipeline steps={pipelineSteps} />

      <Section className="pt-0">
        <Container>
          <Link
            href="/how-it-works/ai-creative-pipeline"
            className="group mx-auto block max-w-2xl rounded-2xl border border-white/[0.08] p-6 text-center transition-all hover:border-white/20 hover:bg-white/[0.02]"
            style={{ background: "rgba(255,255,255,0.01)" }}
          >
            <h3 className="mb-2 flex items-center justify-center gap-2 font-display text-xl font-semibold text-white">
              AI Creative Pipeline
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.50)" }}>
              Take a deeper technical look at our internal creative engine.
            </p>
          </Link>
        </Container>
      </Section>

      <Section size="md" className="pt-0">
        <Container>
          <div className="mb-10 text-center">
            <Heading as="h2" size="section" className="mb-4">Getting started and delivery</Heading>
            <p className="mx-auto max-w-2xl font-sans text-white/50">
              We ensure every technical and creative foundation is in place before production begins. Our structured review process ensures quality and speed, from initial feedback through to final coordinated delivery across all your channels.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-2">
            {[...onboardingSteps, ...deliverySteps].map(([title, description]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <h3 className="mb-2 font-display text-base font-semibold text-white">{title}</h3>
                <p className="font-sans text-sm leading-relaxed text-white/50">{description}</p>
              </div>
            ))}
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
