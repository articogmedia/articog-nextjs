import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function MotionGraphicsPage() {
  const inclusions = [
    {
      title: "Titles & Lower-Thirds",
      description: "Animated text elements meticulously matched to your brand typography and visual identity."
    },
    {
      title: "UI Motion",
      description: "High-fidelity animated interface elements that showcase your digital product's functionality."
    },
    {
      title: "Product Callouts",
      description: "Dynamic markers that highlight specific features, materials, or technical details with precision motion."
    },
    {
      title: "End Cards",
      description: "Branded closing frames with integrated logos, social handles, and clear calls-to-action."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Motion Graphics</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Enhance your video content with animated titles, callouts, and branded motion elements that drive engagement and clarity.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inclusions.map((item) => (
                  <div key={item.title} className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800/50">
                    <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/30">
                <p className="text-zinc-500 text-sm italic text-center">
                  Note: All motion elements are built for absolute brand consistency across your entire video library.
                </p>
              </div>
            </Section>

            <Section className="py-20 text-center">
              <div className="bg-zinc-900/20 p-12 rounded-3xl border border-zinc-800/50">
                <h2 className="text-3xl font-bold mb-8">Bring your brand to life with motion.</h2>
                <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                  <Link to="/book-a-demo">Add Motion</Link>
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
