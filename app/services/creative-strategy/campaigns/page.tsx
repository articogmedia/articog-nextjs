import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Lightbulb, Users, Share2, Copy, Calendar } from "lucide-react";

export default function CampaignStrategyPage() {
  const howItWorks = [
    {
      title: "Campaign Idea",
      desc: "A unifying creative idea that ties everything together across all touchpoints.",
      icon: Lightbulb,
    },
    {
      title: "Audience & Message",
      desc: "Clear definition of who we're speaking to and what we're saying to drive action.",
      icon: Users,
    },
    {
      title: "Channels",
      desc: "Mapping where the campaign will live and how it adapts per channel requirements.",
      icon: Share2,
    },
    {
      title: "Hero & Derivatives",
      desc: "One core asset that scales into a full set of channel-specific pieces efficiently.",
      icon: Copy,
    },
    {
      title: "Roadmap",
      desc: "A clear delivery timeline across the full campaign lifecycle.",
      icon: Calendar,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Services / Strategy
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Campaign Creative Strategy
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Planning a full campaign system, not just a single asset. We create integrated creative frameworks that work across every channel.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">How It Works</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              Our holistic approach ensures your brand message remains consistent while optimized for every platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((item) => (
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
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to plan your next campaign?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Plan a Campaign
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
