import { Container, Section } from "@/components/ui";
import type { Testimonial } from "@/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <Section size="sm">
      <Container>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="flex flex-col gap-5 rounded-2xl p-7 border border-white/[0.08] hover:border-white/[0.13] transition-colors duration-200"
            >
              <svg width="20" height="16" viewBox="0 0 24 18" fill="none" aria-hidden>
                <path
                  d="M0 18V10.8C0 7.8 0.8 5.26667 2.4 3.2C4.05333 1.06667 6.37333 0 9.36 0L10.32 1.44C8.29333 1.97333 6.69333 3.06667 5.52 4.72C4.4 6.37333 3.84 8.13333 3.84 10H8.64V18H0ZM13.68 18V10.8C13.68 7.8 14.48 5.26667 16.08 3.2C17.7333 1.06667 20.0533 0 23.04 0L24 1.44C21.9733 1.97333 20.3733 3.06667 19.2 4.72C18.08 6.37333 17.52 8.13333 17.52 10H22.32V18H13.68Z"
                  fill="rgba(102,51,238,0.35)"
                />
              </svg>

              <blockquote className="flex-1 font-sans text-sm leading-relaxed text-white/65">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold"
                  style={{
                    background: "rgba(102,51,238,0.12)",
                    border: "1px solid rgba(102,51,238,0.20)",
                    color: "#6633EE",
                  }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-white/80">{t.role}</p>
                  <p className="font-sans text-xs text-white/35">{t.company}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
