import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck, ArrowRight, Zap, Users } from "lucide-react";

export default function AIVideoProductionPage() {
  const deliverables = [
    { title: "Brand Films", path: "/services/ai-video-production/brand-films", desc: "High-concept films that tell your brand's story with cinematic quality." },
    { title: "Product Commercials", path: "/services/ai-video-production/product-commercials", desc: "Dynamic commercial spots showcasing products in stunning environments." },
    { title: "Performance Ads", path: "/services/ai-video-production/performance-ads", desc: "Data-driven creative optimized for conversion across paid social." },
    { title: "Social & Reels", path: "/services/ai-video-production/social-reels", desc: "Fast-paced, native content designed for high engagement on vertical platforms." },
    { title: "UGC-Style Ads", path: "/services/ai-video-production/ugc-style-ads", desc: "Authentic-feeling content that builds trust and drives action." },
    { title: "Product Launch", path: "/services/ai-video-production/product-launch", desc: "Complete visual packages to make your next launch unforgettable." },
    { title: "SaaS & Explainers", path: "/services/ai-video-production/saas-explainers", desc: "Clear, engaging product explainer videos built for high conversion." },
    { title: "Real Estate Films", path: "/services/ai-video-production/real-estate", desc: "Cinematic property and development films with responsible AI visualization." },
    { title: "Corporate & Internal", path: "/services/ai-video-production/corporate-internal", desc: "Scalable video for training, announcements, and executive communications." },
    { title: "Localization & Variants", path: "/services/ai-video-production/localization", desc: "Adapt campaigns for global markets with voice localization and cultural QA." },
  ];

  const faqs = [
    {
      q: "What is the typical turnaround time?",
      a: "Most projects are delivered within 48-72 hours from brief approval. Complex brand films may take up to 5 business days depending on the scope and requirements."
    },
    {
      q: "How does the revision process work?",
      a: "Every project includes two rounds of revisions. We use a collaborative platform where you can leave time-stamped feedback directly on the video drafts."
    },
    {
      q: "Who owns the rights to the final content?",
      a: "Upon final payment, you own 100% of the commercial rights to the delivered assets. You are free to use them across any platform, globally, in perpetuity."
    },
    {
      q: "Is the content truly unique to my brand?",
      a: "Yes. Every asset is generated based on your specific brand guidelines, color palettes, and creative brief, ensuring zero overlap with other brands."
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Services
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              AI Video Production
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Our flagship service. We deliver end-to-end video production that combines the exponential power of generative AI with senior human creative direction.
            </p>
          </div>
        </Container>
      </Section>

      {/* What We Deliver */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">What We Deliver</h2>
            <p className="font-sans text-white/50">Comprehensive video solutions for every stage of the customer journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <Link 
                key={item.title} 
                href={item.path}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed mb-6">{item.desc}</p>
                </div>
                <div className="flex items-center text-xs font-bold tracking-widest text-white/30 group-hover:text-white/60 transition-colors uppercase">
                  Learn More <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works & Quality */}
      <Section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-display text-3xl font-semibold text-white">How It Works</h2>
              <p className="font-sans text-lg text-white/60 leading-relaxed">
                Our pipeline is designed for speed without compromising on creative integrity. From brief submission to final delivery, our process is streamlined to get your content live faster.
              </p>
              <Link href="/how-it-works" className="inline-flex items-center text-sm font-bold tracking-widest text-white hover:opacity-70 transition-opacity uppercase">
                View the full pipeline <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-display text-3xl font-semibold text-white">Human Oversight & Quality</h2>
              <p className="font-sans text-lg text-white/60 leading-relaxed">
                We don't just "hit generate." Every single asset produced by Articog goes through a rigorous human review process. Our creative directors ensure brand guidelines are met, quality is consistent, and the final output is ready for prime time.
              </p>
              <div className="flex items-center gap-4 text-white/40 font-sans text-sm italic border-l-2 border-white/10 pl-6">
                <Users className="w-5 h-5 flex-shrink-0" />
                <span>"AI enables the speed, but human taste ensures the soul."</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-semibold text-white mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 bg-black/40 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:no-underline font-display text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 font-sans leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to transform your production?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Book a Demo
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
