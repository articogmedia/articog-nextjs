import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Video Ads — Articog",
  description: "High-volume, on-brand video variants built for continuous performance testing and rapid iteration.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { FastForward, Zap, Maximize, BarChart3, Clock, CheckCircle2 } from "lucide-react";

export default function PerformanceAdsPage() {
  const testingFeatures = [
    {
      title: "Hooks",
      desc: "Multiple opening hooks tested per creative concept to identify what stops the scroll.",
      icon: Zap,
    },
    {
      title: "Modular Variants",
      desc: "Easily swap visuals, copy, and CTAs to iterate on winning elements without rebuilding from scratch.",
      icon: Layers,
    },
    {
      title: "Aspect Ratios",
      desc: "Every asset delivered pre-sized and optimized for 9:16, 4:5, 1:1, and 16:9 platforms.",
      icon: Maximize,
    },
    {
      title: "Test Matrix",
      desc: "A structured testing plan mapped to your marketing funnel to ensure data-driven growth.",
      icon: BarChart3,
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
              Performance Video Ads
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              High-volume, on-brand video variants built for continuous testing. We help performance marketers beat creative fatigue with rapid production and iterative testing at scale.
            </p>
          </div>
        </Container>
      </Section>

      {/* Scaling Testing Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">How We Scale Testing</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              Success in performance marketing is a numbers game. Our workflow is engineered to give you more "at-bats" with higher-quality creative.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingFeatures.map((feature) => (
              <div 
                key={feature.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Rapid Iteration & Claims Section */}
      <Section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex gap-6 p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">Rapid Iteration</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  When a winning variant is identified, we scale it instantly. Our AI-driven pipeline allows for 24-hour turnarounds on creative iterations based on live performance data.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">Claim Substantiation</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  We take compliance seriously. All performance claims and offer callouts are reviewed by our quality team against your approved documentation before any asset is delivered.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Stop creative fatigue. Start winning.</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Scale Your Ad Creative
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}

// Adding missing icon import if needed (Layers was used but not imported)
import { Layers } from "lucide-react";
