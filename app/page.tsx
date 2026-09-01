import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articog | Creative AI Production Company | AI Brand Films & Ad Creations",
  description: "Articog is a Creative AI Production Company. We produce AI brand films, commercials, ad creations, UGC, AI social content, and audio ads for growth-stage brands. Brief to delivery in days, not weeks.",
};
import { siteContent } from "@/lib/content";
import {
  Hero,
  Problems,
  Pipeline,
  Capabilities,
  Comparison,
  CaseStudies,
  FinalCTA,
  
} from "@/components/sections";

// ─── Metadata ────────────────────────────────────────────────────────────────

// ─── Structured data ─────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://articog.com/#service",
  name: "AI Creative Production",
  provider: {
    "@type": "Organization",
    "@id": "https://articog.com/#organization",
  },
  serviceType: "Creative Production",
  description:
    "Articog produces brand films, commercials, AI ad creations, social content, audio ads, and AI visual content for growth-stage brands.",
  areaServed: { "@type": "Place", name: "Worldwide" },
  audience: {
    "@type": "Audience",
    audienceType:
      "Marketing Teams, Growth Teams, Brand Managers, DTC Brands, SaaS Companies, E-commerce Brands",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Brand Films" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Brand Storytelling" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Commercials and Advertisements" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Posters and Visual Content" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Audio Ads" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI UGC and Social Content" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "ML Ad Creatives" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Creative Automations" },
      },
    ],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://articog.com/#webpage",
  url: "https://articog.com",
  name: "Articog | AI Creative Production Studio",
  isPartOf: { "@id": "https://articog.com/#website" },
  about: { "@id": "https://articog.com/#organization" },
  description:
    "AI creative production for growth-stage brands. Brand films, commercials, ad creations, and social content produced in days.",
  inLanguage: "en-US",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { caseStudies, ...homepage } = siteContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Hero content={homepage.hero} stats={homepage.proofStats} />
      <Problems problems={homepage.problems} />
      <Capabilities capabilities={homepage.capabilities} />
      
      <Pipeline steps={homepage.pipeline} />
      <Comparison rows={homepage.comparison} />
      <CaseStudies caseStudies={caseStudies} />
      <FinalCTA content={homepage.cta} />
    </>
  );
}
