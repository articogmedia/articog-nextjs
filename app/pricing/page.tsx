"use client";

import { useState } from "react";
import { Link } from "@/components/ui/Link";
import { Container, Section, Button, Heading } from "@/components/ui";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

export default function PricingPage() {
  const plans = [
    { title: "Starter", price: "$2,500/mo", description: "For small teams needing consistent creative output.", capacity: "Up to 5 assets per month", formats: "All social & static formats", turnaround: "3-5 business days", features: ["Dedicated Creative Lead", "2 revision rounds", "Brand voice alignment", "Platform optimization"] },
    { title: "Growth", price: "$5,000/mo", description: "For growing brands scaling their content production.", capacity: "Up to 12 assets per month", formats: "Video, Static, & Social", turnaround: "2-4 business days", features: ["Priority production", "3 revision rounds", "Creative strategy", "Custom image library"], popular: true },
    { title: "Scale", price: "$10,000/mo", description: "For enterprise teams with high-volume requirements.", capacity: "Up to 30 assets per month", formats: "Full-funnel creative engine", turnaround: "1-3 business days", features: ["Unlimited revisions", "White-glove service", "Campaign management", "Advanced IP governance"] },
  ];

  const pilotSteps = [
    ["Eligibility", "Best suited for brands new to working with us, providing a low-risk way to experience our high-velocity production."],
    ["Fixed Scope", "A clearly defined single deliverable, not open-ended, ensuring we hit specific creative and performance targets."],
    ["Timeline", "A fast, bounded delivery window typically within 5-7 business days from brief alignment."],
    ["Rights", "Full usage rights for the pilot deliverable are confirmed and granted upfront upon final delivery."],
    ["What Happens After", "A clear path to a larger engagement if the pilot goes well, with absolutely no obligation to continue."],
  ];

  const faqs = [
    ["How is pricing structured?", "We offer project-based, subscription, or enterprise models depending on your specific volume and creative needs. See our main Pricing page for a high-level overview of these categories."],
    ["Is there a minimum commitment?", "Commitment varies by plan. While our monthly subscriptions are designed for long-term partnership, pilot projects are available for a lower-commitment exploratory start."],
    ["What's included in a project?", "Each project typically includes creative concepting, high-fidelity production using our AI engine, and a pre-agreed number of revision rounds to ensure the final asset meets your standards."],
  ];

  return (
    <>
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
              Pricing that scales with you
            </Heading>

            <p
              className="mx-auto max-w-2xl font-sans text-base md:text-lg"
              style={{
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.65,
              }}
            >
              Flexible production without agency retainers or additional
              headcount.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {/* Project-Based */}
            <PricingCard
              title="Project-Based"
              price="Custom quote"
              description="For one-off campaigns and high-impact launches"
              features={[
                "End-to-end production",
                "Full creative strategy",
                "Defined project timeline",
                "Premium final delivery",
              ]}
              buttonText="Talk to us"
              href="/book-a-demo"
            />

            {/* Monthly Subscription */}
            <PricingCard
              title="Monthly Subscription"
              price="Custom quote"
              description="For ongoing content and recurring creative needs"
              features={[
                "Ongoing production engine",
                "Predictable monthly cost",
                "Scalable output volume",
                "Dedicated creative lead",
              ]}
              buttonText="See Monthly Plans"
              href="#monthly-plans"
              popular
            />

            {/* Enterprise */}
            <PricingCard
              title="Enterprise"
              price="Custom quote"
              description="For high-volume teams and multi-brand portfolios"
              features={[
                "Unlimited creative capacity",
                "Multi-brand governance",
                "Custom security & SLA",
                "Full platform integration",
              ]}
              buttonText="Talk to us"
              href="/book-a-demo"
            />
          </div>

          <div id="monthly-plans" className="scroll-mt-24 border-t border-white/5 pt-20">
            <div className="mb-12 text-center">
              <Heading as="h2" size="section" className="mb-4">Monthly Plans</Heading>
              <p className="mx-auto max-w-2xl font-sans text-white/50">Choose a subscription tier that matches your creative volume. All plans include human-directed AI production built for performance.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <div key={plan.title} className={`relative flex flex-col rounded-2xl p-8 ${plan.popular ? "scale-105 z-10" : ""}`} style={{ background: "rgba(255,255,255,0.03)", border: plan.popular ? "1px solid rgba(102, 51, 238, 0.4)" : "1px solid rgba(255,255,255,0.08)", boxShadow: plan.popular ? "0 20px 40px rgba(102, 51, 238, 0.1)" : "none" }}>
                  {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: "#6633EE" }}>Most Popular</span>}
                  <h3 className="mb-2 font-display text-2xl font-semibold text-white">{plan.title}</h3>
                  <div className="mb-4 font-sans text-lg font-medium text-accent">{plan.price}</div>
                  <p className="mb-6 font-sans text-sm text-white/50">{plan.description}</p>
                  <div className="mb-8 space-y-4">
                    <div className="border-t border-white/5 pt-4"><p className="mb-1 text-[10px] uppercase tracking-widest text-white/40">Capacity</p><p className="text-sm text-white/80">{plan.capacity}</p></div>
                    <div className="border-t border-white/5 pt-4"><p className="mb-1 text-[10px] uppercase tracking-widest text-white/40">Formats</p><p className="text-sm text-white/80">{plan.formats}</p></div>
                    <div className="border-t border-white/5 pt-4"><p className="mb-1 text-[10px] uppercase tracking-widest text-white/40">Turnaround</p><p className="text-sm text-white/80">{plan.turnaround}</p></div>
                  </div>
                  <ul className="mb-10 flex-1 space-y-4">
                    {plan.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-accent" /><span className="text-white/60">{feature}</span></li>)}
                  </ul>
                  <Button asChild variant={plan.popular ? "primary" : "secondary"} size="lg" className="w-full"><Link href="/book-a-demo">Choose a Plan</Link></Button>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center font-sans text-sm text-white/40">Need a custom volume or multi-brand support? <Link href="/book-a-demo" className="text-white underline underline-offset-4">Talk to us about Enterprise.</Link><br />Plan changes and overage handling are discussed during onboarding.</p>
          </div>

          <div id="pilot" className="scroll-mt-24 border-t border-white/5 pt-20">
            <div className="mb-12 text-center"><Heading as="h2" size="section" className="mb-4">Pilot / Exploratory Project</Heading><p className="mx-auto max-w-2xl font-sans text-white/50">Experience the Articog creative engine with a single, high-impact pilot. Evaluate our quality, speed, and workflow before committing to a larger scale.</p></div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pilotSteps.map(([title, description]) => <div key={title} className="rounded-2xl border border-white/[0.08] p-8" style={{ background: "rgba(255,255,255,0.02)" }}><div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10"><Check size={20} className="text-accent" /></div><h3 className="mb-4 font-display text-xl font-semibold text-white">{title}</h3><p className="font-sans text-sm leading-relaxed text-white/50">{description}</p></div>)}
            </div>
            <div className="mt-10 text-center"><Button asChild variant="primary" size="lg"><Link href="/book-a-demo">Start a Pilot</Link></Button></div>
          </div>
        </Container>
      </Section>

      <Section size="md" className="pt-0">
        <Container>
          <div id="faq" className="mx-auto max-w-3xl scroll-mt-24">
            <Heading as="h2" size="section" className="mb-10 text-center">
              Frequently Asked Questions
            </Heading>

            <div className="space-y-4">
              {faqs.map(([question, answer]) => <AccordionItem key={question} question={question} answer={answer} />)}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  href,
  popular = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  href: string;
  popular?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
        popular ? "scale-105 z-10" : ""
      }`}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: popular
          ? "1px solid rgba(102, 51, 238, 0.4)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: popular
          ? "0 20px 40px rgba(102, 51, 238, 0.1)"
          : "none",
      }}
    >
      {popular && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-white"
          style={{ background: "#6633EE" }}
        >
          Most Popular
        </span>
      )}

      <h3 className="font-display text-2xl font-semibold text-white mb-2">
        {title}
      </h3>

      <div className="mb-4 font-sans text-lg font-medium text-accent">
        {price}
      </div>

      <p
        className="font-sans text-sm mb-8"
        style={{ color: "rgba(255,255,255,0.50)" }}
      >
        {description}
      </p>

      <ul className="mb-10 space-y-4 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check size={16} className="mt-0.5 shrink-0 text-accent" />
            <span style={{ color: "rgba(255,255,255,0.60)" }}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={popular ? "primary" : "secondary"}
        size="lg"
        className="w-full"
      >
        <Link href={href}>{buttonText}</Link>
      </Button>
    </div>
  );
}

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-white/[0.02]"
      >
        <span className="font-sans text-base font-medium text-white/90">
          {question}
        </span>

        {isOpen ? (
          <ChevronUp size={18} className="text-white/40" />
        ) : (
          <ChevronDown size={18} className="text-white/40" />
        )}
      </button>

      {isOpen && (
        <div className="p-5 pt-0">
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}