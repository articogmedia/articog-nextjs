import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Testing at Scale — Articog",
  description: "Structured, ongoing creative testing programs to drive continuous performance improvements through AI-native production.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Lightbulb, TableProperties, Tag, Zap, RefreshCcw, Info } from "lucide-react";

export default function CreativeTestingSolutionPage() {
  const howItWorks = [
    {
      title: "Hypotheses",
      desc: "Each sprint starts with clear, data-driven questions to answer through creative execution.",
      icon: Lightbulb,
    },
    {
      title: "Variant Matrix",
      desc: "A structured map of what's being tested and why, ensuring every variant serves a purpose.",
      icon: TableProperties,
    },
    {
      title: "Naming & Organization",
      desc: "Consistent, machine-readable asset naming for clean tracking and reporting.",
      icon: Tag,
    },
    {
      title: "Production at Volume",
      desc: "Variants produced fast enough to keep your testing cycles continuous and relevant.",
      icon: Zap,
    },
    {
      title: "Learning Loop",
      desc: "Insights from each sprint directly inform the creative directions of the next.",
      icon: RefreshCcw,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Solutions
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Creative Testing at Scale
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Moving beyond one-off test batches. We build structured, ongoing creative testing programs that drive continuous performance improvements for your brand.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">How It Works</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              Our systematic approach to testing turns creative into a predictable driver of growth.
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

          <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4 max-w-2xl mx-auto">
            <Info className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" />
            <p className="font-sans text-sm text-white/50 italic leading-relaxed">
              Need technical details on our variant production? Visit the <Link href="/services/ad-creative/testing-variants" className="text-white underline hover:text-white/80 transition-colors">Testing & Variants service page</Link>.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to optimize?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Build a Testing Sprint
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
