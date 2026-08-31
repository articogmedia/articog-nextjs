import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance Articog",
  description: "Our rigorous review process ensures every asset meets your brand's highest standards before delivery.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ShieldCheck, Type, FileSearch, HardDrive, UserCheck, Info } from "lucide-react";

export default function QualityAssurancePage() {
  const standards = [
    {
      title: "Product & Logo Integrity",
      desc: "Accurate representation of your brand identity and product features in every asset we produce.",
      icon: ShieldCheck,
    },
    {
      title: "Text Accuracy",
      desc: "Checking for legibility, spelling, and correctness of any on-screen or on-image text elements.",
      icon: Type,
    },
    {
      title: "Policy Review",
      desc: "Verifying assets against platform-specific advertising policies and legal requirements.",
      icon: FileSearch,
    },
    {
      title: "Final Technical QC",
      desc: "Double-checking resolution, frame rate, file format, and naming conventions before delivery.",
      icon: HardDrive,
    },
    {
      title: "Human Review",
      desc: "Every AI-generated asset is reviewed by a professional editor; we never ship automatically.",
      icon: UserCheck,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Reliability
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Quality Assurance
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              The rigorous review process every asset goes through before it reaches you. We combine AI speed with human precision.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">Our QA Standards</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              Our multi-stage verification process ensures error-free delivery at scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {standards.map((item) => (
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

          <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4 max-w-2xl mx-auto">
            <Info className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" />
            <p className="font-sans text-sm text-white/50 italic leading-relaxed">
              Learn more about our broader <Link href="/trust" className="text-white underline hover:text-white/80 transition-colors">Trust & Safety</Link> practices.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Precision at every step.</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                See Our QA Standards
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
