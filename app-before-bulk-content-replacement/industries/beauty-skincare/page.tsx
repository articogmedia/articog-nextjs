import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function BeautySkincarePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Beauty & Skincare</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Capture elegance and efficacy with cinematic AI production tailored for high-end beauty brands.
            </p>
            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8">Featured Case Study</h2>
              <div className="bg-zinc-900/50 rounded-3xl border border-zinc-800 overflow-hidden">
                <div className="aspect-video bg-zinc-800"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">DTC Beauty Brand Scale</h3>
                  <p className="text-zinc-400 mb-6">How a leading skincare brand reduced creative production costs by 60% while increasing ROAS by 25% using Articog's AI creative pipeline.</p>
                  <Button asChild variant="outline" className="border-zinc-700 hover:bg-white hover:text-black">
                    <Link href="/customers/ecommerce-brand">Read Case Study</Link>
                  </Button>
                </div>
              </div>
            </Section>
            <Section className="py-20 text-center">
              <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                <Link href="/book-a-demo">Start Your Beauty Project</Link>
              </Button>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
