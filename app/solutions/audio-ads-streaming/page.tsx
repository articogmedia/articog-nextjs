import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function AudioAdsStreamingPage() {
  const inclusions = [
    { title: "Multi-Format Masters", description: "Deliverables for radio, Spotify, Pandora, and podcast networks." },
    { title: "Dynamic Insertion", description: "Audio built for dynamic ad insertion (DAI) engines." },
    { title: "Voice Diversity", description: "Access a wide range of professional AI and human voice options." },
    { title: "Compliant Mastering", description: "Always delivered to platform loudness standards." }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Audio Ads & Streaming</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Professional audio production for the ears of your audience, wherever they listen.
            </p>
            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8">Production Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {inclusions.map((i) => (
                  <div key={i.title} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                    <h3 className="text-lg font-bold mb-2">{i.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{i.description}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section className="py-20 text-center">
              <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                <Link to="/book-a-demo">Start Audio Production</Link>
              </Button>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
