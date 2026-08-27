import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function AudioAdsPage() {
  const inclusions = [
    {
      title: "Standard Lengths",
      description: "Professionally produced 15s, 30s, and 60s cuts optimized for radio and digital streaming."
    },
    {
      title: "Scriptwriting",
      description: "Copy written and refined to fit your brand voice perfectly within the specific audio format."
    },
    {
      title: "Professional Voice",
      description: "High-quality professional voiceover with all usage rights cleared for your campaigns."
    },
    {
      title: "Music & Score",
      description: "Licensed or custom-scored background music that enhances your brand's emotional resonance."
    },
    {
      title: "Legal Reads",
      description: "All required legal/disclaimer language included and clearly read according to compliance standards."
    },
    {
      title: "Mastering",
      description: "Final audio masters delivered to professional broadcast and streaming loudness standards."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Audio Ads</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Studio-quality audio ads for radio, podcasts, and streaming services, engineered to drive engagement and results.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8 text-zinc-500 uppercase tracking-widest text-sm">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inclusions.map((item) => (
                  <div key={item.title} className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                    <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-20 text-center">
              <div className="bg-zinc-900/20 p-12 rounded-3xl border border-zinc-800/50">
                <h2 className="text-3xl font-bold mb-4 tracking-tight">Sound like a market leader.</h2>
                <p className="text-zinc-500 mb-8">Production ready in days, not weeks.</p>
                <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                  <Link to="/book-a-demo">Create an Audio Ad</Link>
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
