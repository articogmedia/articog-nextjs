import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Image Libraries — Articog",
  description: "Build large, consistent libraries of on-brand product images at scale. Professional style systems and batch delivery for high-volume catalogs.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Palette, Copy, Shield, FileText, Package } from "lucide-react";

export default function ImageLibrariesPage() {
  const steps = [
    {
      title: "Style System",
      desc: "A defined visual style applied consistently across every image, ensuring your brand looks the same across thousands of assets.",
      icon: Palette,
    },
    {
      title: "Consistency at Scale",
      desc: "Hundreds of images that look like one cohesive shoot, maintaining light, shadow, and color across diverse settings.",
      icon: Copy,
    },
    {
      title: "Usage Rights",
      desc: "Clear rights on every delivered image. You own the assets we produce for your catalog.",
      icon: Shield,
    },
    {
      title: "Tool & Model Governance",
      desc: "A documented, consistent production process across the library to maintain quality and technical standards.",
      icon: FileText,
    },
    {
      title: "Batch Delivery",
      desc: "Organized delivery in bulk, ready to drop into your catalog or CMS with consistent metadata and naming.",
      icon: Package,
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
              Custom Image Libraries
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Build a large, consistent library of on-brand product images at scale. High-fidelity visual catalogs produced without the overhead of physical sets.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">How It Works</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              Our systematic approach to high-volume production ensures that your visual catalog grows while maintaining absolute quality control.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to build your visual catalog?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Build Your Image Library
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
