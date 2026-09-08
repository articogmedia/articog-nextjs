import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Script from "next/script";

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Newsletter</h1>
            <p className="text-zinc-400 text-xl mb-12 leading-relaxed">
              Stay updated on the latest AI creative production insights, industry benchmarks, and Articog product updates.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <div className="space-y-6 bg-zinc-900/30 p-8 rounded-3xl border border-zinc-800">
                <Script
                  async
                  src="https://subscribe-forms.beehiiv.com/v3/loader.js"
                  data-beehiiv-form="69e2dfbd-7dbf-45b6-ac64-b1642145f9fe"
                  strategy="afterInteractive"
                />
              </div>
            </Section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
