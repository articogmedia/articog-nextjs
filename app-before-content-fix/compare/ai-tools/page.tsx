import Link from "next/link";

export default function AIToolsComparisonPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-widest text-white/40">Compare</p>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">AI Tools vs Articog</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/60">
          Compare AI-assisted creative production with a managed creative production workflow built for brands and agencies.
        </p>
        <div className="mt-12">
          <Link href="/compare/traditional-production" className="text-white underline">
            Compare with traditional production →
          </Link>
        </div>
      </div>
    </main>
  );
}
