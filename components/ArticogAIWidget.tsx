"use client";

import * as React from "react";

export function ArticogAIWidget() {
  React.useEffect(() => {
    if (!document.querySelector('script[src*="convai-widget-embed"]')) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return React.createElement("elevenlabs-convai", {
    "agent-id": "agent_8101m1h5h99kenbvg2jdecqvzthq",
  });
}