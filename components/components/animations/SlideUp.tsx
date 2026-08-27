// Static passthrough wrappers — framer-motion removed in v3.0.
// These exist for import compatibility; all animation is CSS-based.

import type { ReactNode, CSSProperties } from "react";

interface SlideUpProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export function SlideUp({ children, className, style }: SlideUpProps) {
  return <div className={className} style={style}>{children}</div>;
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  staggerDelay?: number;
  once?: boolean;
}

export function Stagger({ children, className, style }: StaggerProps) {
  return <div className={className} style={style}>{children}</div>;
}

export const staggerChild = {};
