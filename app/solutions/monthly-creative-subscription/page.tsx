import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Creative Subscription — Articog",
  description: "Steady, predictable creative delivered every month. Video, social, and visuals without the overhead of a full in-house team or agency retainer.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Layers, Calendar, UserCheck, ArrowRight } from "lucide-react";

export default function MonthlySubscriptionPage() {
  const steps = [
    {
      title: "Flexible Scope",
      desc: "A mix of formats—video, social, and visual—tailored specifically to your monthly needs and goals.",
      icon: Layers,
    },
    {
      title: "Consistent Cadence",
      desc: "Assets delivered on a predictable monthly schedule, ensuring your channels never go dark.",
      icon: Calendar,
    },
    {
      title: "Dedicated Creative Direction",
      desc: "A consistent point of contact who understands your brand's voice and visual identity inside out.",
      icon: UserCheck,
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
                Solutions
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Monthly Creative Subscription
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              A steady, predictable stream of creative delivered every month—video, social, and visuals, without the overhead of a full in-house team or traditional agency retainer.
            </p>
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">How It Works</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              We provide an elastic creative engine that adapts to your campaign cycles and business objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item) => (
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

      {/* Pricing Link Section */}
      <Section className="py-20 border-t border-white/5">
        <Container>
          <Link 
            href="/pricing"
            className="group flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 max-w-2xl"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">View Subscription Tiers</h3>
              <p className="font-sans text-white/50">Explore our flexible plans designed for teams of all sizes.</p>
            </div>
            <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to start your creative engine?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Start Your Subscription
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
