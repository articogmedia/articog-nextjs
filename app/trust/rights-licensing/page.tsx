import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";

function RightsLicensingPage() {
  const sections = [
    {
      title: "Commercial Usage Rights",
      content: "Usage rights for delivered assets are defined in your service agreement and cover the commercial use cases you need.",
    },
    {
      title: "Licensed Materials",
      content: "Where third-party stock, music, or voice assets are used, they're properly licensed for commercial use.",
    },
    {
      title: "Voice & Music Rights",
      content: "Any synthetic or licensed voice and music used in your project comes with appropriate usage rights for your intended channels.",
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
              Rights, Licensing & Ownership
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
              <p className="font-sans text-base mb-6 text-white/60">Have specific rights questions?</p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default RightsLicensingPage;
