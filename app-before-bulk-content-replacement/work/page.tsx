import { ArrowRight } from "lucide-react";
import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";

function WorkPage() {
  const categories = [
    {
      title: "Video Ads",
      description: "Commercial and performance video work.",
      href: "/work/video-ads",
    },
    {
      title: "Social & UGC",
      description: "Platform-native social creations and UGC-style content.",
      href: "/work/social",
    },
    {
      title: "AI Ad Library",
      description: "A browsable library of AI-generated ad assets and variants.",
      href: "/ai-ad-library",
    },
    {
      title: "Customer Stories",
      description: "In-depth case studies and outcomes from our partners.",
      href: "/customers",
    },
  ];

  const caseStudies = [
    {
      client: "E-Commerce Brand",
      industry: "Retail",
      service: "AI Video Ad Creations",
      headline: "10× creative output with zero headcount increase",
      metric: "10× Output volume",
    },
    {
      client: "DTC Beauty Brand",
      industry: "Beauty",
      service: "UGC/Social Content",
      headline: "Full campaign live 72 hours from brief",
      metric: "72h Brief to launch",
    },
    {
      client: "SaaS Startup",
      industry: "Technology",
      service: "ML Creations/Paid Social",
      headline: "3.2× ROAS lift on paid social in 60 days",
      metric: "3.2× ROAS improvement",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40 pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              OUR WORK
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Real outcomes. No composites.
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
              Proof, not promises. A look at the creative we've produced across formats and industries that drives tangible business results.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-20">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group rounded-2xl p-8 border border-white/[0.08] transition-all hover:border-white/20 hover:bg-white/[0.02]"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                <h3 className="mb-2 font-display text-xl font-semibold text-white flex items-center justify-between">
                  {cat.title}
                  <ArrowRight size={20} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section size="md" className="pt-0 pb-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-3 mb-24">
            {caseStudies.map((study) => (
              <div
                key={study.headline}
                className="group flex flex-col rounded-2xl p-8 border border-white/[0.08]"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="mb-6 font-display text-2xl font-bold text-accent">
                  {study.metric}
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {[study.client, study.industry, study.service].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 rounded-full font-sans text-[10px] font-medium uppercase tracking-wider bg-white/[0.05] text-white/50 border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold text-white leading-tight">
                  {study.headline}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <p className="font-sans text-lg mb-8 text-white/60">Want outcomes like these for your brand?</p>
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Talk to us</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default WorkPage;
