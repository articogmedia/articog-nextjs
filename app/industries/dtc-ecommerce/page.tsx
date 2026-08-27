import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function DTCEcommercePage() {
  const challenges = [
    { title: "High Creative Fatigue", description: "Consumer brands require constant fresh creative to maintain ROAS." },
    { title: "Rising Production Costs", description: "Traditional studio shoots are too slow and expensive for high-volume testing." },
    { title: "Platform Saturation", description: "Standing out on crowded feeds requires high-fidelity, cinematic visuals." }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">DTC & E-Commerce</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Drive growth with high-performance AI creative built for the speed of modern retail.
            </p>
            
            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8">Industry Challenges</h2>
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
              <div className="bg-zinc-900/30 p-12 rounded-3xl border border-zinc-800/50">
                <h2 className="text-3xl font-bold mb-6">Boost your ROAS today.</h2>
                <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                  <Link to="/book-a-demo">Start Your Project</Link>
                </Button>
              </div>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
