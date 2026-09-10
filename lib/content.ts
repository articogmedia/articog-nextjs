/**
 * Static site content single source of truth for all page data.
 * Import directly into pages and components.
 */
import type { SiteContent } from "@/types";

export const siteContent: SiteContent = {
  hero: {
    eyebrow: "AI Creative Production",
    headline: "Your creative engine, accelerated by AI.",
    ctaLabel: "Book a Demo",
    ctaHref: "/book-a-demo",
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
        "Content demand scales, but headcount doesn't. Campaigns slip and assets get recycled.",
    },
    {
      number: "02",
      title: "Agencies move too slowly",
      description:
        "Four-week turnarounds and retainers that don't flex with demand.",
    },
    {
      number: "03",
      title: "Spend scales. Creative doesn't.",
      description:
        "Spend grows, but creative volume stays flat and audiences saturate.",
    },
  ],

  pipeline: [
    {
      step: 1,
      title: "Brief",
      description:
        "Share your goal and references. We set direction first.",
      tag: "Day 1",
    },
    {
      step: 2,
      title: "Generate",
      description:
        "Our brand-calibrated AI pipeline produces first outputs within hours.",
      tag: "Day 1 2",
    },
    {
      step: 3,
      title: "Refine",
      description:
        "Review a curated selection. We refine it through fast feedback cycles.",
      tag: "Day 2 3",
    },
    {
      step: 4,
      title: "Deliver",
      description:
        "Receive production-ready assets, versioned for every platform.",
      tag: "Day 3 4",
    },
  ],

  capabilities: [
    {
      title: "Brand Films",
      useCase: "Brand identity, product launches, investor reels",
      outcome: "Brand films in days, at a fraction of traditional production cost",
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

  testimonials: [],

  cta: {
    headline: "Your next campaign.\nDelivered in days.",
    ctaLabel: "Book a Demo",
    ctaHref: "/book-a-demo",
  },
};
