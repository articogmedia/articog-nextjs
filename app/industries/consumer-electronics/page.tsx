import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function ConsumerElectronicsPage() {
  const challenges = [
    { title: "Feature Complexity", description: "Highlighting technical specs and internal components effectively." },
    { title: "Competitive Landscape", description: "Standing out in a market dominated by high-end studio photography." },
    { title: "Product Iteration", description: "Updating creative for version increments and seasonal launches." }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Consumer Electronics</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Showcase your innovation with high-fidelity AI production that captures every detail and feature.
            </p>
            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8">Common Challenges</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {challenges.map((c) => (
                  <div key={c.title} className="space-y-3">
                    <h3 className="text-lg font-bold text-white">{c.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section className="py-20 text-center">
              <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                <Link to="/book-a-demo">Start Your Electronics Project</Link>
              </Button>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
