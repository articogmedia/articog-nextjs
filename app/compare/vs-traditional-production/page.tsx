import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articog vs Traditional Production Comparison",
  description: "A comparison of Articog's AI-accelerated creative engine versus traditional agency production models for speed, scale, and cost.",
  alternates: { canonical: "https://articog.com/compare/vs-traditional-production" },
};
import { Container, Section, Heading, Button, Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui";
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
          </div>
        </Container>
      </Section>

      {/* Comparison Table Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="overflow-x-auto">
            <Table className="border-collapse">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4 py-6 px-4">Metric</TableHead>
                  <TableHead className="w-3/8 py-6 px-8 type-h4 text-white/60">Traditional Agency</TableHead>
                  <TableHead className="w-3/8 py-6 px-8 type-h4 text-white">Articog Engine</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className="group hover:bg-white/[0.01]">
                    <TableCell className="py-10 px-4 align-top">
                      <span className="font-display text-lg font-medium text-white">{row.metric}</span>
                    </TableCell>
                    <TableCell className="py-10 px-8 align-top">
                      <div className="text-white/60 font-display text-xl mb-3">{row.traditional.value}</div>
                      <p className="text-white/40 font-sans text-sm leading-relaxed">{row.traditional.desc}</p>
                    </TableCell>
                    <TableCell className="py-10 px-8 align-top bg-white/[0.02]">
                      <div className="text-white font-display text-xl mb-3">{row.articog.value}</div>
                      <p className="text-white/60 font-sans text-sm leading-relaxed">{row.articog.desc}</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-safe font-sans text-sm italic">
              Based on observed outcomes across Articog client engagements.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 border-t border-white/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="type-h2 mb-8 text-white">Experience the Articog advantage</h2>
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
