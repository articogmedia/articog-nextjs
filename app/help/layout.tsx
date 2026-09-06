import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://articog.com/help" },
};

export default function HelpLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}