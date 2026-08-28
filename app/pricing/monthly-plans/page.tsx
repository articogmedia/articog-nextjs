import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Plans — Articog",
  description: "Choose a subscription tier that matches your creative volume.",
};
import { Link } from "@/components/ui/Link";
import { Container, Section, Button, Heading } from "@/components/ui";
import { Check } from "lucide-react";

export default function MonthlyPlansPage() {
  const plans = [
    {
      title: "Starter",
      price: "$2,500/mo",
      description: "For small teams needing consistent creative output.",
      capacity: "Up to 5 assets per month",
      formats: "All social & static formats",
      turnaround: "3-5 business days",
      features: ["Dedicated Creative Lead", "2 revision rounds", "Brand voice alignment", "Platform optimization"],
    },
    {
      title: "Growth",
      price: "$5,000/mo",
      description: "For growing brands scaling their content production.",
      capacity: "Up to 12 assets per month",
      formats: "Video, Static, & Social",
      turnaround: "2-4 business days",
      features: ["Priority production", "3 revision rounds", "Creative strategy", "Custom image library"],
      popular: true,
    },
    {
      title: "Scale",
      price: "$10,000/mo",
      description: "For enterprise teams with high-volume requirements.",
      capacity: "Up to 30 assets per month",
      formats: "Full-funnel creative engine",
      turnaround: "1-3 business days",
      features: ["Unlimited revisions", "White-glove service", "Campaign management", "Advanced IP governance"],
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
              PRICING
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Monthly Plans
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Choose a subscription tier that matches your creative volume. All plans include human-directed AI production built for performance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular ? "scale-105 z-10" : ""
                }`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: plan.popular
                    ? "1px solid rgba(102, 51, 238, 0.4)"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: plan.popular ? "0 20px 40px rgba(102, 51, 238, 0.1)" : "none",
                }}
              >
                {plan.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ background: "#6633EE" }}
                  >
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold text-white mb-2">{plan.title}</h3>
                <div className="mb-4 font-sans text-lg font-medium text-accent">{plan.price}</div>
                <p className="font-sans text-sm mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {plan.description}
                </p>
                
                <div className="mb-8 space-y-4">
                  <div className="border-t border-white/5 pt-4">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Capacity</p>
                    <p className="text-sm text-white/80">{plan.capacity}</p>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Turnaround</p>
                    <p className="text-sm text-white/80">{plan.turnaround}</p>
                  </div>
                </div>

                <ul className="mb-10 space-y-4 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                      <span style={{ color: "rgba(255,255,255,0.60)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={plan.popular ? "primary" : "secondary"} size="lg" className="w-full">
                  <Link href="/book-a-demo">Choose a Plan</Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center font-sans text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
            Need a custom volume or multi-brand support? <Link href="/book-a-demo" className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/40 transition-colors">Talk to us about Enterprise.</Link>
            <br />
            Plan changes and overage handling are discussed during onboarding.
          </p>
        </Container>
      </Section>
    </div>
  );
}
