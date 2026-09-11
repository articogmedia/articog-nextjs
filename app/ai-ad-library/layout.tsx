import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Ad Library | Articog",
  description: "A curated collection of AI native creative examples across industries and formats.",
  alternates: { canonical: "https://articog.com/ai-ad-library" },
};

export default function AILibraryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
