import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
function WhatsNewPage() {
  // NOTE: This page should stay unlinked from main nav until there are enough updates to keep it fresh.
  
  interface UpdateEntry {
    date: string;
    title: string;
    description: string;
  }

  const updates: UpdateEntry[] = [
    // Placeholder for future updates
    /*
    {
      date: "August 2026",
      title: "Custom Model Fine-tuning",
      description: "We've launched advanced brand-fidelity fine-tuning for enterprise partners."
    }
    */
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">What's New</h1>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
              Recent updates, feature launches, and announcements from the Articog team.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              {updates.length > 0 ? (
                <div className="space-y-12">
                  {updates.map((update, index) => (
                    <div key={index} className="relative pl-8 border-l border-zinc-800 pb-12 last:pb-0">
                      <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-white" />
                      <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 block">{update.date}</span>
                      <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{update.title}</h3>
                      <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">{update.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-zinc-900/30 p-12 rounded-3xl border border-zinc-800 border-dashed text-center">
                  <p className="text-zinc-500 italic">Check back soon for our first major platform update.</p>
                </div>
              )}
            </Section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default WhatsNewPage;
