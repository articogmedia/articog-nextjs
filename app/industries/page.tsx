import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve — Articog",
  description: "Creative production tailored to the specific needs of different sectors.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ArrowRight, ShoppingBag, Laptop, Home, Smartphone, Sparkles, Car, Coffee, Shirt } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      title: "DTC & Ecommerce",
      description: "Performance-driven creative for brands that need to convert and scale.",
      href: "/industries/dtc-ecommerce",
      icon: ShoppingBag,
    },
    {
      title: "SaaS & Technology",
      description: "Simplifying complex software with accurate UI and clear storytelling.",
      href: "/industries/saas-technology",
      icon: Laptop,
    },
    {
      title: "Real Estate",
      description: "Immersive visuals for listings, developments, and investor presentations.",
      href: "/industries/real-estate",
      icon: Home,
    },
    {
      title: "Consumer Electronics",
      description: "High-fidelity product visuals highlighting technical precision and design.",
      href: "/industries/consumer-electronics",
      icon: Smartphone,
    },
    {
      title: "Beauty & Skincare",
      description: "Polished, lifestyle-focused creative that emphasizes product benefits.",
      href: "/industries/beauty-skincare",
      icon: Sparkles,
    },
    {
      title: "Automotive & Mobility",
      description: "Cinematic vehicle films and marketing visuals produced with AI fidelity.",
      href: "/industries/automotive-mobility",
      icon: Car,
    },
    {
      title: "Food & Beverage",
      description: "Appetizing product visuals and seasonal campaign content at scale.",
      href: "/industries/food-beverage",
      icon: Coffee,
    },
    {
      title: "Fashion & Lifestyle",
      description: "On-trend campaign visuals and social content for fashion brands.",
      href: "/industries/fashion-lifestyle",
      icon: Shirt,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40 text-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mb-6 inline-block">
              Industries
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Industries We Serve
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed mb-12">
              Creative production tailored to the specific needs of different sectors. We build the engine that powers your vertical.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24 max-w-6xl mx-auto text-left">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="group rounded-2xl p-8 border border-white/[0.08] transition-all hover:border-white/20 hover:bg-white/[0.02]"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <industry.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="mb-4 font-display text-xl font-semibold text-white flex items-center justify-between">
                  {industry.title}
                  <ArrowRight size={18} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </h3>
                <p className="font-sans text-sm leading-relaxed text-white/50">
                  {industry.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center pt-12 border-t border-white/10">
            <p className="font-sans text-base mb-6 text-white/60">Ready to build for your industry?</p>
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
