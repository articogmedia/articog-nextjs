import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function MasteringPage() {
  const inclusions = [
    {
      title: "Master Specs",
      description: "Final high-resolution files delivered to your organization's exact technical specifications."
    },
    {
      title: "Aspect Ratios",
      description: "Every asset delivered in the multiple aspect ratios your distribution channels require (9:16, 4:5, 1:1, 16:9)."
    },
    {
      title: "Codec & Bitrate",
      description: "Assets formatted to the specific codecs and bitrates expected by each platform for optimal playback."
    },
    {
      title: "Captions",
      description: "Burned-in graphics or sidecar caption files (SRT/VTT) as needed for accessibility and social engagement."
    },
    {
      title: "Audio Loudness",
      description: "Final audio mixed and mastered to broadcast or platform-specific loudness standards (LUFS)."
    },
    {
      title: "Archive",
      description: "Secure archiving of final masters to ensure easy access and reuse for future creative iterations."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Upscaling & Mastering</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              The final technical pass that ensures your creative assets are perfectly delivery-ready for every platform and channel.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8">What's Included</h2>
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
                <h2 className="text-3xl font-bold mb-8">Professional finish for every asset.</h2>
                <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                  <Link href="/book-a-demo">Master Your Assets</Link>
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
