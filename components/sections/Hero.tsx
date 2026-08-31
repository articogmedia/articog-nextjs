"use client";
import type { HeroContent, ProofStat } from "@/types";

interface HeroProps {
  content: HeroContent;
  stats: ProofStat[];
}

export function Hero({ content }: HeroProps) {
  const lines = content.headline.split("\n");

  return (
    <section
      className="relative min-h-svh flex flex-col overflow-hidden"
      style={{
        background: "#000000",
      }}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          playsInline
          loop
          controls={false}
          preload="auto"
          className="h-full w-full object-cover opacity-60"
          poster="https://res.cloudinary.com/hmy5ctzy/video/upload/q_auto:best,f_auto,so_0,w_1920/v1786961383/Web_3.jpg"
          onLoadedMetadata={(e) => {
            e.currentTarget.muted = true;
            e.currentTarget.play().catch(() => {
              console.log("Autoplay prevented, retrying...");
              // Fallback for some mobile browsers
              const playVideo = () => {
                e.currentTarget.play();
                window.removeEventListener('touchstart', playVideo);
              };
              window.addEventListener('touchstart', playVideo);
            });
          }}
        >
          <source
            src="https://res.cloudinary.com/hmy5ctzy/video/upload/q_auto:best,f_auto/v1786961383/Web_3.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/hmy5ctzy/video/upload/q_auto:best,f_auto,w_960/v1786961383/Web_3.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div 
          className="absolute inset-0" 
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)",
            backgroundColor: "transparent"
          }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Main Content Area - Centered in remaining space */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <p className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-6 sm:mb-8">
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
              <span
                key={i}
                className="block"
              >
                {line}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
}
