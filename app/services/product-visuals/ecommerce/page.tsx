import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Visuals Articog",
  description: "Product visuals built for online selling. PDP-safe output, marketplace specs, and promotional variants for Amazon and your own store.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ShoppingBag, Layout, ZoomIn, Percent } from "lucide-react";

export default function EcommerceVisualsPage() {
  const steps = [
    {
      title: "PDP-Safe Output",
      desc: "Images that meet product detail page requirements clean backgrounds, accurate representation, and technical fidelity for high conversion.",
      icon: ShoppingBag,
    },
    {
      title: "Marketplace Specs",
      desc: "Formatted to the exact size and content rules of platforms like Amazon, Shopify, and global marketplaces.",
      icon: Layout,
    },
    {
      title: "Detail Views",
      desc: "Close-up shots highlighting product features, textures, and materials to build customer trust and reduce returns.",
      icon: ZoomIn,
    },
    {
      title: "Promotional Variants",
      desc: "Versions with sale badges, seasonal treatments, or campaign overlays to drive urgency and performance.",
      icon: Percent,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Services / Product Visuals
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              E-commerce Visuals
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Product visuals built specifically for online selling your own site and marketplaces alike. Optimize every touchpoint of the digital shopping experience.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">What's Included</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              We deliver a complete set of assets designed to convert visitors into customers across every digital storefront.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div 
                key={step.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Scale your digital storefront</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Scale Your Ecommerce Visuals
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
