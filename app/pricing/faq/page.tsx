"use client";

import { useState } from "react";
import { Link } from "@/components/ui/Link";
import { Container, Section, Button, Heading } from "@/components/ui";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PricingFAQPage() {
  const faqs = [
    {
      question: "How is pricing structured?",
      answer: "We offer project-based, subscription, or enterprise models depending on your specific volume and creative needs. See our main Pricing page for a high-level overview of these categories.",
    },
    {
      question: "Is there a minimum commitment?",
      answer: "Commitment varies by plan. While our monthly subscriptions are designed for long-term partnership, pilot projects are available for a lower-commitment exploratory start.",
    },
    {
      question: "What's included in a project?",
      answer: "Each project typically includes creative concepting, high-fidelity production using our AI engine, and a pre-agreed number of revision rounds to ensure the final asset meets your standards.",
    },
    {
      question: "How does billing work?",
      answer: "Specific billing terms and cycles (e.g., net-30, up-front for pilots) will be confirmed and detailed during your initial onboarding call based on your chosen plan.",
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, your creative engine can scale up or down as your business objectives evolve. Plan adjustments are handled directly with your account team and discussed during onboarding.",
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
              FAQ
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Pricing FAQ
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Clear answers to common questions about how we structure engagements and billing.
            </p>
          </div>

          <div className="mx-auto max-w-2xl space-y-4 mb-20">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Talk to Sales</Link>
            </Button>
          </div>
        </Container>
      </Section>
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
