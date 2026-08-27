import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Calendar, Palette, Share2, ArrowRight } from "lucide-react";

function MonthlySocialContentPage() {
  const included = [
    {
      title: "Posts Tailored to Your Calendar",
      desc: "A set number of posts and graphics per month, planned around your content calendar and campaign priorities.",
      icon: Calendar,
    },
    {
      title: "Consistent Brand Voice",
      desc: "Every asset is crafted to match your brand voice and visual identity, building recognition over time.",
      icon: Palette,
    },
    {
      title: "Platform-Specific Formatting",
      desc: "All content is formatted for the exact specs and style of each channel you publish to.",
      icon: Share2,
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
                Services / Social Creative
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Monthly Social Content
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              A steady, predictable stream of on-brand social content delivered every month. Stay consistently visible without the overhead of an in-house creative team.
            </p>
          </div>
        </Container>
      </Section>

      {/* What's Included Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">What's Included</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              A complete monthly creative service designed to keep your channels active and your brand cohesive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {included.map((item) => (
              <div 
                key={item.title} 
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Subscription Note */}
      <Section className="py-20 border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-2xl font-semibold text-white mb-6">Need Video Included Too?</h3>
            <p className="font-sans text-white/60 leading-relaxed mb-8">
              For teams who want a broader monthly creative subscription that includes video, explore our comprehensive Monthly Creative Subscription solution.
            </p>
            <Link href="/solutions/monthly-creative-subscription">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12">
                View Monthly Creative Subscription
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/[0.02]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready for consistent content?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Start Monthly Content
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}


export default MonthlySocialContentPage;
