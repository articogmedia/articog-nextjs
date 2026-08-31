import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Success Stories | Articog",
  description: "See how leading brands use Articog's Creative AI Production to scale creative output and drive performance.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { siteContent } from "@/lib/content";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ChevronRight } from "lucide-react";

export default function CustomersPage() {
  const caseStudies = siteContent.caseStudies;

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              CUSTOMER STORIES
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Real outcomes. Built with Articog.
            </Heading>
            <p
              className="mx-auto max-w-2xl font-sans text-lg md:text-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              See how modern marketing teams are using AI-native production to break through creative bottlenecks and scale their brand.
            </p>
          </div>
        </Container>
      </Section>

      {/* Stories Grid */}
      <Section size="md" className="border-t border-white/[0.05]">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <article
                key={cs.client}
                className="flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] hover:border-white/[0.14] transition-all duration-300 group"
              >
                {/* Metric Header */}
                <div className="px-8 pt-8 pb-6 border-b border-white/[0.05]">
                  <p
                    className="font-display font-semibold text-white group-hover:text-white/90 transition-colors"
                    style={{ fontSize: "3.2rem", lineHeight: 1, letterSpacing: "-0.04em" }}
                  >
                    {cs.metric}
                  </p>
                  <p className="mt-2 font-sans text-xs uppercase tracking-widest text-white/30">
                    {cs.metricLabel}
                  </p>
                </div>

                {/* Content Body */}
                <div className="flex flex-col flex-1 p-8 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-display text-lg font-semibold text-white leading-snug">
                      {cs.outcome}
                    </h3>
                    <div className="space-y-3 pt-2">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-wider text-white/20 font-bold">Challenge</span>
                        <p className="text-sm text-white/50 leading-relaxed">
                          Scaling content quality while reducing production timelines and manual oversight.
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-wider text-white/20 font-bold">Approach</span>
                        <p className="text-sm text-white/50 leading-relaxed">
                          Implemented Articog's AI-native pipeline for high-fidelity asset generation and variant testing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/[0.05] flex items-end justify-between">
                    <div>
                      <p className="font-display text-sm font-semibold text-white/70">
                        {cs.client}
                      </p>
                      <p className="font-sans text-xs text-white/30">{cs.industry}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full bg-white/[0.03] border border-white/[0.08]">
                      <ChevronRight size={14} className="text-white/40" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <FinalCTA 
        content={{
          headline: "Ready to be our next\nsuccess story?",
          ctaLabel: "Book a Demo",
          ctaHref: "/book-a-demo"
        }} 
      />
    </div>
  );
}
