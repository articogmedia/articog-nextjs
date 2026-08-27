import { ArrowRight } from "lucide-react";
import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";

function TrustPage() {
  const cards = [
    {
      title: "AI & Intellectual Property",
      description: "As an AI-native production company, we take intellectual property seriously. We structure every engagement so you retain ownership of the final creative work, with clear documentation of how AI tools are used in the production process.",
      href: "/trust/ai-and-ip",
    },
    {
      title: "Security & Confidentiality",
      description: "Client briefs, product details, and brand assets are handled with strict confidentiality. We use controlled access, NDA protections, and careful vendor selection to keep your data and creative direction secure.",
      href: "/trust/security",
    },
    {
      title: "Rights, Licensing & Ownership",
      description: "Delivered assets come with clearly defined commercial usage rights. We handle music, stock, voice, and third-party licensing so your team can publish with confidence.",
      href: "/trust/rights-licensing",
    },
    {
      title: "Responsible AI",
      description: "We follow strict ethical guidelines for AI use, including mandatory human review, verified likeness consent, and clear escalation paths to ensure brand safety.",
      href: "/trust/responsible-ai",
    },
    {
      title: "Data Handling & Retention",
      description: "Learn how we manage, store, and protect your brand's data and creative materials throughout the production process.",
      href: "/trust/data-handling",
    },
    {
      title: "Subprocessors & Key Vendors",
      description: "Transparency into the third-party tools and vendors we use to deliver our services.",
      href: "/trust/subprocessors",
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
              TRUST CENTER
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Built on trust and transparency
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
              As an AI-native production company, we take IP, security, and licensing seriously. Here is how we protect your brand, your data, and your creative ownership.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-24">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl p-8 border border-white/[0.08] transition-all hover:border-white/20 hover:bg-white/[0.02]"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                <h3 className="mb-4 font-display text-xl font-semibold text-white flex items-center justify-between">
                  {card.title}
                  <ArrowRight size={18} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {card.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center pt-12 border-t border-white/10">
            <p className="font-sans text-base mb-6 text-white/60">Have a question not covered here?</p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default TrustPage;
