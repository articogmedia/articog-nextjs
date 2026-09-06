import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://articog.com/newsletter" },
};

export default function NewsletterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}