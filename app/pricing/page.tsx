"use client";

import { useState } from "react";
import { Link } from "@/components/ui/Link";
import { Container, Section, Button, Heading } from "@/components/ui";
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";

export default function PricingPage() {
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
              style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}
            >
              Stop paying for overhead. Our flexible model replaces rigid agency retainers and expensive in-house headcount with a high-performance creative engine built for speed.
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
              price="Starting at $2,500/mo"
              description="For ongoing content and recurring creative needs"
              features={[
                "Ongoing production engine",
                "Predictable monthly cost",
                "Scalable output volume",
                "Dedicated creative lead",
              ]}
              buttonText="See Monthly Plans"
              href="/pricing/monthly-plans"
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
        </Container>
      </Section>

      <Section size="md" className="pt-0">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Heading as="h2" size="section" className="mb-10 text-center">
              Frequently Asked Questions
            </Heading>
            <div className="space-y-4">
              <AccordionItem
                question="How does the monthly model work?"
                answer="You get a steady stream of creative production delivered on a predictable cadence. It eliminates the need for complex project management or expensive internal hiring."
              />
              <AccordionItem
                question="Can I change plans later?"
                answer="Yes, your creative engine can scale up or down as your business objectives evolve."
              />
              <AccordionItem
                question="Is there a minimum commitment?"
                answer="Our subscription model is built for long-term partnership but offers the flexibility that traditional agency retainers lack."
              />
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
        boxShadow: popular ? "0 20px 40px rgba(102, 51, 238, 0.1)" : "none",
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
            <span style={{ color: "rgba(255,255,255,0.60)" }}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant={popular ? "primary" : "secondary"} size="lg" className="w-full">
        <Link href={href}>{buttonText}</Link>
      </Button>
    </div>
  );
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
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
