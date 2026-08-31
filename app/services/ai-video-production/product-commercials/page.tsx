import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Product Commercials Articog",
  description: "Premium AI commercials built around your real product inside AI-generated worlds. High-fidelity product accuracy and multi-channel outputs.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ShieldCheck, Package, CheckCircle, Monitor, Tv, Smartphone, Layers } from "lucide-react";

export default function ProductCommercialsPage() {
  const accuracyFeatures = [
    {
      title: "Product Fidelity",
      desc: "Your actual product is captured and represented accurately, never fabricated by AI, ensuring 100% brand consistency.",
      icon: ShieldCheck,
    },
    {
      title: "Packshots",
      desc: "Clean, accurate product close-ups and hero shots are included in every commercial to highlight key details.",
      icon: Package,
    },
    {
      title: "Approved Claims",
      desc: "All product claims and copy are reviewed against your brand's approved messaging guidelines before final delivery.",
      icon: CheckCircle,
    },
  ];

  const channelOutputs = [
    { name: "TV & Streaming", icon: Tv },
    { name: "YouTube Pre-roll", icon: Monitor },
    { name: "Social & Performance", icon: Smartphone },
    { name: "Digital OOH", icon: Layers },
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
              AI Product Commercials
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Premium commercials built around your real product inside AI-generated worlds. We place your products in stunning, high-fidelity environments that would be impossible or cost-prohibitive to film traditionally.
            </p>
          </div>
        </Container>
      </Section>

      {/* Accuracy Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">How We Protect Product Accuracy</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              Precision matters. Our workflow ensures that while the environment is AI-enhanced, your product remains the authentic star of the show.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accuracyFeatures.map((feature) => (
              <div 
                key={feature.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Outputs Section */}
      <Section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold text-white mb-8">Outputs by Channel</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {channelOutputs.map((channel) => (
                  <div key={channel.name} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-white/80 font-sans">
                    <channel.icon className="w-5 h-5 text-white/40" />
                    {channel.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-white/20">
              <h3 className="font-display text-xl font-semibold text-white mb-4">Rights & Ownership</h3>
              <p className="font-sans text-sm text-white/50 leading-relaxed">
                Articog transfers 100% of the commercial ownership and intellectual property rights for all final delivered assets to your brand. Your commercials are yours to use across any platform, in perpetuity.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Launch your next product campaign.</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Create a Product Ad
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
