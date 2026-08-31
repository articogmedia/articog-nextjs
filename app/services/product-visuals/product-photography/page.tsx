import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Product Photography Articog",
  description: "Photorealistic product shots without a physical studio shoot. Clean catalog imagery and lifestyle scenes at scale with perfect product fidelity.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ShoppingBag, Layout, Calendar, ShieldCheck } from "lucide-react";

export default function ProductPhotographyPage() {
  const useCases = [
    {
      title: "Ecommerce Listings",
      desc: "Clean, consistent catalog imagery tailored for Shopify, Amazon, and your own online store.",
      icon: ShoppingBag,
    },
    {
      title: "Lifestyle Shots",
      desc: "Your product seamlessly placed in on-brand scenes and settings, from modern interiors to outdoor environments.",
      icon: Layout,
    },
    {
      title: "Seasonal Campaigns",
      desc: "Fast turnaround visuals for seasonal or promotional moments, allowing you to react to trends in real-time.",
      icon: Calendar,
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
                Services
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              AI Product Photography
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Photorealistic product shots without a physical studio shoot. We generate high-end imagery that scales with your creative needs.
            </p>
          </div>
        </Container>
      </Section>

      {/* Use Cases Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">Use Cases</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              From high-volume catalog work to curated lifestyle campaigns, our AI photography adapts to your specific requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((item) => (
              <div 
                key={item.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
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

      {/* Product Fidelity Section */}
      <Section className="py-20 border-t border-white/5">
        <Container>
          <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-sans text-[10px] font-bold tracking-wider uppercase">Product Fidelity</span>
                </div>
                <h2 className="font-display text-3xl font-semibold text-white mb-6">Built for Accuracy</h2>
              </div>
              <div className="w-full md:w-2/3">
                <p className="font-sans text-lg text-white/60 leading-relaxed mb-8">
                  We understand that accuracy is everything. Using your actual product assets as the source, we ensure that every shot represents your product with 100% fidelity from texture and color to form and labeling.
                </p>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 italic font-sans text-sm text-white/40">
                  "Your actual product is represented accurately in every shot, ensuring what your customers see is exactly what they get."
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Elevate your product imagery today.</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Get Product Photography
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
