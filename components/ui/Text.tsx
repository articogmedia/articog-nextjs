import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  as?: "p" | "span" | "div" | "li";
  size?: "sm" | "base" | "lg";
  muted?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "text-sm leading-relaxed",
  base: "text-base leading-relaxed",
  lg: "text-lg leading-relaxed",
};

export function Text({
  children,
  as: Tag = "p",
  size = "base",
  muted = false,
  className,
}: TextProps) {
  return (
    <Tag
      className={cn(
        "font-sans",
        sizeMap[size],
        muted ? "text-muted" : "text-foreground/80",
        className
      )}
    >
      {children}
    </Tag>
  );
}
