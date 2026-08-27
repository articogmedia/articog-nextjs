import { Container, Section, Heading } from "@/components/ui";

export default function AccessibilityPage() {
  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">Legal</span>
            <Heading as="h1" size="hero" className="mb-6">Accessibility</Heading>
            <div className="space-y-8 font-sans text-base leading-relaxed text-white/60">
              <p>Articog is committed to ensuring digital accessibility for everyone. We are continually improving the user experience for all users and applying the relevant accessibility standards.</p>
              <p>For detailed information, please contact us at <a href="mailto:info@articog.com" className="text-white underline">info@articog.com</a>.</p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
