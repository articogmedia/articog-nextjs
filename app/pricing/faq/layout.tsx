import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing FAQ | Articog",
  description: "Clear answers to common questions about Articog pricing, engagements, and billing.",
  alternates: { canonical: "https://articog.com/pricing/faq" },
};

export default function PricingFAQLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
