import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articog vs Freelancers — Articog",
  description: "A balanced comparison of working with freelancers versus Articog's managed production team.",
};
import { Link } from "@/components/ui/Link";
import { Container, Section, Button, Heading } from "@/components/ui";

export default function CompareFreelancersPage() {
  const comparisons = [
    {
      feature: "Management Overhead",
      freelancer: "You handle sourcing, vetting, briefing, and coordination yourself.",
      articog: "One team, one point of contact. We handle the entire creative lifecycle.",
    },
    {
      feature: "Coverage",
      freelancer: "Availability varies; sick days or multiple clients create single points of failure.",
      articog: "Consistent team capacity ensures your deadlines are always met.",
    },
    {
      feature: "Continuity",
      freelancer: "Brand context often resets with each new hire or project gaps.",
      articog: "Deep brand context is retained and refined from project to project.",
    },
    {
      feature: "Cost",
      freelancer: "Lower per-project cost, but hidden costs in management and coordination time.",
      articog: "Predictable monthly pricing that includes full production management.",
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
              Articog vs Freelancers
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Freelancers can be great for specific, localized needs. However, scaling a consistent creative engine requires a different level of infrastructure and continuity.
            </p>
          </div>

          <div className="mx-auto max-w-5xl mb-20 overflow-hidden rounded-2xl border border-white/[0.08]" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="grid grid-cols-3 border-b border-white/[0.08] bg-white/[0.03]">
              <div className="p-6 font-sans text-xs font-bold uppercase tracking-widest text-white/40">Category</div>
              <div className="p-6 font-sans text-xs font-bold uppercase tracking-widest text-white/40">Freelancers</div>
              <div className="p-6 font-sans text-xs font-bold uppercase tracking-widest text-accent">Articog</div>
            </div>
            {comparisons.map((row) => (
              <div key={row.feature} className="grid grid-cols-3 border-b border-white/[0.08] last:border-0">
                <div className="p-6 font-display text-sm font-semibold text-white/90">{row.feature}</div>
                <div className="p-6 font-sans text-sm leading-relaxed text-white/40">{row.freelancer}</div>
                <div className="p-6 font-sans text-sm leading-relaxed text-white/70">{row.articog}</div>
              </div>
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Add Reliable Capacity</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
