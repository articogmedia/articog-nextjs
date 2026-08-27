import type { AnchorHTMLAttributes } from "react";
import NextLink from "next/link";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, ...props }: LinkProps) {
  const isExternal = /^(https?:|mailto:|tel:|#)/.test(href);

  if (isExternal) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}