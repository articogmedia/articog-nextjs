import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Intellectual Property Articog",
  description: "How Articog handles AI tool use, ownership, and client intellectual property.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ShieldCheck, Scale, FileText } from "lucide-react";

export default function AIIPPage() {
  const policies = [
    {
      title: "Ownership of Delivered Assets",
      desc: "Clients receive full ownership rights to final delivered creative upon completion of payment. You own the results of our collaboration, enabling you to use them across any channel or campaign without additional licensing fees.",
      note: "Note: This is a general policy; final terms are defined in your specific service agreement.",
      icon: ShieldCheck,
    },
    {
      title: "Our Use of AI Tools",
      desc: "We use a sophisticated, multi-model AI pipeline calibrated to your unique brand. Our process is transparent and designed to augment human creativity, not replace the strategic direction that makes your brand unique.",
      icon: Scale,
    },
    {
      title: "Third-Party Rights",
      desc: "We take rigorous care to ensure that all generated content avoids infringing upon third-party intellectual property. Our quality review process includes checks to maintain brand integrity and legal safety.",
      icon: FileText,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Trust Center
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              AI & Intellectual Property
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Addressing a common question directly: who owns the creative we deliver? We believe in clarity and security for every brand we partner with.
            </p>
          </div>
        </Container>
      </Section>

      {/* Policies Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy) => (
              <div 
                key={policy.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <policy.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-4">{policy.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed mb-6 flex-grow">{policy.desc}</p>
                {policy.note && (
                  <p className="font-sans text-[10px] text-white/30 italic uppercase tracking-wider">{policy.note}</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing Note Section */}
      <Section className="py-20 border-t border-white/5">
        <Container>
          <div className="p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 max-w-4xl text-center mx-auto">
            <p className="font-sans text-white/70 leading-relaxed">
              While these policies represent our standard approach, specific Intellectual Property terms and legal protections are clearly set out in each client's individual service agreement.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to build with confidence?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Book a Demo
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
