import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UGC-Style Ads — Articog",
  description: "Creator-style ad content produced at scale with responsible AI practices. High-engagement native creative that builds trust.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ShieldCheck, FileText, Repeat, Lock, Video, CheckCircle2 } from "lucide-react";

export default function UGCStyleAdsPage() {
  const includedFeatures = [
    {
      title: "Native Scripts & Hooks",
      desc: "Scripts tailored to platform norms and thumb-stopping hooks designed to blend into the feed.",
      icon: FileText,
    },
    {
      title: "Testing Variants",
      desc: "Multiple visual and audio variants provided for every concept to optimize for performance.",
      icon: Repeat,
    },
    {
      title: "Brand Safety Review",
      desc: "Every asset undergoes a rigorous human review to ensure it meets your brand safety standards.",
      icon: Lock,
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
              UGC-Style Ads
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Creator-style ad content produced at scale. We deliver the high-engagement feel of user-generated content with the precision and reliability of an AI-powered production engine.
            </p>
          </div>
        </Container>
      </Section>

      {/* Responsible Production Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="font-display text-3xl font-semibold text-white">Responsible Production</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-white">Ethical Representation</h3>
                <p className="font-sans text-white/50 leading-relaxed">
                  We don't use deceptive identity claims. Our content is clearly produced as branded creative, not impersonating real individuals. We prioritize transparency in how AI-generated elements are utilized.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-white">Rights & Consent</h3>
                <p className="font-sans text-white/50 leading-relaxed">
                  Any synthetic voice or likeness used in our production is subject to proper consent and strict rights clearance. We ensure all legal and ethical standards are met before any asset reaches your audience.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Included Section */}
      <Section className="py-20">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">What's Included</h2>
            <p className="font-sans text-white/50">Comprehensive native creative packages optimized for conversion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {includedFeatures.map((feature) => (
              <div 
                key={feature.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <feature.icon className="w-5 h-5" />
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
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Scale your native ad creative.</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Create UGC-Style Ads
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
