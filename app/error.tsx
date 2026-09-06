"use client";

import { Link } from "@/components/ui/Link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-black px-6">
      <div className="max-w-2xl text-center">
        <p className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
          ERROR
        </p>
        <h1 className="mb-5 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Something went wrong. Please try again.
        </h1>
        <p className="mb-10 font-sans text-base leading-relaxed text-white/50">
          We could not load this page right now.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-8 font-sans text-sm font-semibold text-black transition-all hover:bg-white/90 active:scale-95 sm:w-auto"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-sans text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95 sm:w-auto"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}