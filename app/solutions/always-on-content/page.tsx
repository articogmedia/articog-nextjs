import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Always-On Content Engine Articog",
  description: "Recurring creative output for brands that need consistent monthly volume across social and campaigns.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Infinity, Layers, BarChart3 } from "lucide-react";

export default function AlwaysOnContentPage() {
  const steps = [
    {
      title: "Continuous Production",
      desc: "A steady pipeline of content across every format you need, ensuring your brand stays active and relevant.",
      icon: Infinity,
    },
    {
      title: "Cross-Channel Coverage",
      desc: "Organic and paid, video and static all delivered from one unified engine for total brand consistency.",
      icon: Layers,
    },
    {
      title: "Scalable Volume",
      desc: "Output that flexes up or down with your needs, without the friction of hiring or onboarding new staff.",
      icon: BarChart3,
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
              Always-On Content Engine
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Continuous video, social, and visual production without growing your internal team.
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
              Our infrastructure extends your team with high-volume creative.
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

      {/* Comparison Note Section */}
      <Section className="py-20 border-t border-white/5">
        <Container>
          <div className="p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 max-w-4xl">
            <h3 className="font-display text-2xl font-semibold text-white mb-6">Content Engine vs. Subscription</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-sans text-white/70 leading-relaxed mb-4">
                  Unlike our <Link href="/solutions/monthly-creative-subscription" className="text-white hover:text-white/80 underline underline-offset-4">Monthly Creative Subscription</Link> which is a fixed monthly package, the Always-On Content Engine is broader infrastructure.
                </p>
                <p className="font-sans text-white/50 text-sm italic">
                  Best for: Teams needing deep, cross-channel integration and variable output volumes.
                </p>
              </div>
              <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8">
                <ul className="space-y-3">
                  {["Deep channel integration", "Variable output scaling", "Full ecosystem management"].map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to build your content engine?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Build Your Content Engine
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
