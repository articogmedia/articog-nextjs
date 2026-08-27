import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Lightbulb, Palette, LayoutGrid, MessageSquare } from "lucide-react";

export default function CreativeStrategyPage() {
  const capabilities = [
    {
      title: "Concept Development",
      desc: "Translating your brief into a clear, high-impact creative direction that sets the stage for production.",
      icon: Lightbulb,
    },
    {
      title: "Brand Direction",
      desc: "Ensuring every AI-generated asset reflects your brand's unique voice, tone, and visual identity perfectly.",
      icon: Palette,
    },
    {
      title: "Campaign Architecture",
      desc: "Mapping how creative flows seamlessly across formats and channels for a cohesive, single-campaign experience.",
      icon: LayoutGrid,
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
                Services
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Creative Strategy & Concepting
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              The strategic foundation behind every production—where we translate your business goals into sharp creative direction before a single frame is generated.
            </p>
          </div>
        </Container>
      </Section>

      {/* What We Do Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">What We Do</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              We bridge the gap between high-level objectives and technical AI production through a rigorous strategic process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((item) => (
              <div 
                key={item.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engagement Note Section */}
      <Section className="py-20 border-t border-white/5">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 mb-8 mx-auto">
              <MessageSquare className="w-4 h-4 text-white/40" />
              <span className="font-sans text-xs font-medium">Strategic Engagement</span>
            </div>
            <p className="font-sans text-2xl text-white/70 leading-relaxed italic">
              "Strategy sessions typically kick off any larger engagement at Articog, whether it's a single flagship film or an ongoing, high-volume content program."
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to build your creative foundation?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Start with Strategy
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
