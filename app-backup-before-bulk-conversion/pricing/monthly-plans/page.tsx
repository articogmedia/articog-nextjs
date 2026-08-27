import { Container, Section, Heading } from "@/components/ui";

export default function MonthlyPlansPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Heading as="h1" size="hero" className="mb-6">
              Monthly Plans
            </Heading>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Flexible monthly creative production plans for brands scaling
              their content with Articog.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
