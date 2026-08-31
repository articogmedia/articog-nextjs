import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articog vs Traditional Agencies — Articog",
  description: "A comparison of Articog's AI-native model versus traditional agency structures.",
};
import { Link } from "@/components/ui/Link";
import { Container, Section, Button, Heading } from "@/components/ui";

export default function CompareAgenciesPage() {
  const comparisons = [
    {
      feature: "Speed",
      agency: "Multi-week campaign cycles from brief to first draft.",
      articog: "Production-ready assets delivered in days, not weeks.",
    },
    {
      feature: "Flexibility",
      agency: "Fixed retainer scopes that are difficult to adjust mid-month.",
      articog: "Fully scalable capacity that matches your actual monthly volume.",
    },
    {
      feature: "Specialization",
      agency: "Broad service range often spread across many legacy disciplines.",
      articog: "Deep, focused expertise in AI-native creative production.",
    },
    {
      feature: "Project Management",
      agency: "Multiple layers of account teams and coordination overhead.",
      articog: "Streamlined, direct workflow with high transparency.",
    },
    {
      feature: "Strategy & Production",
      agency: "Strategy and production often siloed in different teams.",
      articog: "Strategy and production integrated into a single, seamless pipeline.",
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
              COMPARISON
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Articog vs Traditional Agencies
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              We've reimagined creative production from the ground up. This is a fair look at how our AI-native model stacks up against traditional agency structures.
            </p>
          </div>

          <div className="mx-auto max-w-5xl mb-20 overflow-hidden rounded-2xl border border-white/[0.08]" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="grid grid-cols-3 border-b border-white/[0.08] bg-white/[0.03]">
              <div className="p-6 font-sans text-xs font-bold uppercase tracking-widest text-white/40">Category</div>
              <div className="p-6 font-sans text-xs font-bold uppercase tracking-widest text-white/40">Traditional Agency</div>
              <div className="p-6 font-sans text-xs font-bold uppercase tracking-widest text-accent">Articog</div>
            </div>
            {comparisons.map((row) => (
              <div key={row.feature} className="grid grid-cols-3 border-b border-white/[0.08] last:border-0">
                <div className="p-6 font-display text-sm font-semibold text-white/90">{row.feature}</div>
                <div className="p-6 font-sans text-sm leading-relaxed text-white/40">{row.agency}</div>
                <div className="p-6 font-sans text-sm leading-relaxed text-white/70">{row.articog}</div>
              </div>
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Discuss Your Model</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
