import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Localization & Variants Articog",
  description: "Adapt your video campaigns for new languages and markets without reshooting. High-fidelity voice localization, subtitles, and cultural QA.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Globe, Languages, ShieldCheck, CheckSquare, Info } from "lucide-react";

export default function LocalizationPage() {
  const features = [
    {
      title: "Voice Localization",
      desc: "Dubbed or re-voiced audio in target languages, maintaining the emotional resonance of the original performance.",
      icon: Languages,
    },
    {
      title: "Subtitles",
      desc: "Accurate, timed captions for every market version, ensuring accessibility and clarity across all platforms.",
      icon: Globe,
    },
    {
      title: "Cultural QA",
      desc: "Comprehensive review to ensure creative content lands appropriately in each market, beyond simple translation.",
      icon: CheckSquare,
    },
    {
      title: "Version Control",
      desc: "Organized delivery of every market variant, clearly labeled and ready for distribution across global channels.",
      icon: ShieldCheck,
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
                Services / AI Video Production
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Localization & Variants
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Adapt your video campaigns for new languages and markets without reshooting from scratch. We help you scale your message globally with speed and precision.
            </p>
          </div>
        </Container>
      </Section>

      {/* What's Included Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">What's Included</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              A comprehensive toolkit for global scale, ensuring your brand speaks the language of every customer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item) => (
              <div 
                key={item.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4 max-w-2xl">
            <Info className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" />
            <p className="font-sans text-sm text-white/50 italic leading-relaxed">
              Note: Usage rights are confirmed per market as part of the project scope, ensuring full legal compliance for global distribution.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Scale your global reach.</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Localize Your Campaign
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
