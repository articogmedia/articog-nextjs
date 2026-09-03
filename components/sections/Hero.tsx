"use client";

import type { HeroContent, ProofStat } from "@/types";
import { useEffect, useRef } from "react";

interface HeroProps {
  content: HeroContent;
  stats: ProofStat[];
}

export function Hero({ content }: HeroProps) {
  const lines = content.headline.split("\n");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => undefined);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    playVideo();
    video.addEventListener("canplay", playVideo);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      video.removeEventListener("canplay", playVideo);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section
      className="relative flex min-h-svh flex-col overflow-hidden"
      style={{
        background: "#000000",
      }}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          controls={false}
          preload="auto"
          poster="https://res.cloudinary.com/hmy5ctzy/video/upload/q_auto:good,f_auto,w_1280,so_0/v1786961383/Web_3.jpg"
          className="h-full w-full object-cover opacity-60"
          aria-hidden="true"
        >
          <source
            src="https://res.cloudinary.com/hmy5ctzy/video/upload/f_mp4,vc_h264,q_auto:good,w_1280,dpr_auto,c_limit/v1786961383/Web_3.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)",
            backgroundColor: "transparent",
          }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <p className="mb-6 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40 sm:mb-8 sm:text-xs">
            {content.eyebrow}
          </p>

          {/* Headline */}
          <h1
            className="font-display font-semibold text-white"
            style={{
              fontSize: "var(--text-hero)",
              lineHeight: "var(--text-hero--line-height)",
              letterSpacing: "var(--text-hero--letter-spacing)",
            }}
          >
            {lines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
}