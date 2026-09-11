import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <div className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h1 className="type-h1 mb-6 text-white">Newsletter</h1>
            <p className="text-zinc-400 type-h3 mb-12 leading-relaxed">
              Stay updated on the latest AI creative production insights, industry benchmarks, and Articog product updates.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 text-center">
                <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-white/45">
                  Newsletter
                </p>
                <p className="mt-4 font-display text-3xl md:text-4xl text-white">
                  Coming soon
                </p>
              </div>
            </Section>
          </div>
        </Container>
      </div>
    </div>
  );
}
