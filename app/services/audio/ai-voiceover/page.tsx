import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voiceover Articog",
  description: "Clear, professional narration for video, ads and explainers with responsible AI voice production.",
};
import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ShieldCheck, UserX, CheckCircle2, Globe } from "lucide-react";

export default function AIVoiceoverPage() {
  const responsibleFeatures = [
    {
      title: "Voice Rights & Consent",
      desc: "Any synthetic voice used is properly licensed or consented to never an unauthorized clone of a real person.",
      icon: ShieldCheck,
    },
    {
      title: "No Impersonation",
      desc: "We do not produce content that impersonates a real individual without authorization.",
      icon: UserX,
    },
    {
      title: "Pronunciation Approvals",
      desc: "Product names, brand terms and technical language reviewed with you before final delivery.",
      icon: CheckCircle2,
    },
    {
      title: "Territory",
      desc: "Voice and language options matched to your target market.",
      icon: Globe,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Services / Audio
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              AI Voiceover
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Clear, professional narration for video, ads and explainers. We provide high-fidelity synthetic voices with a commitment to ethical production.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4 text-center">Responsible Production</h2>
            <p className="font-sans text-white/50 max-w-2xl mx-auto text-center">
              We maintain the highest standards of ethics and quality in our AI voice production pipeline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {responsibleFeatures.map((item) => (
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
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to find your voice?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Create Voiceover
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
