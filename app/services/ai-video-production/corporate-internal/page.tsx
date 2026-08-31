import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate & Internal Communications Articog",
  description: "Scalable video solutions for corporate training, internal announcements, and executive communications. Professional quality without the studio cost.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Users, Presentation, ShieldCheck, Zap } from "lucide-react";

export default function CorporateInternalPage() {
  const deliverySections = [
    {
      title: "Training & Onboarding",
      desc: "Produce high-quality training modules and onboarding videos at scale, ensuring consistent knowledge transfer across teams.",
      icon: Presentation,
    },
    {
      title: "Internal Announcements",
      desc: "Turn standard internal memos into engaging video announcements that capture attention and drive alignment.",
      icon: Zap,
    },
    {
      title: "Executive Comms",
      desc: "Professional-grade executive messages for town halls and strategic updates without the need for a full film crew.",
      icon: Users,
    },
    {
      title: "Secure Delivery",
      desc: "Enterprise-grade security and confidentiality for all internal assets, keeping your sensitive information protected.",
      icon: ShieldCheck,
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
              Corporate & Internal
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Scalable video solutions for corporate training, internal announcements, and executive communications. We help you build a more connected workforce through high-impact video.
            </p>
          </div>
        </Container>
      </Section>

      {/* What We Deliver Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">What We Deliver</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              From training modules to CEO updates, our AI-powered production makes professional video accessible for every internal team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverySections.map((item) => (
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

      {/* CTA Section */}
      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Scale your internal comms.</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Create Internal Video
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
