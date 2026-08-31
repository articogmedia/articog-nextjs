"use client";

import { useState } from "react";
import { Link } from "@/components/ui/Link";
import { Container, Section, Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/articog-media-01/articog-demo-call";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string;
        prefill?: {
          name?: string;
          firstName?: string;
          lastName?: string;
          email?: string;
        };
      }) => void;
    };
  }
}

export default function BookADemoPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const firstName = (formData.get("firstName") as string) || "";
    const lastName = (formData.get("lastName") as string) || "";
    const email = (formData.get("email") as string) || "";

    setTimeout(() => {
      setIsLoading(false);

      if (window.Calendly) {
        // Opens Calendly's popup pre-filled with what we already collected,
        // so the visitor isn't asked to re-type name/email.
        window.Calendly.initPopupWidget({
          url: CALENDLY_URL,
          prefill: {
            firstName,
            lastName,
            name: `${firstName} ${lastName}`.trim(),
            email,
          },
        });
      } else {
        // Fallback if the widget script hasn't loaded yet for some reason
        window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      }
    }, 400);
  };

  return (
    <Section
      size="lg"
      className="pt-32 md:pt-40 bg-black min-h-screen"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              BOOK A DEMO
            </span>

            <h1
              className="font-display font-semibold text-white mb-6"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Book a Demo
            </h1>

            <p
              className="mx-auto max-w-lg font-sans text-base md:text-lg"
              style={{
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.65,
              }}
            >
              Tell us about your brand and creative needs. We'll get back to
              you within one business day.
            </p>
          </div>

          {/* Form */}
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
            >
              {/* First Name + Last Name */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2.5">
                  <label
                    htmlFor="firstName"
                    className="font-sans text-[13px] font-medium text-white/70"
                  >
                    First Name <span className="text-accent">*</span>
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Jane"
                    className="h-12 w-full rounded-lg px-4 font-sans text-sm outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "white",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <label
                    htmlFor="lastName"
                    className="font-sans text-[13px] font-medium text-white/70"
                  >
                    Last Name <span className="text-accent">*</span>
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Doe"
                    className="h-12 w-full rounded-lg px-4 font-sans text-sm outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "white",
                    }}
                  />
                </div>
              </div>

              {/* Work Email + Company Name */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2.5">
                  <label
                    htmlFor="email"
                    className="font-sans text-[13px] font-medium text-white/70"
                  >
                    Work Email <span className="text-accent">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="h-12 w-full rounded-lg px-4 font-sans text-sm outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "white",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <label
                    htmlFor="company"
                    className="font-sans text-[13px] font-medium text-white/70"
                  >
                    Company Name <span className="text-accent">*</span>
                  </label>

                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Acme Corp"
                    className="h-12 w-full rounded-lg px-4 font-sans text-sm outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "white",
                    }}
                  />
                </div>
              </div>

              {/* Your Role */}
              <div className="flex flex-col gap-2.5">
                <label
                  htmlFor="role"
                  className="font-sans text-[13px] font-medium text-white/70"
                >
                  Your Role
                </label>

                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="Creative Director"
                  className="h-12 w-full rounded-lg px-4 font-sans text-sm outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "white",
                  }}
                />
              </div>

              {/* Service Interest */}
              <div className="flex flex-col gap-4">
                <label className="font-sans text-[13px] font-medium text-white/70">
                  Service Interest
                </label>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {[
                    "Brand Film",
                    "Commercial/Ad",
                    "Social Content",
                    "Product Visuals",
                    "Audio Ad",
                    "Other",
                  ].map((option) => (
                    <label
                      key={option}
                      className="group flex cursor-pointer items-center gap-3"
                    >
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          name="service-interest"
                          value={option}
                          className="peer h-5 w-5 appearance-none rounded border border-white/10 bg-white/5 transition-all duration-200 checked:border-accent checked:bg-accent"
                        />

                        <div className="pointer-events-none absolute text-white opacity-0 peer-checked:opacity-100">
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 4L3.5 6.5L9 1"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <span className="font-sans text-sm text-white/60 transition-colors group-hover:text-white">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget + Timeline */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2.5">
                  <label
                    htmlFor="budget"
                    className="font-sans text-[13px] font-medium text-white/70"
                  >
                    Budget Range
                  </label>

                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="h-12 w-full appearance-none rounded-lg px-4 font-sans text-sm outline-none transition-all duration-200"
                      style={{
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "white",
                        backgroundColor: "#0A0A0A",
                      }}
                    >
                      <option value="" disabled>
                        Select budget
                      </option>
                      <option value="Under $5k">Under $5k</option>
                      <option value="$5k $15k">$5k $15k</option>
                      <option value="$15k $50k">$15k $50k</option>
                      <option value="$50k+">$50k+</option>
                    </select>

                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                      <ChevronDownIcon />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label
                    htmlFor="timeline"
                    className="font-sans text-[13px] font-medium text-white/70"
                  >
                    Timeline
                  </label>

                  <div className="relative">
                    <select
                      id="timeline"
                      name="timeline"
                      defaultValue=""
                      className="h-12 w-full appearance-none rounded-lg px-4 font-sans text-sm outline-none transition-all duration-200"
                      style={{
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "white",
                        backgroundColor: "#0A0A0A",
                      }}
                    >
                      <option value="" disabled>
                        Select timeline
                      </option>
                      <option value="Immediately">Immediately</option>
                      <option value="Within 1 month">
                        Within 1 month
                      </option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="Planning for future">
                        Planning for future
                      </option>
                    </select>

                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                      <ChevronDownIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="xl"
                className="mt-4 w-full"
                disabled={isLoading}
              >
                {isLoading ? "Scheduling..." : "Schedule a Call"}

                {!isLoading && <ArrowRight size={16} />}
              </Button>

              {/* Privacy Note */}
              <p
                className="text-center font-sans text-[12px] leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                By submitting, you agree to be contacted about your inquiry.
                See our{" "}
                <Link
                  href="/privacy"
                  className="text-white/50 underline underline-offset-2 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}