import NextLink from "next/link";
import type { ComponentProps } from "react";

type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  href?: string;
  to?: string;
};

export function Link({ href, to, children, ...props }: LinkProps) {
  const destination = href ?? to ?? "#";

  const isExternal =
    /^(https?:|mailto:|tel:|#)/.test(destination);

  if (isExternal) {
    return (
      <a href={destination} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={destination} {...props}>
      {children}
    </NextLink>
  );
}