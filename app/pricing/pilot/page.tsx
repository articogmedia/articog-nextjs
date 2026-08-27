import { Container, Section, Heading } from "@/components/ui";

export default function PilotProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Heading as="h1" size="hero" className="mb-6">
              Pilot Project
            </Heading>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Start with a focused pilot project and experience Articog's
              creative production workflow before moving to a larger
              engagement.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
