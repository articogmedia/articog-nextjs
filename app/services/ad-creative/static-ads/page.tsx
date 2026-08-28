import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Static Ad Creative — Articog",
  description: "High-volume static ad creative for paid social and display. Platform-native formats for Meta, LinkedIn, and more with full image rights.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Layout, Palette, ShieldCheck, Image as ImageIcon } from "lucide-react";

export default function StaticAdsPage() {
  const features = [
    {
      title: "Platform Coverage",
      desc: "Optimized creative for Meta, LinkedIn, and display network formats, ensuring your message fits every placement.",
      icon: Layout,
    },
    {
      title: "Templates + Net-New",
      desc: "A strategic mix of fast template-based variants for testing and net-new custom concepts for brand breakthroughs.",
      icon: Palette,
    },
    {
      title: "Claim QA",
      desc: "Every ad is reviewed for accurate, substantiated claims before delivery to ensure compliance and build trust.",
      icon: ShieldCheck,
    },
    {
      title: "Image Rights",
      desc: "Clear usage rights on all delivered creative, providing total peace of mind for your global marketing campaigns.",
      icon: ImageIcon,
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
                Services / Ad Creative
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Static Ad Creative
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              High-volume static ad creative for paid social and display. We help you scale your performance marketing with on-brand visuals that drive conversion.
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
              Professional-grade static creative designed for modern performance marketing engines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item) => (
              <div 
                key={item.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">{item.desc}</p>
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
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Scale your performance testing.</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Create Ad Variants
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
