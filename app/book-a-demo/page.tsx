"use client";

import { useState } from "react";
import { Link } from "@/components/ui/Link";
import { Container, Section, Button, Input, Checkbox, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/articog-media-01/articog-demo-call";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string;
        prefill?: {
          name?: string;
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
    const name = `${firstName} ${lastName}`.trim();
    const fallbackCalendlyUrl = `${CALENDLY_URL}?${new URLSearchParams({
      name,
      email,
    }).toString()}`;

    setTimeout(() => {
      setIsLoading(false);

      if (window.Calendly) {
        // Opens Calendly's popup pre-filled with what we already collected,
        // so the visitor isn't asked to re-type name/email.
        window.Calendly.initPopupWidget({
          url: CALENDLY_URL,
          prefill: {
            name,
            email,
          },
        });
      } else {
        // Fallback if the widget script hasn't loaded yet for some reason
        window.open(fallbackCalendlyUrl, "_blank", "noopener,noreferrer");
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
              className="mb-5 inline-block type-label uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              BOOK A DEMO
            </span>

            <h1 className="type-h1 mb-6 text-white">
              Book a Demo
            </h1>

            <p
              className="mx-auto max-w-lg type-body md:text-lg"
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
                    className="type-nav text-white/70"
                  >
                    First Name <span className="text-accent">*</span>
                  </label>

                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Jane"
                    className="h-12 rounded-lg px-4"
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
                    className="type-nav text-white/70"
                  >
                    Last Name <span className="text-accent">*</span>
                  </label>

                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Doe"
                    className="h-12 rounded-lg px-4"
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
                    className="type-nav text-white/70"
                  >
                    Work Email <span className="text-accent">*</span>
                  </label>

                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="h-12 rounded-lg px-4"
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
                    className="type-nav text-white/70"
                  >
                    Company Name <span className="text-accent">*</span>
                  </label>

                  <Input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Acme Corp"
                    className="h-12 rounded-lg px-4"
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
                  className="type-nav text-white/70"
                >
                  Your Role
                </label>

                <Input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="Creative Director"
                  className="h-12 rounded-lg px-4"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "white",
                  }}
                />
              </div>

              {/* Service Interest */}
              <div className="flex flex-col gap-4">
                <label className="type-nav text-white/70">
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
                        <Checkbox
                          name="service-interest"
                          value={option}
                          className="h-5 w-5 rounded border-white/10 bg-white/5"
                        />
                      </div>

                      <span className="type-small text-white/60 transition-colors group-hover:text-white">
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
                    className="type-nav text-white/70"
                  >
                    Budget Range
                  </label>

                  <Select name="budget" defaultValue="">
                    <SelectTrigger id="budget" className="h-12 rounded-lg px-4"><SelectValue placeholder="Select budget" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Under $5k">Under $5k</SelectItem>
                      <SelectItem value="$5k $15k">$5k $15k</SelectItem>
                      <SelectItem value="$15k $50k">$15k $50k</SelectItem>
                      <SelectItem value="$50k+">$50k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label
                    htmlFor="timeline"
                    className="type-nav text-white/70"
                  >
                    Timeline
                  </label>

                  <Select name="timeline" defaultValue="">
                    <SelectTrigger id="timeline" className="h-12 rounded-lg px-4"><SelectValue placeholder="Select timeline" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Immediately">Immediately</SelectItem>
                      <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                      <SelectItem value="1-3 months">1-3 months</SelectItem>
                      <SelectItem value="Planning for future">Planning for future</SelectItem>
                    </SelectContent>
                  </Select>
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
                  href="/privacy-policy"
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