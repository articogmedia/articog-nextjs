import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://articog.com/book-a-demo" },
};

export default function BookADemoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}