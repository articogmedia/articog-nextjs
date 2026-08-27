import { Link } from "@/components/ui/Link";
import { Container, Section, Button } from "@/components/ui";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function ProductVisualsPage() {
  return (
    <>
      <Section size="lg" className="pt-32 md:pt-40 pb-20">
        <Container>
          <div className="max-w-3xl">
            <span className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              SERVICES
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              Product Visual Content
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              Premium product visuals created faster with AI-native production.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 border-t border-white/5">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white mb-6">What We Deliver</h2>
              <p className="text-white/60 leading-relaxed">
                Elevate your product presence without traditional studio logistics. We combine precise product rendering with AI-native environments to deliver visual content at scale.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-white mb-6">Applications</h2>
              <ul className="space-y-4">
                {[
                  "Ecommerce product imagery",
                  "Campaign hero assets",
                  "Product launch visual systems",
                  "Advertising creative assets",
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


export default ProductVisualsPage;
