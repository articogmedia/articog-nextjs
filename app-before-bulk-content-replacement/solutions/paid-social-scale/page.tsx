import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function PaidSocialScalePage() {
  const strategies = [
    { title: "Volume Production", description: "Generate the hundreds of assets required to combat creative fatigue on social platforms." },
    { title: "Iterative Testing", description: "Rapidly test hooks, backgrounds, and headlines to find high-performance winners." },
    { title: "Platform Optimization", description: "Content specifically tailored for the algorithms of Meta, TikTok, and YouTube." },
    { title: "Creative Refresh", description: "Seamlessly update winning concepts with fresh visuals to extend campaign longevity." }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Paid Social at Scale</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Maintain performance and combat creative fatigue with high-volume AI production designed for major social platforms.
            </p>
            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8">Scale Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {strategies.map((s) => (
                  <div key={s.title} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section className="py-20 text-center">
              <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full transition-all shadow-lg shadow-white/5">
                <Link href="/book-a-demo">Discuss Your Social Strategy</Link>
              </Button>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
