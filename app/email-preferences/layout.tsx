import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://articog.com/email-preferences" },
};

export default function EmailPreferencesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}