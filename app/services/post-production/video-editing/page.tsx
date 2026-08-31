import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Editing Articog",
  description: "Professional editorial assembly, cutdowns, captions, and motion graphics to turn raw footage into polished final cuts.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Scissors, Copy, Type, Tv, Clock } from "lucide-react";

export default function VideoEditingPage() {
  const whatIsIncluded = [
    {
      title: "Editorial Assembly",
      desc: "Structuring raw footage into a compelling, high-retention narrative cut.",
      icon: Scissors,
    },
    {
      title: "Multiple Versions",
      desc: "Cutdowns and alternate lengths optimized for different platform requirements.",
      icon: Copy,
    },
    {
      title: "Captions",
      desc: "Accurate, timed captions burned-in or delivered as sidecars for sound-off viewing.",
      icon: Type,
    },
    {
      title: "Graphics",
      desc: "On-brand titles, lower-thirds, and motion graphics to elevate the final product.",
      icon: Tv,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Services / Post-Production
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Video Editing
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Turning raw footage into a polished, on-brand final cut. We provide professional editorial services designed for modern attention spans and platform requirements.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">What's Included</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              Our post-production pipeline is optimized for quality and speed, ensuring your content is ready for rollout.
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
            <Clock className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" />
            <p className="font-sans text-sm text-white/50 italic leading-relaxed">
              Note: Typical turnaround time is fast, ensuring rapid deployment without sacrificing premium production quality.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to edit your video?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Edit Your Video
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
