import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Accessibility Statement Articog",
  description: "Articog's accessibility statement, detailing our commitment to an inclusive digital experience.",
};
export default function AccessibilityPage() {
  redirect("/legal/accessibility");
}
