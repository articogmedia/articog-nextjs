import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers Articog",
  description: "Join Articog and help us build the future of AI-native creative production.",
};
import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";

export default function CareersPage() {
  // Placeholder for when roles are added later
  const roles: any[] = [];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-20">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              CAREERS
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Join the future of production
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
              We're building the infrastructure for the next generation of creative work. At Articog, we combine creative excellence with cutting-edge technology to redefine what's possible.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-2xl font-display font-semibold text-white mb-8">Open Roles</h2>
            
            {roles.length === 0 ? (
              <div className="rounded-2xl p-12 border border-white/[0.08] bg-white/[0.01] text-center">
                <p className="font-sans text-base text-white/60 mb-6">
                  We are not currently hiring, but we are always interested in hearing from exceptional creative technologists and production specialists.
                </p>
                <Button asChild variant="secondary">
                  <Link href="/contact">Introduce Yourself</Link>
                </Button>
              </div>
            ) : (
              <div className="grid gap-4">
                {/* Roles will be mapped here: Title, Location/Remote, Type */}
              </div>
            )}
            
            <p className="mt-8 text-center font-sans text-[12px] text-white/30">
              Note: Candidate information is handled according to our <Link href="/privacy" className="underline hover:text-white/50">Privacy Policy</Link>.
            </p>
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Heading as="h2" size="section" className="mb-8">
              Stay connected
            </Heading>
            <Button asChild variant="primary" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
