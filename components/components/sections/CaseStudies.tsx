"use client";
import { Container, Section, Heading } from "@/components/ui";
import type { CaseStudy } from "@/types";

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export function CaseStudies({ caseStudies }: CaseStudiesProps) {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          playsInline
          loop
          controls={false}
          preload="auto"
          className="h-full w-full object-cover"
          poster="https://res.cloudinary.com/hmy5ctzy/video/upload/q_auto:best,f_auto,so_0,w_1920/v1786974706/Web_2.jpg"
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
            src="https://res.cloudinary.com/hmy5ctzy/video/upload/q_auto:best,f_auto/v1786974706/Web_2.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/hmy5ctzy/video/upload/q_auto:best,f_auto,w_960/v1786974706/Web_2.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
        </video>
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        />
      </div>
      <Container className="relative z-20">
        <div className="max-w-lg mb-16">
          <Heading as="h2" size="label" className="mb-4">Proof</Heading>
          <Heading as="h2" size="section" className="mb-0">
            Real outcomes. No composites.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <article
              key={cs.client}
              className="flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/[0.14] transition-colors duration-200"
            >
              {/* Metric */}
              <div className="px-6 pt-6 pb-5 border-b border-white/[0.08]">
                <p
                  className="font-display font-semibold text-white"
                  style={{ fontSize: "2.8rem", lineHeight: 1, letterSpacing: "-0.04em" }}
                >
                  {cs.metric}
                </p>
                <p className="mt-1 font-sans text-xs uppercase tracking-wider text-white/35">
                  {cs.metricLabel}
                </p>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6 gap-5">
                <div className="flex-1">
                  <h3 className="font-display text-sm font-semibold text-white leading-snug">
                    {cs.outcome}
                  </h3>
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-white/[0.08]">
                  <div>
                    <p className="font-display text-sm font-semibold text-white/65">
                      {cs.client}
                    </p>
                    <p className="font-sans text-xs text-white/35">{cs.industry}</p>
                  </div>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {cs.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-[10px] px-2 py-0.5 rounded-full border border-white/[0.08] text-white/35"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
