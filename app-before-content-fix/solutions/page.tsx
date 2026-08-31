// app/solutions/page.tsx
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";

export const metadata: Metadata = {
  title: "Solutions   Articog",
  description:
    "Find your use case. Whatever your creative bottleneck, there's a model built to solve it.",
};

export default function SolutionsPage() {
  const cards = [
    {
      title: "Monthly Creative Subscription",
      description: "For teams that need a steady, predictable stream of creative every month.",
      href: "/solutions/monthly-creative-subscription",
    },
    {
      title: "Performance Marketing Creative",
      description: "For growth teams that need high-volume ad variants optimized for performance.",
      href: "/solutions/performance-marketing",
    },
    {
      title: "Product Launch Campaigns",
      description: "Full creative support for your product launch, from timeline to channel rollout.",
      href: "/solutions/product-launch",
    },
    {
      title: "Creative Testing at Scale",
      description: "Ongoing creative testing programs built to drive continuous growth.",
      href: "/solutions/creative-testing",
    },
    {
      title: "Multi-Format Campaign Production",
      description: "Produce one integrated campaign across every format and channel from a single modular concept.",
      href: "/solutions/multi-format-campaigns",
    },
    {
      title: "Always-On Content Engine",
      description: "For brands that need continuous organic and paid content without a growing internal team.",
      href: "/solutions/always-on-content",
    },
    {
      title: "Enterprise Creative Production",
      description: "Creative production built for large organizations with strict security and governance requirements.",
      href: "/solutions/enterprise",
    },
    {
      title: "Agency White-Label",
      description: "Scale your agency capacity with invisible, reliable production delivered under your brand.",
      href: "/solutions/agency-white-label",
    },
    {
      title: "Localization & Global Campaigns",
      description: "Adapt your message for every market with AI-native localization and regional optimization.",
      href: "/solutions/localization-global",
    },
    {
      title: "Creative Automation",
      description: "Integrate production into your workflow with brief-to-delivery automation.",
      href: "/solutions/creative-automation",
    },
    {
      title: "Dynamic Creative Optimization",
      description: "Real-time variant generation and optimization based on performance signals.",
      href: "/solutions/dynamic-creative",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              SOLUTIONS
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Solutions built around how you work
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
              Whether you need high-volume performance assets or strategic brand storytelling, we build the engine that scales with your ambition.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-24">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl p-8 border border-white/[0.08] transition-all hover:border-white/20 hover:bg-white/[0.02]"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                <h3 className="mb-4 font-display text-xl font-semibold text-white flex items-center justify-between">
                  {card.title}
                  <ArrowRight size={18} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {card.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center pt-12 border-t border-white/10">
            <p className="font-sans text-base mb-6 text-white/60">Not sure which fits?</p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}