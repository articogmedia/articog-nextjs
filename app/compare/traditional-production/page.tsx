import Link from "next/link";

export default function TraditionalProductionComparisonPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-widest text-white/40">Compare</p>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">Traditional Production vs Articog</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/60">
          Explore the differences between traditional creative production workflows and AI-powered production through Articog.
        </p>
        <div className="mt-12">
          <Link href="/pricing" className="text-white underline">
            View pricing →
          </Link>
        </div>
      </div>
    </main>
  );
}
