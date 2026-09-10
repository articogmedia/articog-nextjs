import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://articog.com/services/social-creative" },
  title: "Social Creative Articog",
  description: "Platform-native graphic content for organic and paid social. Elevate your presence with feed posts, stories, carousels, and more.",
};
import { Link } from "@/components/ui/Link";
import { Container, Section, Button } from "@/components/ui";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ServiceDetails } from "@/components/sections/ServiceDetails";

export default function SocialCreativePage() {
  return (
    <>
      <Section size="lg" className="pt-32 md:pt-40 pb-20">
        <Container>
          <div className="max-w-3xl">
            <span className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              SERVICES
            </span>
            <h1 className="type-h1 mb-6 text-white">
              Social Creative
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              Always-on social content designed to keep your brand consistent, relevant, and moving.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 border-t border-white/5">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="type-h2 mb-6 text-white">What We Deliver</h2>
            </div>
            <div>
              <h2 className="type-h2 mb-6 text-white">Applications</h2>
              <ul className="space-y-4">
                {[
                  "Organic social short-form video",
                  "Reels & TikTok content series",
                  "Brand campaign social cutdowns",
                  "Always-on social content calendars",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/60">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <ServiceDetails category="social" />

      <Section className="py-32">
        <Container className="text-center">
          <Button asChild variant="primary" size="lg">
            <Link href="/book-a-demo">
              Book a Demo <ArrowRight size={15} className="ml-2" />
            </Link>
          </Button>
        </Container>
      </Section>
    </>
  );
}
