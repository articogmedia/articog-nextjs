import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function UGCStylePage() {
  const benefits = [
    { title: "Native Aesthetic", description: "Creative that looks and feels like organic content to drive higher engagement on social feeds." },
    { title: "Scale without Shoots", description: "Generate authentic-looking creator content without the logistical overhead of traditional UGC." },
    { title: "Rapid Response", description: "React to trends in real-time with AI content that matches the current social zeitgeist." },
    { title: "Performance Ready", description: "Built specifically for high-conversion hooks and narrative structures." }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">UGC-Style Content</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Authentic, creator-style content produced with AI for high-impact social advertising.
            </p>
            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8">Why AI UGC?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((b) => (
                  <div key={b.title} className="bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800/50">
                    <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{b.description}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section className="py-20 text-center">
              <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                <Link to="/book-a-demo">Build Your UGC Strategy</Link>
              </Button>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
