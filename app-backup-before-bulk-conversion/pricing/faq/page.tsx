import { Container, Section, Heading } from "@/components/ui";

export default function PricingFAQPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Heading as="h1" size="hero" className="mb-6">
              Pricing FAQ
            </Heading>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Answers to common questions about Articog pricing, plans,
              projects, turnaround times, and creative production.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
