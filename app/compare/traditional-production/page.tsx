import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articog vs Traditional Production Comparison",
  description: "A comparison of Articog's AI-accelerated creative engine versus traditional agency production models for speed, scale, and cost.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";

export default function ComparisonPage() {
  const comparisonData = [
    {
      metric: "First Output",
      traditional: {
        value: "2-4 Weeks",
        desc: "Requires lengthy onboarding, briefing sessions, and manual concepting cycles before the first draft emerges.",
      },
      articog: {
        value: "Under 24 Hours",
        desc: "Our calibrated pipeline begins generation immediately after the brief is mapped, delivering initial assets in a single day.",
      },
    },
    {
      metric: "Campaign Delivery",
      traditional: {
        value: "4-8 Weeks",
        desc: "Total timeline from brief to final channel-ready assets is slowed by sequential manual production steps.",
      },
      articog: {
        value: "3-5 Days",
        desc: "Parallelized AI generation and automated formatting allow for entire campaign kits to be delivered in less than a week.",
      },
    },
    {
      metric: "Cost Structure",
      traditional: {
        value: "High Retainer + Overages",
        desc: "Fixed costs for agency overhead plus unpredictable billing for revisions and additional asset formats.",
      },
      articog: {
        value: "Scales with Volume",
        desc: "Predictable pricing model that aligns with your actual creative output needs, eliminating wasteful overhead.",
      },
    },
    {
      metric: "Iteration Speed",
      traditional: {
        value: "Slow Revision Cycles",
        desc: "Changes often require days to process as they move back through the manual production queue.",
      },
      articog: {
        value: "Hours, Not Days",
        desc: "Feedback is integrated into fast iteration loops, allowing for creative pivots in real-time.",
      },
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
                Comparison
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6 text-white">
              Articog vs Traditional Production
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Traditional agencies do great work, but the model has real constraints at modern scale and speed. Here is how Articog's engine compares to the legacy approach.
            </p>
          </div>
        </Container>
      </Section>

      {/* Comparison Table Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-left font-display text-sm font-semibold text-white/30 uppercase tracking-widest w-1/4">Metric</th>
                  <th className="py-6 px-8 text-left font-display text-lg font-semibold text-white/60 w-3/8">Traditional Agency</th>
                  <th className="py-6 px-8 text-left font-display text-lg font-semibold text-white w-3/8">Articog Engine</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-white/5 group hover:bg-white/[0.01] transition-colors">
                    <td className="py-10 px-4 align-top">
                      <span className="font-display text-lg font-medium text-white">{row.metric}</span>
                    </td>
                    <td className="py-10 px-8 align-top">
                      <div className="text-white/60 font-display text-xl mb-3">{row.traditional.value}</div>
                      <p className="text-white/40 font-sans text-sm leading-relaxed">{row.traditional.desc}</p>
                    </td>
                    <td className="py-10 px-8 align-top bg-white/[0.02]">
                      <div className="text-white font-display text-xl mb-3">{row.articog.value}</div>
                      <p className="text-white/60 font-sans text-sm leading-relaxed">{row.articog.desc}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white/30 font-sans text-sm italic">
              Based on observed outcomes across Articog client engagements.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 border-t border-white/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Experience the Articog advantage</h2>
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
