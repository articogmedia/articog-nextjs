import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import {
  Microscope,
  ListTree,
  FileJson,
  Info,
} from "lucide-react";

export const metadata = {
  title: "Creative Testing & Variants — Articog",
  description:
    "Hypothesis-driven creative testing for paid campaigns. Structured variant taxonomy and clean asset tracking for performance insights.",
};

function TestingVariantsPage() {
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
    <div className="min-h-screen bg-black text-white">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Services / Ad Creative
              </span>
            </div>

            <Heading as="h1" size="hero" className="mb-6">
              Creative Testing & Variants
            </Heading>

            <p className="font-sans text-xl leading-relaxed text-white/60">
              Structured, hypothesis-driven creative testing for paid
              campaigns. We help you move beyond guesswork with a scientific
              approach to creative production.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/[0.02] py-20">
        <Container>
          <div className="mb-12">
            <h2 className="mb-4 font-display text-3xl font-semibold text-white">
              How It Works
            </h2>

            <p className="max-w-2xl font-sans text-white/50">
              Our structured pipeline ensures that every variant produced
              serves a specific strategic purpose in your testing matrix.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <step.icon className="h-5 w-5 text-white" />
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
            ))}
          </div>

          <div className="mt-12 flex max-w-2xl items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-white/40" />

            <p className="font-sans text-sm italic leading-relaxed text-white/50">
              Note: We do not make guaranteed performance claims. Our testing
              surfaces what works for your specific audience through
              data-backed iteration.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 font-display text-4xl font-semibold text-white">
              Ready to optimize your creative?
            </h2>

            <Link href="/book-a-demo">
              <Button
                size="lg"
                className="h-14 rounded-full px-8 text-lg"
              >
                Build a Test Matrix
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default TestingVariantsPage;