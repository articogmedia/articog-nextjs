"use client";

import Script from "next/script";

const BREEZY_SCRIPT_URL = "https://articog.breezy.hr/embed/js?inline=true&group_by=none";

export function BreezyOpenings() {
  return (
    <div className="min-w-0 overflow-x-auto">
      <div id="bzOpeningsContainer" className="min-w-0" />
      <Script id="breezy-openings-script" src={BREEZY_SCRIPT_URL} strategy="afterInteractive" />
    </div>
  );
}