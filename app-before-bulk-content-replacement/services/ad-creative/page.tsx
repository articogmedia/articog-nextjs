import { Container, Section, Heading, Button } from "@/components/ui";
import {
  Share2,
  Monitor,
  Search,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Ad Creative   Articog",
  description:
    "Static and display ad creative built for continuous performance testing. Scale your brand with high-volume, performance-optimized creative.",
};

export default function AdCreativePage() {
  const deliverables = [
    {
      title: "Paid Social",
      desc: "Native feed and story formats for Meta, TikTok, LinkedIn, and more. Optimized for how users actually scroll.",
      icon: Share2,
    },
    {
      title: "Display",
      desc: "Clean, high-fidelity banner ads sized for every placement and programmatic network requirements.",
      icon: Monitor,
    },
    {
      title: "Search",
      desc: "Creative assets built specifically for search and shopping campaigns to maximize click-through rates.",
      icon: Search,
    },
  ];

  const subServices = [
    {
      title: "Static Ad Creative",
      href: "/services/ad-creative/static-ads",
      description:
        "High-volume static creative for paid social and display networks.",
    },
    {
      title: "Testing & Variants",
      href: "/services/ad-creative/testing-variants",
      description:
        "Structured, hypothesis-driven creative testing for paid campaigns.",
    },
    {
      title: "Campaign Key Visuals",
      href: "/services/ad-creative/key-visuals",
      description:
        "Developing the core visual system that anchors a campaign across channels.",
    },
  ];

  const features = [
    "Dynamic multivariate testing",
    "Performance-driven iteration",
    "Rapid creative refreshes",
    "Brand-safe experimentation",
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Services
              </span>
            </div>

            <Heading as="h1" size="hero" className="mb-6">
              Ad Creative
            </Heading>

            <p className="font-sans text-xl leading-relaxed text-white/60">
              Static and display ad creative built for continuous performance
              testing. We bridge the gap between brand fidelity and
              performance-led iteration.
            </p>
          </div>
        </Container>
      </Section>

      {/* What We Deliver */}
      <Section className="bg-white/[0.02] py-20">
        <Container>
          <div className="mb-12">
            <h2 className="mb-4 font-display text-3xl font-semibold text-white">
              What We Deliver
            </h2>

            <p className="max-w-2xl font-sans text-white/50">
              From social feeds to global display networks, we deliver assets
              built for the specific nuances of every channel.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {deliverables.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm leading-relaxed text-white/50">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Sub Services */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {subServices.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <div>
                  <h3 className="mb-3 font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mb-6 font-sans text-sm leading-relaxed text-white/50">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white/30 transition-colors group-hover:text-white/60">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Built to Test */}
      <Section className="border-t border-white/5 py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-display text-4xl font-semibold text-white">
                Built to Test
              </h2>

              <p className="mb-6 font-sans text-lg leading-relaxed text-white/60">
                Stop relying on &quot;best guesses.&quot; We deliver hundreds
                of on-brand variants, continuously optimized based on
                performance signals rather than one static set.
              </p>

              <div className="space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-white/30" />

                    <span className="font-sans text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12">
              <BarChart3 className="h-32 w-32 text-white/10" />

              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white/[0.02] py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 font-display text-4xl font-semibold text-white">
              Ready to scale your performance?
            </h2>

            <a href="/book-a-demo">
              <Button
                size="lg"
                className="h-14 rounded-full px-8 text-lg"
              >
                Scale Your Ad Creative
              </Button>
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}