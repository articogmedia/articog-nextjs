import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Articog",
  description: "Explore Articog project-based, monthly subscription, pilot, and enterprise creative production options.",
  alternates: { canonical: "https://articog.com/pricing" },
};

export default function PricingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}