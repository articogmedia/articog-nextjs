"use client";

import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

function AccordionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.08]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left transition-colors hover:text-white"
        style={{
          color: isOpen
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0.6)",
        }}
      >
        <span className="font-sans text-[15px] font-medium leading-relaxed">
          {title}
        </span>

        {isOpen ? (
          <ChevronUp size={18} className="text-white/40 shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-white/40 shrink-0" />
        )}
      </button>

      {isOpen && (
        <div className="pb-6 font-sans text-sm leading-relaxed text-white/50 animate-in fade-in slide-in-from-top-1 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

function HelpCenterPage() {
  const sections = [
    {
      title: "Services",
      links: [{ label: "View all services", href: "/services" }],
      faqs: [
        {
          q: "What creative services does Articog offer?",
          a: "Articog specializes in AI-native video production, high-performance ad creative, static visual libraries, and audio production. We provide end-to-end creative support for growth-stage brands.",
        },
        {
          q: "How do I choose the right service for my campaign?",
          a: "Most clients start with a specific goal, like a product launch or social growth. You can browse our industry-specific solutions or book a brief discovery call to map out a custom production plan.",
        },
      ],
    },
    {
      title: "Pricing",
      links: [{ label: "View Pricing FAQ", href: "/pricing/faq" }],
      faqs: [
        {
          q: "How is production priced?",
          a: "We offer flexible models ranging from fixed-scope pilot projects to monthly recurring capacity (Growth and Scale plans). This ensures you have predictable costs while scaling creative volume.",
        },
      ],
    },
    {
      title: "Workflow",
      links: [{ label: "Explore how it works", href: "/how-it-works" }],
      faqs: [
        {
          q: "How does a project move from brief to delivery?",
          a: "Our AI Creative Pipeline follows a structured path: Briefing & Strategy, Concepting, AI-Native Production, Human Review & Quality Assurance, and final Delivery. This hybrid human-AI model ensures speed without sacrificing brand integrity.",
        },
      ],
    },
    {
      title: "Rights & Ownership",
      links: [
        { label: "AI and IP", href: "/trust/ai-and-ip" },
        { label: "Rights & Licensing", href: "/trust/rights-licensing" },
      ],
      faqs: [
        {
          q: "Who owns the delivered creative?",
          a: "Ownership terms are defined in our service agreements. Typically, clients receive broad rights to use and distribute delivered assets for their marketing purposes.",
        },
      ],
    },
    {
      title: "Working with AI",
      links: [
        {
          label: "Our Responsible AI Principles",
          href: "/trust/responsible-ai",
        },
      ],
      faqs: [
        {
          q: "How is AI used responsibly at Articog?",
          a: "We adhere to strict principles including human-in-the-loop review for all assets, no deceptive impersonation, and ensuring proper authorization for any likeness used in production.",
        },
      ],
    },
    {
      title: "Revisions",
      links: [
        {
          label: "Revision Policy",
          href: "/how-it-works/revisions-delivery",
        },
      ],
      faqs: [
        {
          q: "What is your revision policy?",
          a: "We include defined feedback windows for each project phase. Our version control and revision workflows are designed to integrate seamlessly with your internal approval processes.",
        },
      ],
    },
    {
      title: "File Formats",
      links: [],
      faqs: [
        {
          q: "What formats and specs do you deliver?",
          a: "We deliver in all standard campaign formats: 9:16 vertical (Social), 4:5 portrait (Feed), 1:1 square, and 16:9 landscape. All video is delivered in high-resolution MP4/MOV, and images in high-fidelity JPEG/PNG.",
        },
      ],
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
              SUPPORT
            </span>

            <Heading as="h1" size="hero" className="mb-8">
              Help Center
            </Heading>

            <div className="relative max-w-xl mx-auto mb-4">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                size={18}
              />

              <input
                type="text"
                placeholder="Search for articles, guides, or keywords..."
                className="w-full bg-white/[0.03] border border-white/[0.1] rounded-full py-4 pl-12 pr-6 font-sans text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <p className="font-sans text-[11px] text-white/30 uppercase tracking-widest mt-4">
              Common topics: Ownership, Pricing, Turnaround Time, AI Workflow
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-16 mb-24">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="scroll-mt-32"
                id={section.title.toLowerCase().replace(/\s+/g, "-")}
              >
                <div className="flex items-end justify-between mb-6 border-b border-white/[0.1] pb-4">
                  <h2 className="font-display text-2xl font-semibold text-white">
                    {section.title}
                  </h2>

                  <div className="flex gap-4">
                    {section.links.map((link, lIdx) => (
                      <Link
                        key={lIdx}
                        href={link.href}
                        className="text-[11px] font-sans font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                      >
                        {link.label} →
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  {section.faqs.map((faq, fIdx) => (
                    <AccordionItem key={fIdx} title={faq.q}>
                      {faq.a}
                    </AccordionItem>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Heading as="h2" size="section" className="mb-4">
              Still Need Help?
            </Heading>

            <p className="font-sans text-white/50 mb-8 max-w-lg mx-auto">
              If you couldn't find what you were looking for, our team is
              ready to assist you with any specific questions.
            </p>

            <Button asChild variant="primary" size="lg">
              <Link href="/contact">Still Need Help?</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default HelpCenterPage;