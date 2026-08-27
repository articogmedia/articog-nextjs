import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Layout, Target, Layers, CheckCircle2, Truck } from "lucide-react";

export default function MultiFormatCampaignsPage() {
  const howItWorks = [
    {
      title: "Asset Map",
      desc: "Every deliverable planned across the full campaign upfront, ensuring no channel is overlooked.",
      icon: Layout,
    },
    {
      title: "Channel Specs",
      desc: "Each asset built to the exact specs of its destination, optimized for platform performance.",
      icon: Target,
    },
    {
      title: "Modular Concept",
      desc: "One core idea that extends cleanly across video, static, audio, and social formats.",
      icon: Layers,
    },
    {
      title: "Approvals",
      desc: "Structured review checkpoints throughout production to maintain creative alignment.",
      icon: CheckCircle2,
    },
    {
      title: "Coordinated Delivery",
      desc: "Everything delivered together, organized and ready to launch for maximum impact.",
      icon: Truck,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Solutions
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Multi-Format Campaign Production
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Producing one integrated campaign across every format and channel from a single modular concept. We ensure consistency and scale across your entire media mix.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">How It Works</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              Our modular approach to production allows one creative direction to live everywhere your audience does.
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
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to scale your creative?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Build Your Campaign System
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
