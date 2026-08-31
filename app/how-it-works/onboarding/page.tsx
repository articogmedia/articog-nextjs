import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding Articog",
  description: "What happens before your first project kicks off. Our structured onboarding process ensures a smooth start.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Briefcase, Users, ShieldCheck, Clock, Map } from "lucide-react";

export default function OnboardingPage() {
  const steps = [
    {
      title: "Brand Assets",
      desc: "Collecting your logo, guidelines, and existing creative for reference to ensure brand consistency.",
      icon: Briefcase,
    },
    {
      title: "Stakeholders",
      desc: "Identifying who's involved in review and approval to streamline the feedback loop.",
      icon: Users,
    },
    {
      title: "Rights & Permissions",
      desc: "Confirming usage rights and any necessary consents upfront to protect your brand.",
      icon: ShieldCheck,
    },
    {
      title: "Approval SLAs",
      desc: "Agreeing on how fast reviews and feedback will happen to maintain production momentum.",
      icon: Clock,
    },
    {
      title: "First Project Roadmap",
      desc: "A clear, milestone-driven timeline for your first deliverable and campaign launch.",
      icon: Map,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                How It Works
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Onboarding
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              What happens before your first project kicks off. Our onboarding process is designed to set your brand up for long-term creative success.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">Getting Started</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              We ensure every technical and creative foundation is in place before production begins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {steps.map((item) => (
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
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to begin?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Book Onboarding Call
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
