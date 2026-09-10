import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { BeehiivForm } from "@/components/newsletter/BeehiivForm";

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <div className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h1 className="type-h1 mb-6 text-white">Newsletter</h1>
            <p className="text-zinc-400 text-xl mb-12 leading-relaxed">
              Stay updated on the latest AI creative production insights, industry benchmarks, and Articog product updates.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <div className="space-y-6 bg-zinc-900/30 p-8 rounded-3xl border border-zinc-800">
                <BeehiivForm />
              </div>
            </Section>
          </div>
        </Container>
      </div>
    </div>
  );
}
