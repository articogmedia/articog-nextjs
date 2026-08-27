// Static passthrough wrapper — framer-motion removed in v3.0.
// Exists for import compatibility; all animation is CSS-based.

import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function FadeIn({ children, className }: FadeInProps) {
  return <div className={className}>{children}</div>;
}
