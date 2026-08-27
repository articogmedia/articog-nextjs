import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Map, Layers, Layout, Info } from "lucide-react";

function RepurposingPage() {
  const steps = [
    {
      title: "Input-to-Output Mapping",
      desc: "A long-form video becomes cutdowns, a hero image becomes a full social set, and so on. We maximize the value of every asset you already own.",
      icon: Map,
    },
    {
      title: "Channel Mapping",
      desc: "Each output is sized, formatted, and optimized for its destination platform, from TikTok 9:16 to LinkedIn carousels.",
      icon: Layout,
    },
    {
      title: "Version Control",
      desc: "Organized delivery so your team always knows which asset is current, optimized, and ready for deployment.",
      icon: Layers,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Services / Social Creative
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              Creative Repurposing
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Turn your existing content into new formats and channels. Scale your creative presence without reshooting from scratch every time.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">How It Works</h2>
            <p className="font-sans text-white/50 max-w-2xl">
              We take your hero assets and intelligently decompose them into a library of high-performance content.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
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

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to stretch your content further?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Repurpose Your Content
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}


export default RepurposingPage;
