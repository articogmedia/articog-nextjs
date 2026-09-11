"use client";

import { useEffect, useRef } from "react";

const BREEZY_SCRIPT_URL = "https://articog.breezy.hr/embed/js?inline=true&group_by=none";

export function BreezyOpenings() {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) {
      return;
    }

    const container = document.getElementById("bzOpeningsContainer");
    if (!container) {
      return;
    }

    const existingScript = document.querySelector(
      `script[src="${BREEZY_SCRIPT_URL}"]`,
    );

    if (existingScript) {
      scriptLoadedRef.current = true;
      return;
    }

    const script = document.createElement("script");
    script.src = BREEZY_SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.id = "breezy-openings-script";
    script.setAttribute("data-breezy-openings", "true");

    document.body.appendChild(script);
    scriptLoadedRef.current = true;
  }, []);

  return (
    <div className="min-w-0 overflow-x-auto">
      <div id="bzOpeningsContainer" className="min-w-0" />
    </div>
  );
}