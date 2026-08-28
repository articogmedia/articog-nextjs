import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI for Gaming & Apps — Articog",
  description: "High-volume performance creative for gaming and mobile apps. Scalable cinematic teasers, gameplay-inspired ads, and platform-native content.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Gamepad2, Zap, Smartphone, Layers } from "lucide-react";

export default function GamingAppsPage() {
  const features = [
    {
      title: "Cinematic Teasers",
      desc: "High-fidelity AI video that captures the tone and excitement of your game world.",
      icon: Gamepad2,
    },
    {
      title: "UGC-Style Performance",
      desc: "Creator-style ads produced at scale to drive downloads and user acquisition.",
      icon: Smartphone,
    },
    {
      title: "Rapid Asset Iteration",
      desc: "Test hundreds of hook and visual combinations to find your winning creative formula.",
      icon: Zap,
    },
    {
      title: "Multi-Platform Mastering",
      desc: "Every asset delivered in every ratio for TikTok, YouTube, Meta, and in-app networks.",
      icon: Layers,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Industry Solutions
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Creative for Gaming & Apps
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Fuel your user acquisition engine with high-volume, cinematic creative. From cinematic world-building to native social ads, scale your UA testing with AI.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to scale your UA creative?</h2>
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
