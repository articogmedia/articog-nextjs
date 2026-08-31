import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Launch Videos — Articog",
  description: "Launch with one hero film that scales into every channel asset you need. Comprehensive AI video packages for high-impact product launches.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Clock, CheckCircle2, Map, Layers } from "lucide-react";

export default function ProductLaunchPage() {
  const workflowSteps = [
    {
      title: "Hero + Derivatives",
      desc: "One core film, expertly cut down and adapted into every format and length your launch requires.",
      icon: Layers,
    },
    {
      title: "Launch Timeline",
      desc: "A meticulously mapped delivery schedule perfectly aligned to your specific launch dates and milestones.",
      icon: Clock,
    },
    {
      title: "Approved Claims",
      desc: "All product messaging is rigorously reviewed against your brand's approved claims before final delivery.",
      icon: CheckCircle2,
    },
    {
      title: "Channel Asset Map",
      desc: "Every single asset is pre-sized and optimized for its specific destination channel and platform.",
      icon: Map,
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
              Product Launch Videos
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Launch with one hero film that scales into every channel asset you need. We help brands create high-impact launch moments with a single streamlined production cycle.
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
              Our launch-first methodology ensures that every visual asset is working in harmony across your entire marketing funnel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflowSteps.map((step) => (
              <div 
                key={step.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Strategy Note */}
      <Section className="py-20 border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-2xl font-semibold text-white mb-6">Launch-Ready Content</h3>
            <p className="font-sans text-white/60 leading-relaxed mb-8">
              Don't let production bottlenecks delay your go-to-market. Our AI-driven pipeline allows you to move from final product design to a full suite of launch assets in days, not months.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/40 text-xs font-bold tracking-widest uppercase">
              <span>Paid Social</span>
              <span className="text-white/10">•</span>
              <span>Web Hero</span>
              <span className="text-white/10">•</span>
              <span>Email Content</span>
              <span className="text-white/10">•</span>
              <span>Retailer Assets</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to launch?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Plan Your Launch
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
