import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://articog.com/privacy/request" },
};

export default function PrivacyRequestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}