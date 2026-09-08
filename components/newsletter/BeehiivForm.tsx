"use client";

import { useEffect, useRef } from "react";

const BEEHIIV_SCRIPT_SRC = "https://subscribe-forms.beehiiv.com/v3/loader.js";
const BEEHIIV_FORM_ID = "69e2dfbd-7dbf-45b6-ac64-b1642145f9fe";

export function BeehiivForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector(`script[src="${BEEHIIV_SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = BEEHIIV_SCRIPT_SRC;
    script.dataset.beehiivForm = BEEHIIV_FORM_ID;
    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return <div ref={containerRef} aria-label="Beehiiv newsletter signup" />;
}
