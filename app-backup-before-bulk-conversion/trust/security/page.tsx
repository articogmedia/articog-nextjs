import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";

function SecurityPage() {
  const sections = [
    {
      title: "Confidentiality",
      content: "Client briefs, assets, and project materials are treated as confidential and are not shared outside the project team without permission.",
    },
    {
      title: "Access Control",
      content: "Access to client materials is limited to team members actively working on your project.",
    },
    {
      title: "NDA on Request",
      content: "We're happy to sign a mutual NDA before sharing or receiving sensitive materials.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl mb-16">
            <Link href="/trust" className="mb-8 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors">
              ← TRUST CENTER
            </Link>
            <Heading as="h1" size="hero" className="mb-12 text-white">
              Security & Confidentiality
            </Heading>

            <div className="space-y-12">
              {sections.map((item) => (
                <div key={item.title} className="max-w-2xl">
                  <h2 className="font-display text-xl font-semibold text-white mb-4">{item.title}</h2>
                  <p className="font-sans text-base leading-relaxed text-white/60">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-24 pt-12 border-t border-white/10">
              <p className="font-sans text-base mb-6 text-white/60">Need a security review for your team?</p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Request a security review</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default SecurityPage;
