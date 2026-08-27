"use client";

import { useState } from "react";
import { Link } from "@/components/ui/Link";
import { Container, Section, Button } from "@/components/ui";
import { ArrowRight, Mail, Instagram, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 800);
  };

  if (submitted) {
    return (
      <Section size="lg" className="pt-32 md:pt-40 min-h-screen flex items-center bg-black">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h1
              className="font-display font-semibold text-white mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Message received.
            </h1>
            <p
              className="mx-auto mb-10 max-w-md font-sans text-base md:text-lg"
              style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}
            >
              Thank you for reaching out. We typically respond within 1 business day.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section size="lg" className="pt-32 md:pt-40 bg-black min-h-screen">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              CONTACT
            </span>
            <h1
              className="font-display font-semibold text-white mb-6"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Contact Us
            </h1>
            <p
              className="mx-auto max-w-lg font-sans text-base md:text-lg"
              style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}
            >
              Have a question or a project in mind? Drop us a line and let&apos;s talk about your next creative engine.
            </p>
          </div>

          <div
            className="rounded-2xl p-8 md:p-12 mb-16"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid gap-8 sm:grid-cols-2">
                {/* Name */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="name" className="font-sans text-[13px] font-medium text-white/70">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="h-12 w-full rounded-lg px-4 font-sans text-sm outline-none transition-all duration-200 bg-transparent"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "white",
                      backgroundColor: "rgba(255,255,255,0.04)",
                    }}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="email" className="font-sans text-[13px] font-medium text-white/70">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="h-12 w-full rounded-lg px-4 font-sans text-sm outline-none transition-all duration-200 bg-transparent"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "white",
                      backgroundColor: "rgba(255,255,255,0.04)",
                    }}
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="flex flex-col gap-2.5">
                <label htmlFor="inquiryType" className="font-sans text-[13px] font-medium text-white/70">
                  Inquiry Type <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    className="h-12 w-full appearance-none rounded-lg px-4 font-sans text-sm outline-none transition-all duration-200 bg-transparent"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "white",
                      backgroundColor: "#0A0A0A",
                    }}
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="Sales">Sales</option>
                    <option value="Partnerships">Partnerships</option>
                    <option value="Press">Press</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                    <ChevronDownIcon />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="font-sans text-[13px] font-medium text-white/70">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your inquiry..."
                  className="min-h-[160px] w-full resize-none rounded-lg p-4 font-sans text-sm outline-none transition-all duration-200 bg-transparent"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "white",
                    backgroundColor: "rgba(255,255,255,0.04)",
                  }}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="xl"
                className="w-full mt-4"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
                {!isLoading && <ArrowRight size={16} />}
              </Button>

              {/* Privacy Note */}
              <p className="text-center font-sans text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                By submitting, you agree to be contacted about your inquiry. See our{" "}
                <Link href="/privacy" className="text-white/50 underline underline-offset-2 hover:text-white transition-colors">
                  Privacy Policy
                </Link>.
              </p>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
            <div>
              <h3 className="font-display font-semibold text-white mb-4">Direct Contact</h3>
              <a 
                href="mailto:info@articog.com" 
                className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors mb-4 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm">info@articog.com</span>
              </a>
              <p className="font-sans text-xs text-white/30">
                We typically respond within 1 business day.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-white mb-6">Connect</h3>
              <div className="flex gap-6">
                <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
