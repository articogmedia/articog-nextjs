"use client";
import { Container, Section, Heading } from "@/components/ui";
import type { PipelineStep } from "@/types";

interface PipelineProps {
  steps: PipelineStep[];
}

export function Pipeline({ steps }: PipelineProps) {
  return (
    <Section id="pipeline" className="relative overflow-hidden p-0">
      {/* Background Video for whole section */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          playsInline
          loop
          controls={false}
          preload="auto"
          className="h-full w-full object-cover"
          poster="https://res.cloudinary.com/hmy5ctzy/video/upload/q_auto:best,f_auto,so_0,w_1920/v1786976270/web_1_1_1_1.jpg"
          onLoadedMetadata={(e) => {
            e.currentTarget.muted = true;
            e.currentTarget.play().catch(() => {
              // Fallback
              const playVideo = () => {
                e.currentTarget.play();
                window.removeEventListener('touchstart', playVideo);
              };
              window.addEventListener('touchstart', playVideo);
            });
          }}
        >
          <source
            src="https://res.cloudinary.com/hmy5ctzy/video/upload/v1786976270/web_1_1_1_1.mp4"
            type="video/mp4"
          />
        </video>
        {/* Subtle base overlay */}
        <div className="absolute inset-0 bg-black/15 z-10" />
      </div>

      <Container className="relative z-20 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-lg mb-16">
          <Heading as="h2" size="label" className="mb-4" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>How It Works</Heading>
          <Heading as="h2" size="section" className="mb-0" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>
            From brief to live in days.
          </Heading>
        </div>

        {/* Steps */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-2xl border border-white/[0.12] bg-transparent backdrop-blur-[2px]"
        >
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative flex flex-col gap-5 p-7 group cursor-default hover:bg-white/[0.04] transition-colors duration-200 border-b last:border-b-0 sm:border-b-0 sm:border-r last:sm:border-r-0 lg:border-r lg:last:border-r-0"
            >
              {/* Hover accent top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "#6633EE" }}
              />

              {/* Number + tag */}
              <div className="flex items-center justify-between">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full font-display text-sm font-bold"
                  style={{
                    border: "1px solid rgba(255,255,255,0.20)",
                    color: "rgba(255,255,255,0.95)",
                    textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                  }}
                >
                  {step.step}
                </div>
                {step.tag && (
                  <span
                    className="font-sans text-[10px] font-bold uppercase tracking-wider"
                    style={{ 
                      color: "rgba(255,255,255,0.85)",
                      textShadow: "0 2px 8px rgba(0,0,0,0.9)"
                    }}
                  >
                    {step.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="space-y-2 flex-1">
                <h3 className="font-display text-base font-bold text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>
                  {step.title}
                </h3>
                <p
                  className="font-sans text-sm font-medium leading-relaxed"
                  style={{ 
                    color: "#FFFFFF",
                    textShadow: "0 2px 8px rgba(0,0,0,0.9)"
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
