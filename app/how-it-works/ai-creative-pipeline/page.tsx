import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI Creative Pipeline Articog",
  description: "Explore the technical details of our AI Creative Pipeline. From brief intake to multi-model generation and human-in-the-loop curation.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ClipboardList, Cpu, UserCheck, RefreshCw } from "lucide-react";

export default function AICreativePipelinePage() {
  const stages = [
    {
      title: "Brief Intake & Direction Mapping",
      desc: "Creative direction is set before any generation begins. We translate your goals into a technical blueprint that guides the entire pipeline.",
      icon: ClipboardList,
    },
    {
      title: "Multi-Model Generation",
      desc: "Our pipeline runs across multiple specialized AI models and iteration loops, selecting and blending the best outputs for your specific brand.",
      icon: Cpu,
    },
    {
      title: "Human Curation & Quality Review",
      desc: "Every output is reviewed by a human creative lead against your brand guidelines for fidelity, style, and quality before it ever reaches you.",
      icon: UserCheck,
    },
    {
      title: "Feedback-Driven Refinement",
      desc: "Your feedback is incorporated in fast, automated iteration cycles, moving at the speed of software rather than slow, manual revision rounds.",
      icon: RefreshCw,
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
                Workflow
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              The AI Creative Pipeline
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              A deep look at what happens between your brief and the final delivery. Our pipeline combines state-of-the-art AI with expert human oversight.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pipeline Stages Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">Pipeline Stages</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              A technical overview of our production engine, built for scale and precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stages.map((stage) => (
              <div 
                key={stage.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <stage.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{stage.title}</h3>
                <p className="font-sans text-base text-white/50 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Calibration Note Section */}
      <Section className="py-20 border-t border-white/5">
        <Container>
          <div className="p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 max-w-4xl">
            <h3 className="font-display text-2xl font-semibold text-white mb-4">Custom Calibration</h3>
            <p className="font-sans text-white/70 leading-relaxed max-w-2xl">
              It's important to note that the AI Creative Pipeline is not one-size-fits-all. Every pipeline is calibrated per-brand, incorporating your unique visual assets, tone of voice, and industry-specific requirements to ensure every output is unmistakably yours.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to plug into the pipeline?</h2>
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
