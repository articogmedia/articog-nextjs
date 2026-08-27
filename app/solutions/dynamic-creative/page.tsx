import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function DynamicCreativePage() {
  const features = [
    { title: "Modular Architecture", description: "Creative built as independent layers for easy swapping of products, backgrounds, and copy." },
    { title: "Data-Driven Variations", description: "Generate thousands of personalized assets based on audience segments and performance data." },
    { title: "Real-Time Optimization", description: "Quickly refresh underperforming elements without restarting the entire production cycle." },
    { title: "Platform Native", description: "Optimized for Meta, TikTok, and YouTube dynamic creative optimization (DCO) engines." }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Dynamic Creative</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Scale your personalization with modular AI creative designed for dynamic testing and automated optimization.
            </p>
            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8">Solution Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((f) => (
                  <div key={f.title} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                    <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                    <p className="text-zinc-400 text-sm">{f.description}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section className="py-20 text-center">
              <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                <Link to="/book-a-demo">Discuss Dynamic Creative</Link>
              </Button>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
