import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function LocalizationPage() {
  const steps = [
    { title: "Visual Translation", description: "Swap out text, products, and cultural markers while maintaining the core cinematic quality." },
    { title: "Native Audio", description: "Professional localized voiceovers and culturally relevant music scores." },
    { title: "Market-Specific Specs", description: "Adjust formats and specs for regional platform dominance (e.g., Kakao, WeChat, Line)." },
    { title: "Compliance Review", description: "Ensure all localized creative meets regional advertising regulations and cultural norms." }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Localization & Global Scale</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Launch globally with creative that feels local. Scalable AI production for multi-market advertising.
            </p>
            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8 text-zinc-500 uppercase tracking-widest text-sm">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((s) => (
                  <div key={s.title} className="space-y-3">
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section className="py-20 text-center">
              <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                <Link href="/book-a-demo">Scale Globally</Link>
              </Button>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
