import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Microscope, ListTree, FileJson, Info } from "lucide-react";

export const metadata = {
  title: "Testing & Variants — Articog",
  description:
    "Structured, hypothesis-driven creative testing for paid campaigns.",
};

export default function TestingVariantsPage() {
  const features = [
    {
      title: "Hypothesis-Driven",
      desc: "Every variant starts with a clear hypothesis tied to a specific performance goal.",
      icon: Microscope,
    },
    {
      title: "Structured Testing",
      desc: "Systematic testing frameworks help identify which creative variables actually drive results.",
      icon: ListTree,
    },
    {
      title: "Performance Data",
      desc: "Creative decisions are informed by performance signals rather than subjective opinions.",
      icon: FileJson,
    },
    {
      title: "Clear Learnings",
      desc: "Every test produces actionable learnings that inform the next round of creative.",
      icon: Info,
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
                Services / Ad Creative
              </span>
            </div>

            <Heading as="h1" size="hero" className="mb-6">
              Testing & Variants
            </Heading>

            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Structured, hypothesis-driven creative testing for paid
              campaigns. Turn creative iteration into a repeatable performance
              engine.
            </p>
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">
              What's Included
            </h2>

            <p className="font-sans text-white/50 max-w-2xl">
              A systematic approach to creative experimentation designed to
              generate meaningful performance insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="font-sans text-sm text-white/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Testing Process */}
      <Section className="py-24 border-t border-white/5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-white mb-6">
                Test. Learn. Iterate.
              </h2>

              <p className="font-sans text-lg text-white/60 leading-relaxed mb-6">
                We turn creative testing into a continuous learning loop. Each
                round of variants builds on the insights from the previous one,
                helping your team move faster with greater confidence.
              </p>

              <div className="space-y-4">
                {[
                  "Define the creative hypothesis",
                  "Build multiple controlled variants",
                  "Launch and measure performance",
                  "Apply learnings to the next iteration",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 text-white/70"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-white/50">
                      {index + 1}
                    </div>

                    <span className="font-sans text-sm font-medium">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-12">
              <Microscope className="w-32 h-32 text-white/10" />

              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">
              Ready to test what works?
            </h2>

            <Link href="/book-a-demo">
              <Button
                size="lg"
                className="rounded-full px-8 h-14 text-lg"
              >
                Start Creative Testing
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}