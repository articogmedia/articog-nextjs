/**
 * Static site content single source of truth for all page data.
 * Import directly into pages and components.
 */
import type { SiteContent } from "@/types";

export const siteContent: SiteContent = {
  hero: {
    eyebrow: "AI Creative Production",
    headline: "Your brand's creative engine.\nPowered by AI.",
    ctaLabel: "Book a Demo",
    ctaHref: "/contact",
    secondaryCtaLabel: "See How It Works",
    secondaryCtaHref: "/#pipeline",
  },

  proofStats: [
    { value: "24h", label: "Brief to first output" },
    { value: "10×", label: "Creative volume" },
    { value: "90%", label: "Cost Reduction" },
    { value: "72h", label: "Campaign delivery" },
  ],

  problems: [
    {
      number: "01",
      title: "Your creative team is the bottleneck",
      description:
        "Demand for content scales. Headcount doesn't. Campaigns slip, assets get recycled, and windows close.",
    },
    {
      number: "02",
      title: "Agencies move too slowly",
      description:
        "Four-week turnarounds on briefs that needed to move yesterday. Retainers that don't flex with volume.",
    },
    {
      number: "03",
      title: "Spend scales. Creative doesn't.",
      description:
        "Ad spend increases. Creative variants stay flat. Audiences saturate and performance degrades.",
    },
    {
      number: "04",
      title: "Quality drops at volume",
      description:
        "Freelancers drift. Brand guidelines blur. Quality risk compounds with every asset at scale.",
    },
  ],

  pipeline: [
    {
      step: 1,
      title: "Brief",
      description:
        "Share your goal and references. We map creative direction before generating anything.",
      tag: "Day 1",
    },
    {
      step: 2,
      title: "Generate",
      description:
        "Our AI pipeline executes across models and iteration loops, calibrated to your brand. First outputs within hours.",
      tag: "Day 1–2",
    },
    {
      step: 3,
      title: "Refine",
      description:
        "Review a curated selection. We iterate on your feedback. Fast cycles, no overhead.",
      tag: "Day 2–3",
    },
    {
      step: 4,
      title: "Deliver",
      description:
        "Production-ready assets, versioned and platform-sized. One campaign or an ongoing content engine.",
      tag: "Day 3–4",
    },
  ],

  capabilities: [
    {
      title: "Brand Films",
      useCase: "Brand identity, product launches, investor reels",
      outcome: "Story-led films in days, at a fraction of traditional production cost",
      icon: "film",
    },
    {
      title: "Brand Storytelling",
      useCase: "Origin stories, mission narratives, documentary-style content",
      outcome: "Consistent brand voice across every format and channel",
      icon: "book-open",
    },
    {
      title: "Commercials and Advertisements",
      useCase: "TV, pre-roll, OOH, performance video ads",
      outcome: "Broadcast-ready ads delivered without a production crew",
      icon: "monitor",
    },
    {
      title: "AI Posters and Visual Content",
      useCase: "Campaign posters, banners, OOH creative, print-ready assets",
      outcome: "On-brand visuals at any scale with consistent brand fidelity",
      icon: "image",
    },
    {
      title: "Audio Ads",
      useCase: "Podcast, radio, streaming audio, brand voice production",
      outcome: "Studio-quality audio creative in hours, not weeks",
      icon: "mic",
    },
    {
      title: "AI UGC and Social Content",
      useCase: "Instagram, TikTok, YouTube Shorts, organic feeds",
      outcome: "Platform-native content that performs without influencer budgets",
      icon: "trending-up",
    },
    {
      title: "ML Ad Creations",
      useCase: "Paid social, display, search creative testing",
      outcome: "Hundreds of on-brand variants, continuously optimised on performance signals",
      icon: "zap",
    },
    {
      title: "Creative Automations",
      useCase: "Brief-to-delivery workflow integration",
      outcome: "80% fewer manual production steps. Plugs into your existing stack.",
      icon: "cpu",
    },
  ],

  comparison: [
    {
      attribute: "First output",
      agency: "2 to 4 weeks",
      inhouse: "1 to 2 weeks",
      articog: "Under 24 hours",
      articogHighlight: true,
    },
    {
      attribute: "Campaign delivery",
      agency: "4 to 8 weeks",
      inhouse: "3 to 6 weeks",
      articog: "3 to 5 days",
      articogHighlight: true,
    },
    {
      attribute: "Cost structure",
      agency: "High retainer plus overages",
      inhouse: "Fixed headcount plus tools",
      articog: "Scales with volume",
      articogHighlight: true,
    },
    {
      attribute: "Volume flexibility",
      agency: "Limited by team size",
      inhouse: "Capped by headcount",
      articog: "Unlimited",
      articogHighlight: true,
    },
    {
      attribute: "Brand consistency",
      agency: "Brief dependent",
      inhouse: "High",
      articog: "Systematic",
      articogHighlight: true,
    },
    {
      attribute: "Iteration speed",
      agency: "Slow revision cycles",
      inhouse: "Moderate",
      articog: "Hours, not days",
      articogHighlight: true,
    },
  ],

  caseStudies: [
    {
      client: "E-Commerce Brand",
      industry: "Retail",
      outcome: "10× creative output with zero headcount increase",
      metric: "10×",
      metricLabel: "Output volume",
      tags: ["AI Video", "Ad Creations"],
    },
    {
      client: "DTC Beauty Brand",
      industry: "Beauty",
      outcome: "Full campaign live 72 hours from brief",
      metric: "72h",
      metricLabel: "Brief to launch",
      tags: ["UGC", "Social Content"],
    },
    {
      client: "SaaS Startup",
      industry: "Technology",
      outcome: "3.2× ROAS lift on paid social in 60 days",
      metric: "3.2×",
      metricLabel: "ROAS improvement",
      tags: ["ML Creations", "Paid Social"],
    },
  ],

  testimonials: [
    {
      quote:
        "What used to take our agency a month now takes Articog a week. I can't tell the difference in output quality, and it's completely changed how we plan campaigns.",
      author: "Head of Growth",
      role: "Head of Growth",
      company: "E-Commerce Brand",
    },
    {
      quote:
        "We briefed them Monday morning. By Thursday we were live with a full creative suite across every channel. No agency could have moved that fast.",
      author: "Creative Director",
      role: "Creative Director",
      company: "DTC Brand",
    },
    {
      quote:
        "The volume was a step change, but what surprised us was the consistency. Every asset felt on-brand. That is rare at scale.",
      author: "VP Marketing",
      role: "VP Marketing",
      company: "SaaS Company",
    },
  ],

  cta: {
    headline: "Your next campaign.\nDelivered in days.",
    ctaLabel: "Book a Demo",
    ctaHref: "/contact",
  },
};
