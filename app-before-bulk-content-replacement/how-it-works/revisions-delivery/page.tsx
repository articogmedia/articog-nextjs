import { Link } from "@/components/ui/Link";
import { Container, Section, Button, Heading } from "@/components/ui";
import { Check } from "lucide-react";

export default function RevisionsDeliveryPage() {
  const steps = [
    {
      title: "Feedback Windows",
      description: "A defined period for review and feedback on each round to maintain production velocity.",
    },
    {
      title: "Version Control",
      description: "Every revision clearly labeled and tracked so nothing gets lost and the latest version is always accessible.",
    },
    {
      title: "Revision Policy",
      description: "A clear number of included revision rounds per project, with any additional disputes handled case by case.",
    },
    {
      title: "Final Formats",
      description: "Assets delivered in every aspect ratio, file format, and technical spec your campaign requires.",
    },
    {
      title: "Archive",
      description: "Delivered projects kept securely accessible for future reference and repurposing.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              WORKFLOW
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Revisions & Delivery
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Our structured review process ensures quality and speed, from initial feedback through to final coordinated delivery across all your channels.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
            {steps.map((step) => (
              <div 
                key={step.title}
                className="rounded-2xl p-8 border border-white/[0.08]"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Check size={20} className="text-accent" />
                </div>
                <h3 className="mb-4 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Discuss Our Workflow</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
