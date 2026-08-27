import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ArrowRight, Film, Palette, Users, Shield } from "lucide-react";

export default function BrandFilmsPage() {
  const processSteps = [
    {
      title: "Story Development",
      desc: "Concept and narrative direction aligned to your unique brand voice and goals.",
      icon: Film,
    },
    {
      title: "Cinematic Direction",
      desc: "Careful curation of visual style, pacing, and emotional tone to match your aesthetic.",
      icon: Palette,
    },
    {
      title: "AI Environments & Talent",
      desc: "Responsible use of AI-generated environments and talent to create impossible worlds.",
      icon: Users,
    },
    {
      title: "Finishing",
      desc: "Professional color grading, sound design, and final delivery at cinematic quality.",
      icon: Shield,
    },
  ];

  const useCases = [
    "Brand identity films",
    "Product launches",
    "Investor and pitch reels",
    "Company manifestos",
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
              AI Brand Films
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              High-craft brand storytelling without traditional production overhead. We combine narrative depth with state-of-the-art AI visuals to tell your story.
            </p>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">Our Process</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              A structured approach to high-end creative production, blending strategic thinking with generative power.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((step) => (
              <div 
                key={step.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-white" />
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

      {/* AI Talent Policy Note */}
      <Section className="py-12 border-y border-white/5">
        <Container>
          <div className="max-w-3xl">
            <h3 className="font-display text-lg font-semibold text-white mb-4">Responsible AI Policy</h3>
            <p className="font-sans text-sm text-white/40 leading-relaxed">
              Our AI talent and environment policy ensures that all generated assets are used responsibly. We prioritize ethical sourcing and creative integrity in every frame we produce.
            </p>
          </div>
        </Container>
      </Section>

      {/* Use Cases Section */}
      <Section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl font-semibold text-white mb-8">Use Cases</h2>
              <div className="grid grid-cols-1 gap-4">
                {useCases.map((useCase) => (
                  <div key={useCase} className="flex items-center gap-4 text-white/70 font-sans">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    {useCase}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center">
              <h3 className="font-display text-xl font-semibold text-white mb-4">Rights & Ownership</h3>
              <p className="font-sans text-sm text-white/50 leading-relaxed">
                Articog transfers 100% of the commercial ownership and intellectual property rights for all final delivered assets to your brand upon project completion.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Tell your brand story differently.</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Start a Brand Film
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
