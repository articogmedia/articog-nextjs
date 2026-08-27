import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Link } from "@/components/ui/Link";
function PlaybooksPage() {
  const playbooks = [
    {
      title: "The Creative Testing Framework",
      description: "A structured approach to high-velocity ad testing using AI-generated variants.",
      serviceLink: "/solutions/creative-testing",
      serviceName: "Creative Testing",
      diagram: "01"
    },
    {
      title: "Omnichannel Scale Strategy",
      description: "How to repurpose one hero asset into 50+ platform-specific social formats.",
      serviceLink: "/services/post-production/mastering",
      serviceName: "Mastering & Versioning",
      diagram: "02"
    },
    {
      title: "Brand Voice for AI Audio",
      description: "A framework for establishing and maintaining sonic brand consistency.",
      serviceLink: "/services/audio/audio-ads",
      serviceName: "Audio Production",
      diagram: "03"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Playbooks</h1>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
              Practical, ready-to-use frameworks for scaling your creative production and maximizing efficiency with AI.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {playbooks.map((playbook) => (
                  <div key={playbook.title} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 flex flex-col h-full group hover:border-zinc-700 transition-colors">
                    <div className="w-full aspect-video bg-zinc-800/50 rounded-lg mb-6 flex items-center justify-center border border-zinc-700/50">
                      <span className="text-zinc-500 font-mono text-2xl">{playbook.diagram}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{playbook.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-grow">{playbook.description}</p>
                    <div className="mb-6">
                      <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold block mb-1">Relevant Service</span>
                      <Link href={playbook.serviceLink} className="text-xs text-white hover:underline">{playbook.serviceName}</Link>
                    </div>
                    <Button variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800 text-white">Use This Playbook</Button>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-20 text-center">
              <div className="bg-gradient-to-b from-zinc-900 to-black p-12 rounded-3xl border border-zinc-800">
                <h2 className="text-3xl font-bold mb-6 text-white">Ready to implement these frameworks?</h2>
                <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                  <Link href="/book-a-demo">Book a Demo</Link>
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

export default PlaybooksPage;
