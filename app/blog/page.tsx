import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articog Blog",
  description: "Insights on AI-native creative production, campaign strategy, and brand growth.",
};

import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";

export default function BlogPage() {
  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              OUR BLOG
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Insights & Perspectives
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Practical ideas and strategic thinking on AI-native creative production, campaign velocity, and high-performance marketing.
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-10 md:p-16 text-center">
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
              Coming Soon
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-5">
              New editorial content is on the way.
            </h2>
            <p className="mx-auto max-w-2xl font-sans text-base text-white/60 leading-relaxed mb-8">
              We are preparing fresh insights on AI creative operations, campaign testing, production systems, and the future of brand storytelling.
            </p>
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
