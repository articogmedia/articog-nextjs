import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function SaasTechnologyPage() {
  const challenges = [
    { title: "Abstract Value Props", description: "Visualizing complex software benefits in a clear, compelling way." },
    { title: "Constant Product Updates", description: "Keeping creative fresh as features and UIs evolve." },
    { title: "High Acquisition Costs", description: "Need for high-converting creative to maintain efficient payback periods." }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">SaaS & Technology</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Accelerate your growth with AI creative that translates complex technology into cinematic storytelling.
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
                <Link href="/book-a-demo">Start Your SaaS Project</Link>
              </Button>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
