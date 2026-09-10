import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://articog.com/trust" },
  title: "Trust Center Articog",
  description: "Built for enterprise confidence. Everything procurement, legal, and security teams need to evaluate Articog.",
};
import { ArrowRight } from "lucide-react";
import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";

export default function TrustPage() {
  const cards = [
    {
      title: "AI & Intellectual Property",
      href: "/trust/ai-and-ip",
    },
    {
      title: "Security & Confidentiality",
      href: "/trust/security",
    },
    {
      title: "Rights, Licensing & Ownership",
      href: "/trust/rights-licensing",
    },
    {
      title: "Data Handling & Retention",
      href: "/trust/data-handling",
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
              We take IP, security, and licensing seriously. Learn how we protect your brand, data, and creative ownership.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 mb-12">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex items-center justify-between rounded-xl p-5 border border-white/[0.08] transition-colors hover:border-white/20 hover:bg-white/[0.02]"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                <h2 className="type-h3 text-white">
                  {card.title}
                </h2>
                <ArrowRight size={18} className="ml-4 shrink-0 text-white/35 transition-transform group-hover:translate-x-0.5 group-hover:text-white/70" />
              </Link>
            ))}
          </div>

          <div className="mb-24 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-center">
            <Link href="/trust/ai-and-ip" className="font-sans text-xs text-white/45 transition-colors hover:text-white">
              Responsible AI
            </Link>
            <Link href="/contact" className="font-sans text-xs text-white/45 transition-colors hover:text-white">
              Subprocessors & Key Vendors
            </Link>
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
