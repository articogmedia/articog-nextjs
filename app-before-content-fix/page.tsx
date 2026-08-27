import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title:
    "Articog - Creative AI Production Company | AI Brand Films & Ad Creations",
  description:
    "Articog is a Creative AI Production Company. We produce AI brand films, commercials, ad creations, UGC, AI social content, and audio ads for growth-stage brands. Brief to delivery in days, not weeks.",
  openGraph: {
    title:
      "Articog - Creative AI Production Company | AI Brand Films & Ad Creations",
    description:
      "Articog is a Creative AI Production Company. We produce AI brand films, commercials, ad creations, UGC, AI social content, and audio ads for growth-stage brands.",
    type: "website",
    url: "https://articog.com/",
    images: ["https://articog.com/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://articog.com/og-image.png"],
  },
  alternates: {
    canonical: "https://articog.com/",
  },
};

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
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://articog.com/#webpage",
  url: "https://articog.com",
  name: "Articog - AI Creative Production Studio",
  isPartOf: {
    "@id": "https://articog.com/#website",
  },
  about: {
    "@id": "https://articog.com/#organization",
  },
  description:
    "AI creative production for growth-stage brands. Brand films, commercials, ad creations, and social content produced in days.",
  inLanguage: "en-US",
};

export default function HomePage() {
  const { caseStudies, ...homepage } = siteContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
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