import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Creative Work — Articog",
  description: "Platform-native content built for organic and paid social.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Instagram, Smartphone, Grid, Info } from "lucide-react";

export default function SocialWorkPage() {
  const formats = [
    {
      title: "Feed Post",
      desc: "High-impact square and 4:5 assets built for the main feed.",
      icon: Grid,
    },
    {
      title: "Story Format",
      desc: "Immersive 9:16 vertical content designed for mobile-first consumption.",
      icon: Smartphone,
    },
    {
      title: "Reel Cover",
      desc: "Custom-designed thumbnail covers that drive higher click-through rates.",
      icon: Instagram,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Our Work
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Social Creative Work
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Platform-native content built for organic and paid social. We design for the thumb-stop and the click.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">Format Mockups</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              We deliver assets optimized for every platform's unique requirements and user behaviors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formats.map((format) => (
              <div 
                key={format.title} 
                className="group relative flex flex-col items-center text-center"
              >
                <div className="w-full aspect-[4/5] rounded-3xl bg-white/5 border border-white/10 mb-6 flex items-center justify-center group-hover:bg-white/[0.08] transition-colors relative overflow-hidden">
                  <format.icon className="w-16 h-16 text-white/10" />
                  <div className="absolute bottom-4 left-4 right-4 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">{format.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed max-w-[240px]">{format.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 max-w-3xl mx-auto">
            <div className="flex gap-4 items-start">
              <Info className="w-6 h-6 text-white/40 mt-1" />
              <div>
                <h4 className="font-display text-xl font-semibold text-white mb-2">Organized for Scale</h4>
                <p className="font-sans text-base text-white/60 leading-relaxed">
                  All content is intelligently grouped into thematic series to ensure cross-channel consistency. Every asset is meticulously organized by campaign and format, making reference and implementation seamless for your team.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to fuel your social engine?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Build Your Monthly Content
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
