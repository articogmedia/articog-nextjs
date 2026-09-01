"use client";

import * as React from "react";
import Script from "next/script";

export function ArticogAIWidget() {
  return (
    <>
      {React.createElement("elevenlabs-convai", {
        "agent-id": "agent_7701m1ejhm22f3brgyngkz4a31qr",
      })}
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
        async
      />
    </>
  );
}
