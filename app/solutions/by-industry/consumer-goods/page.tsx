import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI for Consumer Goods — Articog",
  description: "Scale your creative production for consumer goods. Photorealistic product visuals, high-volume ad creative, and rapid seasonal campaign production.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ShoppingCart, RefreshCw, Zap, ShieldCheck } from "lucide-react";

export default function ConsumerGoodsPage() {
  const features = [
    {
      title: "Photorealistic Fidelity",
      desc: "Your physical product perfectly rendered in AI-generated lifestyle environments.",
      icon: ShieldCheck,
    },
    {
      title: "High-Volume SKU Support",
      desc: "Produce consistent, on-brand creative for your entire product catalog at scale.",
      icon: ShoppingCart,
    },
    {
      title: "Rapid Seasonal Pivot",
      desc: "Update campaign visuals for holidays, sales, and seasonal moments in hours, not weeks.",
      icon: RefreshCw,
    },
    {
      title: "Performance Optimization",
      desc: "Continuous creative testing of hooks and variants to drive lower CPAs.",
      icon: Zap,
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
              AI Creative for Consumer Goods
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Scale your CPG brand's creative output without the overhead of traditional production. Photorealistic visuals and high-performance video for every platform.
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
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to transform your CPG creative?</h2>
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
