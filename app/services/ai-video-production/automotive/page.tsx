import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function AutomotiveFilmsPage() {
  const responsibleFeatures = [
    {
      title: "Vehicle Reference Fidelity",
      description: "We ensure your actual vehicle model, color, and specific features are represented with pixel-perfect accuracy."
    },
    {
      title: "Safety First",
      description: "Our production process strictly prohibits depictions of unsafe driving behavior or traffic law violations."
    },
    {
      title: "Regional Specs",
      description: "Vehicle trims, badging, and local specifications are meticulously matched to your target market."
    },
    {
      title: "Performance Claim Review",
      description: "Any speed, efficiency, or performance claims are reviewed for accuracy against your documentation before delivery."
    }
  ];

  const useCases = [
    {
      title: "Launch Films",
      description: "Cinematic reveals for new models that capture attention across all digital channels."
    },
    {
      title: "Dealership Marketing",
      description: "Localized content that drives showroom traffic with professional, high-end production."
    },
    {
      title: "Feature Showcases",
      description: "Deep-dives into specific technology, safety features, or interior craftsmanship."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Automotive Films</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Cinematic vehicle films produced with advanced AI, delivering studio-quality visuals with unprecedented speed and scale.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8">Responsible Production</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {responsibleFeatures.map((item) => (
                  <div key={item.title} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8">Use Cases</h2>
              <div className="space-y-6">
                {useCases.map((item) => (
                  <div key={item.title} className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50">
                    <div className="md:w-1/3">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-20 text-center">
              <div className="bg-gradient-to-b from-zinc-900 to-black p-12 rounded-3xl border border-zinc-800">
                <h2 className="text-3xl font-bold mb-6">Ready to accelerate your creative production?</h2>
                <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                  <Link to="/book-a-demo">Create an Automotive Film</Link>
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
