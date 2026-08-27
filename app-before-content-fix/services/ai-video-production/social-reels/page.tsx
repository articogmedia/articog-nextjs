import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Smartphone, Type, Repeat, Scissors, Calendar } from "lucide-react";

export default function SocialReelsPage() {
  const includedFeatures = [
    {
      title: "9:16-First Design",
      desc: "Built vertical-first for how audiences actually watch, ensuring maximum impact on mobile screens.",
      icon: Smartphone,
    },
    {
      title: "Captions",
      desc: "Auto-captioned and designed for sound-off viewing, keeping engagement high in any environment.",
      icon: Type,
    },
    {
      title: "Series Consistency",
      desc: "Recurring formats and visual identity maintained across all posts for stronger brand recognition.",
      icon: Repeat,
    },
    {
      title: "Cutdowns",
      desc: "Long-form content intelligently repurposed into multiple high-engagement short clips.",
      icon: Scissors,
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
              Social & Reel Production
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Always-on short-form video for Instagram, TikTok and YouTube Shorts. We handle the heavy lifting of daily content production so you can focus on growing your community.
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
              Everything you need to maintain a premium presence on the world's most competitive social platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {includedFeatures.map((feature) => (
              <div 
                key={feature.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <feature.icon className="w-6 h-6" />
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

      {/* Monthly Cadence Note */}
      <Section className="py-20">
        <Container>
          <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-semibold text-white mb-4">Consistency is King</h3>
              <p className="font-sans text-white/60 leading-relaxed">
                Successful social strategies aren't built on one-off viral hits. Our service operates on a consistent monthly schedule, delivering a predictable volume of high-quality content to keep your algorithm momentum moving forward.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready for always-on content?</h2>
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
