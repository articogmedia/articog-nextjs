import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Testing & Variants — Articog",
  description: "Hypothesis-driven creative testing for paid campaigns. Structured variant taxonomy and clean asset tracking for performance insights.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Microscope, ListTree, FileJson, Info } from "lucide-react";

export default function TestingVariantsPage() {
  const steps = [
    {
      title: "Test Hypothesis",
      desc: "Each round starts with a clear question we're testing, not random variation. We isolate variables to find what actually moves the needle.",
      icon: Microscope,
    },
    {
      title: "Variant Taxonomy",
      desc: "A structured system for organizing what changed between each variant, ensuring every test result is actionable and clear.",
      icon: ListTree,
    },
    {
      title: "Asset Naming & Export Specs",
      desc: "Consistent naming and export formats so your team and ad platforms can track results cleanly across the entire funnel.",
      icon: FileJson,
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
              Creative Testing & Variants
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Structured, hypothesis-driven creative testing for paid campaigns. We help you move beyond guesswork with a scientific approach to creative production.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">How It Works</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              Our structured pipeline ensures that every variant produced serves a specific strategic purpose in your testing matrix.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

          <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4 max-w-2xl">
            <Info className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" />
            <p className="font-sans text-sm text-white/50 italic leading-relaxed">
              Note: We do not make guaranteed performance claims. Our testing surfaces what works for your specific audience through data-backed iteration.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to optimize your creative?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Build a Test Matrix
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
