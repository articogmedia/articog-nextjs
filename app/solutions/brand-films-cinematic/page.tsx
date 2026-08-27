import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function CinematicBrandFilmsPage() {
  const elements = [
    { title: "Epic Scale", description: "Vast landscapes, intricate details, and cinematic lighting that rivals traditional studio production." },
    { title: "Consistent Identity", description: "Your brand colors, logos, and products integrated flawlessly into every frame." },
    { title: "Emotional Resonance", description: "AI-driven visual storytelling designed to build deep brand affinity." },
    { title: "Rapid Iteration", description: "Explore hundreds of visual directions in days to find the perfect cinematic tone." }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Cinematic Brand Films</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Evocative, high-fidelity brand storytelling produced with advanced AI to capture your brand's essence at scale.
            </p>
            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8">Solution Elements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {elements.map((e) => (
                  <div key={e.title} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                    <h3 className="text-xl font-bold mb-3">{e.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{e.description}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section className="py-20 text-center">
              <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full transition-all">
                <Link to="/book-a-demo">Create Your Brand Film</Link>
              </Button>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
