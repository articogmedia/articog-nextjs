import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Preferences | Articog",
  description: "Manage which email updates you receive from Articog.",
  alternates: { canonical: "https://articog.com/email-preferences" },
};

export default function EmailPreferencesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}