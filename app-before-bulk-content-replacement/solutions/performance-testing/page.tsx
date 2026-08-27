import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Microscope, Zap, PieChart, Activity } from "lucide-react";

export default function PerformanceTestingPage() {
  const features = [
    {
      title: "Hook Testing",
      desc: "Produce dozens of opening hook variants per concept to find what stops the scroll.",
      icon: Activity,
    },
    {
      title: "Rapid Visual Iteration",
      desc: "Swap backgrounds, talent, and color palettes without rebuilding assets from scratch.",
      icon: Zap,
    },
    {
      title: "Structured Matrix",
      desc: "A scientific approach to testing creative variables mapped directly to your marketing funnel.",
      icon: Microscope,
    },
    {
      title: "Data-Led Optimization",
      desc: "Winning creative signals from your campaigns flow back into our production for continuous improvement.",
      icon: PieChart,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Core Solutions
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Performance Creative Testing
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Stop guessing and start scaling. Rapidly produce, test, and optimize on-brand creative variants to drive meaningful performance gains for your brand.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-white/5 border border-white/10">
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

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to scale your performance?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Explore Testing
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
