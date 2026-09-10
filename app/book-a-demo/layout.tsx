import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo | Articog | AI Creative Production",
  description: "Book a demo with Articog and see how our AI creative pipeline turns a brief into finished ad creative, video, and social content in days.",
  alternates: { canonical: "https://articog.com/book-a-demo" },
};

export default function BookADemoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}