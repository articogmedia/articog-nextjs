"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { trackCTAClick, trackPageView } from "@/lib/analytics";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId) return;

    trackPageView(pathname);

    const handleCtaClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      const destination = link?.getAttribute("href");
      if (destination !== "/book-a-demo" && destination !== "/contact") return;

      trackCTAClick(
        link?.textContent?.trim() || destination,
        destination
      );
    };

    document.addEventListener("click", handleCtaClick);
    return () => document.removeEventListener("click", handleCtaClick);
  }, [pathname]);

  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${measurementId}', { send_page_view: false });`}
      </Script>
    </>
  );
}