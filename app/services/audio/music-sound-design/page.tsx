import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music & Sound Design Articog",
  description: "Original scoring, sound design and finishing for video and audio projects.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Music, Layers, Sparkles, Volume2, Info } from "lucide-react";

export default function MusicSoundDesignPage() {
  const whatIsIncluded = [
    {
      title: "Music",
      desc: "Custom or licensed scoring matched to your brand's tone.",
      icon: Music,
    },
    {
      title: "Stems",
      desc: "Organized audio stems delivered for future edits.",
      icon: Layers,
    },
    {
      title: "SFX",
      desc: "Sound effects and design elements layered into the mix.",
      icon: Sparkles,
    },
    {
      title: "Loudness & Mastering",
      desc: "Final mix delivered to broadcast/platform loudness standards.",
      icon: Volume2,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Services / Audio
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Music & Sound Design
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Original scoring, sound design and finishing for video and audio projects. We craft the perfect sonic landscape for your brand.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">What's Included</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              Our comprehensive audio production pipeline covers everything from initial score to final master.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatIsIncluded.map((item) => (
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

          <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4 max-w-2xl mx-auto">
            <Info className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" />
            <p className="font-sans text-sm text-white/50 italic leading-relaxed">
              Note: All music and sound licensing terms are confirmed per project.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to build your soundscape?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Finish the Soundtrack
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
