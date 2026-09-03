import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Articog | Creative AI Production Company",
  description: "Articog is a Creative AI Production Company. We produce AI brand films, commercials, ad creations, UGC, AI social content and audio ads for growth-stage brands.",
};
import { Link } from "@/components/ui/Link";
import { Container, Section, Button, Heading } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function AboutPage() {
  const problems = siteContent.problems;

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              ABOUT ARTICOG
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              About Articog
            </Heading>
            <p
              className="mx-auto max-w-2xl font-sans text-lg md:text-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Articog produces brand films, commercials, ad creations, UGC, social content, and audio ads for growth-stage brands, from brief to delivery in days.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why We Exist Section */}
      <Section size="md" className="border-t border-white/[0.05]">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-3">
                <Heading as="h2" size="label">Why We Exist</Heading>
                <Heading as="p" size="section">
                  Why creative production is broken
                </Heading>
              </div>
            </div>
            <div className="lg:col-span-8 divide-y divide-white/[0.07]">
              {problems.map((p) => (
                <article key={p.number} className="flex gap-6 py-6">
                  <span
                    className="font-display text-xs font-semibold shrink-0 pt-1 w-7 tabular-nums"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {p.number}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="font-display text-base font-semibold text-white">
                      {p.title}
                    </h3>
                    <p
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.50)" }}
                    >
                      {p.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How We Work Section */}
      <Section size="md" className="border-t border-white/[0.05]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Heading as="h2" size="section" className="mb-6">
              How We Work
            </Heading>
            <p
              className="font-sans text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              AI accelerates production; creative directors set direction and review every deliverable for brand alignment, quality, and compliance.
            </p>
          </div>
          
          <div className="grid gap-10 md:grid-cols-3">
            <ApproachItem
              title="AI-Native Production"
              description="Our pipeline uses calibrated models to produce high-fidelity assets at scale."
            />
            <ApproachItem
              title="Human Creative Direction"
              description="Creative directors guide each project for emotional resonance and brand alignment."
            />
            <ApproachItem
              title="Quality Oversight"
              description="Human checks at every stage ensure production-ready files."
            />
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section size="lg" className="border-t border-white/[0.05]">
        <Container>
          <div
            className="rounded-2xl p-12 text-center border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <Heading as="h2" size="section" className="mb-6">
              Ready to scale your creative?
            </Heading>
            <Button asChild variant="primary" size="lg">
              <Link to="/book-a-demo">
                Work with us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function ApproachItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-4 p-6 rounded-xl border border-white/[0.05] bg-white/[0.02]">
      <h3 className="font-display text-xl font-semibold text-white">
        {title}
      </h3>
      <p
        className="font-sans text-sm leading-relaxed"
        style={{ color: "rgba(255,255,255,0.50)" }}
      >
        {description}
      </p>
    </div>
  );
}
