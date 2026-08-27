import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";

function AIAndIPPage() {
  const sections = [
    {
      title: "Client Inputs",
      content: "Brand assets, references, and materials you provide remain your property. We use them only to deliver your project.",
    },
    {
      title: "Output Ownership",
      content: "Ownership of final delivered assets is defined per your service agreement, typically transferring to you upon completion and payment.",
    },
    {
      title: "Tool & Model Use",
      content: "We use a combination of licensed AI tools and models as part of our production pipeline, selected and directed by our creative team.",
    },
    {
      title: "Originality & Review",
      content: "All outputs go through human creative review before delivery to check for originality, brand fit, and quality.",
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
              AI & Intellectual Property
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
              <p className="font-sans text-base mb-6 text-white/60">Questions about IP on your project?</p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default AIAndIPPage;
