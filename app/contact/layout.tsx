import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Articog — AI Creative Production Company",
  description: "Get in touch with Articog to discuss AI video production, ad creative, or a custom creative solution for your brand.",
  alternates: { canonical: "https://articog.com/contact" },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}