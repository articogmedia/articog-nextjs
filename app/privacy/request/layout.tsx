import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit a Data Request | Articog",
  description: "Request access to, correction of, or deletion of your personal data held by Articog.",
  alternates: { canonical: "https://articog.com/privacy/request" },
};

export default function PrivacyRequestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}