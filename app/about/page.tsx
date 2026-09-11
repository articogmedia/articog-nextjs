import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://articog.com/about" },
  title: "About Articog | AI Native Film & Production Company",
  description:
    "Articog is an AI native film and creative production company building brand films, campaigns, product visuals, and social content for growth stage brands through human directed production.",
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
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-5 inline-block type-label uppercase tracking-[0.18em] text-white/40">
              ABOUT ARTICOG
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Production craft. Rebuilt for the AI era.
            </Heading>
            <Text as="p" size="lg" className="mx-auto max-w-2xl leading-relaxed text-white/65">
              Articog is an AI Native Film &amp; Production Company creating brand films, commercials, product films, UGC, social content, and campaign visuals for modern brands, from brief to delivery in days.
            </Text>
          </div>
        </Container>
      </Section>

      <Section size="md" className="border-t border-white/[0.05]">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-8 lg:grid-cols-[0.9fr_1.8fr] lg:items-start">
            <div className="space-y-4 lg:pt-[0.25rem]">
              <span className="inline-block type-label uppercase tracking-[0.18em] text-white/40">
                WHO WE ARE
              </span>
              <Heading as="h2" size="section" className="max-w-[15rem] leading-[0.92] text-balance">
                A creative company
                <br />
                built for the age of AI.
              </Heading>
            </div>
            <div className="space-y-7 text-[1.05rem] leading-[1.9] text-white/60 lg:max-w-[54rem]">
              <p>
                <span className="font-bold text-white">Articog</span> is a Creative AI Production Company. We produce ad films, brand films, social media content, UGC, AI visuals, and brand strategy for growth-stage brands and modern marketing teams, primarily in the United States and international markets.
              </p>
              <p>
                The name says it all: <span className="font-bold text-white">Artificial + Cognition.</span>
              </p>
              <p>
                <span className="font-bold text-white">Articog</span> is an initiative of <span className="font-bold text-white">Govada Creative Productions</span>, established in 2013 and recognised by the Ministry of Culture, Government of India. Over 13 years of hands-on production foundation is what powers the craft behind every AI-native workflow we run today.
              </p>
              <p>
                Our model is built around speed and scale. Clients share a brief and receive finished, broadcast-ready creative output within days, not weeks. We run AI-native workflows from brief all the way through to delivery, cutting production timelines by up to 80% without compromising on quality or brand standard.
              </p>
              <p className="italic font-medium text-white/75">
                We work on a subscription model. Brands that need continuous, high-volume creative output partner with Articog as their dedicated AI production studio. One team. One standard. Constant output. <span className="font-bold italic text-white">Speed is not the pressure. Speed is the product.</span>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section size="md" className="border-t border-white/[0.05]">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-3">
              <Heading as="p" size="label">
                OUR FOUNDATION
              </Heading>
              <Heading as="p" size="section">
                13+ years of production. Now AI native.
              </Heading>
            </div>
            <p className="type-body-lg leading-relaxed text-white/60">
              Articog is an initiative of Govada Creative Productions, established in 2013 and recognised by the Ministry of Culture, Government of India. We bring that production foundation into a new model, combining creative direction, generative AI, editing, sound, and finishing in one integrated workflow built for today&apos;s speed and scale.
            </p>
          </div>
        </Container>
      </Section>

      <Section size="md" className="border-t border-white/[0.05]">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Heading as="h2" size="section" className="mb-6">
              Human directed. AI native.
            </Heading>
            <p
              className="type-body md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              AI expands what can be produced and how quickly it can move. Human creative direction decides what should be made, how it should feel, and whether it is right for the brand. Every project combines both.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <ApproachItem
              title="Creative Direction First"
              description="Every project starts with the idea, audience, brand, visual language, and campaign objective. We set the direction before generation begins."
            />
            <ApproachItem
              title="AI Native Production"
              description="Our production pipeline uses generative workflows to build characters, environments, product shots, motion, and creative variations with far less traditional production overhead."
            />
            <ApproachItem
              title="Production Ready Finish"
              description="Creative directors and editors refine every deliverable through compositing, editing, sound, quality control, and platform specific finishing before it leaves the studio."
            />
          </div>
        </Container>
      </Section>

      <Section size="lg" className="border-t border-white/[0.05]">
        <Container>
          <div
            className="rounded-2xl border border-white/[0.08] p-12 text-center"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <Heading as="h2" size="section" className="mb-6">
              Ready to make your next campaign AI native?
            </Heading>
            <Button asChild variant="primary" size="lg">
              <Link to="/book-a-demo">
                Book a Demo
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
    <div className="space-y-4 rounded-xl border border-white/[0.05] bg-white/[0.02] p-6">
      <h3 className="type-h3 text-white">{title}</h3>
      <p className="type-small leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
        {description}
      </p>
    </div>
  );
}
