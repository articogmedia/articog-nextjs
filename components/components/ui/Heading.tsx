import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "p";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  children: React.ReactNode;
  as?: HeadingTag;
  size?: "hero" | "section" | "card" | "label";
  className?: string;
  gradient?: boolean;
  id?: string;
}

const sizeMap: Record<NonNullable<HeadingProps["size"]>, string> = {
  hero: "font-display text-hero font-semibold tracking-tight",
  section: "font-display text-section font-semibold tracking-tight",
  card: "font-display text-xl font-semibold tracking-tight",
  label: "font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/35",
};

export function Heading({
  children,
  as: Tag = "h2",
  size = "section",
  className,
  gradient = false,
  ...props
}: HeadingProps) {
  return (
    <Tag
      {...props}
      className={cn(
        sizeMap[size],
        gradient && "text-gradient-accent",
        className
      )}
    >
      {children}
    </Tag>
  );
}
