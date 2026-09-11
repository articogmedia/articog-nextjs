import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://articog.com/about" },
  title: "About Articog | Creative AI Production Company",
  description: "Articog is a Creative AI Production Company. We produce AI brand films, commercials, ad creations, UGC, AI social content and audio ads for growth-stage brands.",
};
import { Link } from "@/components/ui/Link";
import { Container, Section, Button, Heading, Text } from "@/components/ui";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span
              className="mb-5 inline-block type-label text-white/40 uppercase tracking-[0.18em]"
            >
              ABOUT ARTICOG
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              About Articog
            </Heading>
            <Text as="p" size="lg" className="mx-auto max-w-2xl leading-relaxed text-white/65">
              Articog produces brand films, commercials, ad creations, UGC, social content, and audio ads for growth-stage brands, from brief to delivery in days.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Why We Exist Section */}
      <Section size="md" className="border-t border-white/[0.05]">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-3">
              <Heading as="p" size="label">Why We Exist</Heading>
              <Heading as="p" size="section">
                Why creative production is broken
              </Heading>
            </div>
            <p className="type-body-lg leading-relaxed text-white/60">
              Content demand scales, but headcount doesn&apos;t. Campaigns slip and assets get recycled. Spend grows, but creative volume stays flat and audiences saturate.
            </p>
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
              className="type-body md:text-lg leading-relaxed"
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
      <h3 className="type-h3 text-white">
        {title}
      </h3>
      <p
        className="type-small leading-relaxed"
        style={{ color: "rgba(255,255,255,0.50)" }}
      >
        {description}
      </p>
    </div>
  );
}
