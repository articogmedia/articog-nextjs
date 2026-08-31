import Link from "next/link";
import { Container, Section, Heading, Button } from "@/components/ui";

export const metadata = {
  title: "Product Visual Content   Articog",
  description:
    "On-brand product visuals at scale. Product photography, campaign posters, and print-ready assets delivered in days.",
};

export default function ProductVisualsPage() {
  const capabilities = [
    {
      title: "Product Photography",
      desc: "Studio-quality product shots with perfect lighting and composition.",
    },
    {
      title: "Campaign Posters",
      desc: "High-impact visual statements for digital and physical placements.",
    },
    {
      title: "Digital Banners",
      desc: "Optimized display assets for web, mobile, and social platforms.",
    },
    {
      title: "Print-Ready Assets",
      desc: "High-resolution files ready for any physical production needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mb-16 max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Work
              </span>
            </div>

            <Heading as="h1" size="hero" className="mb-6">
              Product Visual Content
            </Heading>

            <p className="font-sans text-xl leading-relaxed text-white/60">
              Scale your brand&apos;s visual identity with high-fidelity,
              on-brand product visuals. From photography to print-ready
              assets, delivered at the speed of AI.
            </p>
          </div>
        </Container>
      </Section>

      {/* Case Study Section */}
      <Section className="bg-white/[0.02] py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="group flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="font-display text-lg text-white/20 transition-colors group-hover:text-white/40">
                DTC Beauty Brand Case Study Visual
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                    Beauty / UGC / Social Content
                  </span>
                </div>

                <h2 className="mb-4 font-display text-3xl font-semibold text-white">
                  Full campaign live 72 hours from brief
                </h2>

                <p className="font-sans text-lg text-white/60">
                  How a breakout DTC beauty brand leveraged Articog to go from
                  initial concept to a multi-platform launch in just three
                  days.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 rounded-xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2">
                <div>
                  <div className="mb-1 font-display text-4xl font-bold text-white">
                    72h
                  </div>

                  <div className="font-sans text-sm font-bold uppercase tracking-wider text-white/40">
                    Brief to launch
                  </div>
                </div>

                <div>
                  <div className="mb-1 font-display text-4xl font-bold text-white">
                    100%
                  </div>

                  <div className="font-sans text-sm font-bold uppercase tracking-wider text-white/40">
                    Brand Fidelity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Capabilities Section */}
      <Section className="py-24">
        <Container>
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-6 font-display text-3xl font-semibold text-white">
              Visual Production at Scale
            </h2>

            <p className="font-sans text-lg text-white/60">
              We provide a comprehensive suite of visual assets that maintain
              consistent brand standards across every touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="mb-3 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="font-sans text-sm leading-relaxed text-white/50">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="border-t border-white/5 py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 font-display text-4xl font-semibold text-white">
              Ready to elevate your visuals?
            </h2>

            <Link href="/book-a-demo">
              <Button size="lg" className="h-14 rounded-full px-8 text-lg">
                Start Your Project
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}