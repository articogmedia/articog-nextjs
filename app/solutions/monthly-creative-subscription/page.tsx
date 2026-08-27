import Link from "next/link";

export default function MonthlyCreativeSubscriptionPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-widest text-white/40">Solutions</p>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">Monthly Creative Subscription</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/60">
          A recurring creative production model for brands that need a consistent flow of high-quality content.
        </p>
        <div className="mt-12">
          <Link href="/pricing/monthly-plans" className="text-white underline">
            View Monthly Plans →
          </Link>
        </div>
      </div>
    </main>
  );
}
