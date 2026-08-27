import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Quote, Info } from "lucide-react";

function ReviewsPage() {
  const testimonials = [
    {
      name: "[Placeholder Name]",
      role: "Head of Growth",
      company: "SaaS Enterprise",
      quote: "The speed at which we can now iterate on our performance creative is game-changing. We've cut our production cycles in half while increasing quality.",
    },
    {
      name: "[Placeholder Name]",
      role: "Creative Director",
      company: "DTC Brand",
      quote: "Articog feels like a natural extension of our team. They understand the nuances of our brand identity and deliver perfectly on-brand assets every time.",
    },
    {
      name: "[Placeholder Name]",
      role: "Founder",
      company: "E-comm Startup",
      quote: "Finally, a solution that actually scales with us. The ROI was evident within the first 30 days of moving our production into their system.",
    },
    {
      name: "[Placeholder Name]",
      role: "Marketing Manager",
      company: "Global Retailer",
      quote: "Handling localized content for 12 different markets was a nightmare before Articog. Now it's the smoothest part of our global campaign rollout.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Feedback
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Reviews & Testimonials
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              What clients say about working with us. We pride ourselves on being the engine that drives creative success for modern brands.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mb-24">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-6"
              >
                <Quote className="w-8 h-8 text-white/20" />
                <p className="font-display text-lg text-white/80 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/5" />
                  <div>
                    <h5 className="font-display font-semibold text-white text-sm">{t.name}</h5>
                    <p className="font-sans text-[11px] text-white/40 uppercase tracking-wider">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4 max-w-2xl mx-auto text-center justify-center">
            <Info className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" />
            <p className="font-sans text-sm text-white/50 italic leading-relaxed">
              All testimonials are shared with explicit client permission. Quotes and names are anonymized here until final publication approval.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to see the results for yourself?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Talk to Us
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default ReviewsPage;
