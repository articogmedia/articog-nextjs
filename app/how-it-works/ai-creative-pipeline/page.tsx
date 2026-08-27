import Link from "next/link";

export default function AICreativePipelinePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-widest text-white/40">How It Works</p>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">AI Creative Pipeline</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/60">
          Articog combines creative direction, AI-assisted generation, production, review, and delivery into one streamlined workflow.
        </p>
        <div className="mt-12">
          <Link href="/how-it-works" className="text-white underline">
            Back to How It Works →
          </Link>
        </div>
      </div>
    </main>
  );
}
