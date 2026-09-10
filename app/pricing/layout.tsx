import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Enquiries | Articog",
  description: "Start a conversation about your creative production goals, timeline, and next project with Articog.",
  alternates: { canonical: "https://articog.com/pricing" },
};

export default function PricingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}