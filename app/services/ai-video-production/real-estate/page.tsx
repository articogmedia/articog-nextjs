import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ShieldCheck, Eye, FileText, ArrowRight } from "lucide-react";

export default function RealEstateFilmsPage() {
  const disclosurePoints = [
    {
      title: "Visual Transparency",
      desc: "Any conceptual or rendered scenes (e.g. pre-construction visualizations) are clearly disclosed as such, never presented as real footage.",
      icon: Eye,
    },
    {
      title: "Factual Representation",
      desc: "Location and project details are represented accurately to ensure viewers receive a truthful impression of the property.",
      icon: ShieldCheck,
    },
    {
      title: "Compliance Review",
      desc: "All marketing claims and visual representations are reviewed for accuracy and compliance before delivery.",
      icon: FileText,
    },
  ];

  const useCases = [
    "High-end property listings",
    "Pre-construction development marketing",
    "Investor and stakeholder presentations",
    "Neighborhood and lifestyle showcases",
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
              Real Estate Films
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Cinematic property and development films produced with AI. We create high-impact visual narratives that bring luxury listings and future developments to life.
            </p>
          </div>
        </Container>
      </Section>

      {/* Responsible Production Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">Responsible Production</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              We maintain the highest standards of integrity in real estate visualization, ensuring transparency and accuracy in every frame.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {disclosurePoints.map((item) => (
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
              <h3 className="font-display text-xl font-semibold text-white mb-4">Integrity First</h3>
              <p className="font-sans text-sm text-white/50 leading-relaxed">
                Our AI-enhanced production workflow is specifically calibrated for the real estate industry, balancing cinematic beauty with the factual requirements of property marketing.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Bring your development to life.</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Create a Real Estate Film
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
