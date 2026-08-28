import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Brand Case Study — Articog",
  description: "How an E-commerce brand achieved 10x creative output with zero headcount increase using Articog.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Quote, ArrowRight, CheckCircle2, Layout, Image as ImageIcon } from "lucide-react";

/**
 * TEMPLATE NOTE:
 * This page serves as the pattern for future customer story pages under /customers/.
 * 
 * INSTRUCTIONS:
 * 1. Duplicate this route for each new customer story (e.g., /customers/beauty-brand/).
 * 2. IMPORTANT: Client name, quotes, and specific performance results MUST be approved 
 *    by the client in writing before publishing.
 */

export default function EcommerceBrandStoryPage() {
  const approachPoints = [
    { title: "Modular Visual System", desc: "Developed a core visual library that allowed for rapid iteration." },
    { title: "AI-Powered Versioning", desc: "Used our engine to generate 100+ variations from single creative concepts." },
    { title: "Direct Pipeline Integration", desc: "Connected directly to their product feed for real-time asset updates." },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Case Study • Retail
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              E-Commerce Brand
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Achieving massive creative scale without expanding the internal team.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white mb-6">The Challenge</h2>
              <div className="space-y-4 font-sans text-white/60 leading-relaxed">
                <p>
                  As the brand expanded into new global markets, the demand for localized, platform-specific creative assets outpaced their internal production capacity.
                </p>
                <p>
                  The team was spending 70% of their time on resizing and minor variations rather than high-level creative strategy, leading to burnout and missed launch windows.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-white mb-6">The Approach</h2>
              <div className="space-y-6">
                {approachPoints.map((point) => (
                  <div key={point.title} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-white/40 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-medium text-white">{point.title}</h4>
                      <p className="font-sans text-sm text-white/50">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24 border-y border-white/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-4 block">Resulting Outcome</span>
            <div className="mb-4">
              <span className="text-6xl md:text-8xl font-display font-semibold text-white block">10× Output</span>
            </div>
            <p className="font-sans text-xl text-white/60">
              10× creative output with zero headcount increase.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">Sample Visuals</h2>
            <p className="font-sans text-white/50">A look at the modular asset system developed for this campaign.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-white/10" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
              <Quote className="absolute top-8 left-8 w-24 h-24 text-white/5 -z-10" />
              <p className="font-display text-2xl text-white italic mb-8 leading-relaxed">
                "[Placeholder for approved client testimonial quote. This section will feature a quote from the lead stakeholder regarding the impact on their workflow and ROI.]"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10" />
                <div>
                  <h5 className="font-display font-semibold text-white">[Stakeholder Name]</h5>
                  <p className="font-sans text-sm text-white/40">[Stakeholder Role], [Client Company]</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to transform your production?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Start Your Story
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
