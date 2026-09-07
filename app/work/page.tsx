import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work Articog",
  description: "Proof, not promises. A look at the creative we've produced across formats and industries.",
  alternates: { canonical: "https://articog.com/work" },
};
import { ArrowRight } from "lucide-react";
import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";

export default function WorkPage() {
  const categories = [
    {
      title: "Video Ads",
      description: "Commercial and performance video work.",
      href: "/work/video-ads",
    },
    {
      title: "Social & UGC",
      description: "Platform-native social creations and UGC-style content.",
      href: "/work/social",
    },
    {
      title: "Product Visuals",
      description: "High-fidelity product visuals and campaign assets.",
      href: "/work/product-visuals",
    },
    {
      title: "Work by Industry",
      description: "Explore creative production across industry verticals.",
      href: "/work/industries",
    },
    {
      title: "AI Ad Library",
      description: "A browsable library of AI-generated ad assets and variants.",
      href: "/ai-ad-library",
    },
    {
      title: "Customer Stories",
      description: "In-depth case studies and outcomes from our partners.",
      href: "/customers",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40 pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              OUR WORK
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Real outcomes. No composites.
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
              Selected work across formats and industries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-20">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group rounded-2xl p-8 border border-white/[0.08] transition-all hover:border-white/20 hover:bg-white/[0.02]"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                <h3 className="mb-2 font-display text-xl font-semibold text-white flex items-center justify-between">
                  {cat.title}
                  <ArrowRight size={20} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <p className="font-sans text-lg mb-8 text-white/60">Want work like this for your brand?</p>
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Talk to us</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
