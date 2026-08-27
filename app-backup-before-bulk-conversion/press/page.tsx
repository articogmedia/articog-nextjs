import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

function PressPage() {
  const mediaAssets = [
    {
      title: "Logo Pack",
      description: "Official brand marks in various formats and colorways."
    },
    {
      title: "Product Screenshots",
      description: "High-resolution captures of the Articog platform in action."
    },
    {
      title: "Company Boilerplate",
      description: "Standard company description for press and editorial use."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Press & Media Kit
            </h1>

            <p className="text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
              Resources and information for journalists and media covering Articog's mission to transform creative production with AI.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8 text-white">
                Media Kit
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mediaAssets.map((asset) => (
                  <div
                    key={asset.title}
                    className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 flex flex-col h-full"
                  >
                    <h3 className="text-lg font-bold mb-3 text-white">
                      {asset.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                      {asset.description}
                    </p>

                    <Button
                      variant="outline"
                      className="w-full border-zinc-700 hover:bg-zinc-800 text-white"
                    >
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-12 border-t border-zinc-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-white">
                    Company Boilerplate
                  </h2>

                  <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 italic text-zinc-400 text-sm leading-relaxed">
                    Articog is a next-generation AI creative production studio. We partner with leading brands and agencies to produce high-fidelity cinematic video, product commercials, and social content at unprecedented speed and scale, powered by advanced generative AI workflows.
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6 text-white">
                    Media Contact
                  </h2>

                  <p className="text-zinc-400 mb-4">
                    For media inquiries, interviews, or additional assets, please reach out to our communications team.
                  </p>

                  <a
                    href="mailto:info@articog.com"
                    className="text-white text-xl font-bold hover:underline tracking-tight"
                  >
                    info@articog.com
                  </a>
                </div>
              </div>
            </Section>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Usage Guidelines
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                Articog logos and media materials may be used for editorial coverage according to our brand guidelines. For any other usage or specific permission questions, please contact us.
              </p>
            </Section>

            <Section className="py-20 text-center">
              <Button
                asChild
                className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full"
              >
                <a href="/contact">Download Media Kit</a>
              </Button>
            </Section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default PressPage;