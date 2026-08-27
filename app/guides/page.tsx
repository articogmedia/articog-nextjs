import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function GuidesPage() {
  const guides = [
    {
      title: "The AI Video Revolution",
      description: "A comprehensive guide on how generative AI is transforming cinematic production workflows."
    },
    {
      title: "Scaling Social Content",
      description: "Strategies for using AI to maintain high volume and quality across TikTok and Instagram Reels."
    },
    {
      title: "Product Visual Mastery",
      description: "How to use AI-driven 3D rendering and photography for photorealistic product visuals."
    }
  ];

  {/* 
    NOTE FOR FUTURE IMPLEMENTATION:
    - If any guide is gated behind an email capture, marketing consent must be collected separately 
      from any transactional consent.
    - PDFs should be built to be accessible with proper text structure and alt text for images.
  */}

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Guides</h1>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
              In-depth resources and guides on how to leverage AI creative production to grow your brand and optimize your creative output.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {guides.map((guide) => (
                  <div key={guide.title} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 flex flex-col h-full group hover:border-zinc-700 transition-colors">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-zinc-200">{guide.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">{guide.description}</p>
                    <Button variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800 text-white">Read Guide</Button>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-20 text-center">
              <div className="bg-gradient-to-b from-zinc-900 to-black p-12 rounded-3xl border border-zinc-800">
                <h2 className="text-3xl font-bold mb-6 text-white">Ready to start your first project?</h2>
                <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                  <Link to="/book-a-demo">Book a Demo</Link>
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
