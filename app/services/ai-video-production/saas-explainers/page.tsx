import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS & Explainer Videos Articog",
  description: "Clear, engaging product explainer videos built for landing pages and paid campaigns. High-fidelity UI representation and motion graphics.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Monitor, Layout, Mic, Scissors } from "lucide-react";

export default function SaaSExplainersPage() {
  const includedFeatures = [
    {
      title: "UI Accuracy",
      desc: "Your product interface represented accurately, not generic mockups. We capture the essence of your software's user experience.",
      icon: Monitor,
    },
    {
      title: "Motion Graphics",
      desc: "Clean, on-brand animated sequences that highlight key features and benefits with fluid transitions.",
      icon: Layout,
    },
    {
      title: "Voice",
      desc: "Professional voiceover matched to your brand tone, ensuring your message is delivered with the right authority.",
      icon: Mic,
    },
    {
      title: "Multiple Cuts",
      desc: "A long-form landing page version plus shorter paid/social cutdowns optimized for conversion across channels.",
      icon: Scissors,
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
                Services / AI Video Production
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              SaaS & Explainer Videos
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Clear, engaging product explainer videos built for landing pages and paid campaigns. We help you communicate complex software value propositions simply and effectively.
            </p>
          </div>
        </Container>
      </Section>

      {/* What's Included Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">What's Included</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              Everything you need to launch and promote your software with high-impact video content.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {includedFeatures.map((feature) => (
              <div 
                key={feature.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to showcase your product?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Create an Explainer
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
