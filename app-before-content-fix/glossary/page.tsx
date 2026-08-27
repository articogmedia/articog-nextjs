import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

function GlossaryPage() {
  const terms = [
    {
      term: "AI-Native Production",
      definition: "A production framework where generative AI is not just a tool but the core infrastructure. This allows for near-instant iteration and the ability to scale creative output without linear increases in cost or time.",
      link: "/services/ai-video-production"
    },
    {
      term: "Brand Consistency at Scale",
      definition: "The process of ensuring that every generated asset adheres to strict visual and tonal guidelines across thousands of variants. This is achieved through proprietary model tuning and rigorous automated quality assurance passes.",
      link: "/why-articog/production-economics"
    },
    {
      term: "Creative Variant Testing",
      definition: "The systematic generation and deployment of multiple ad iterations to identify high-performing creative elements. AI enables the production of hundreds of specific variants tailored to different audience segments in minutes.",
      link: "/solutions/creative-testing"
    },
    {
      term: "UGC-Style Content",
      definition: "User-Generated Content (UGC) style assets that are produced using AI to mimic the authentic, low-fidelity aesthetic favored on social platforms like TikTok and Reels, while maintaining professional brand standards.",
      link: "/work/social"
    },
    {
      term: "Post-Production",
      definition: "The final technical stage of content creation, including motion graphics, color grading, upscaling, and audio mastering. Our AI-driven post-production delivers studio-quality finishes at a fraction of traditional timelines.",
      link: "/services/post-production/mastering"
    },
    {
      term: "Localization",
      definition: "Adapting creative content for different geographic markets through language translation, cultural nuance adjustment, and visual element swapping, ensuring global relevance while maintaining core brand messaging.",
      link: "/solutions/localization-global"
    },
    {
      term: "Performance Creative",
      definition: "Advertising assets designed specifically to drive measurable actions, such as clicks or conversions. These are optimized through data-driven AI generation based on real-time campaign performance metrics.",
      link: "/services/ad-creative"
    },
    {
      term: "Key Visual",
      definition: "The central graphic or image that serves as the foundation for a campaign's visual identity. AI allows for the rapid exploration of multiple key visual concepts to establish the strongest creative direction for a brand.",
      link: "/services/creative-strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Glossary</h1>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
              A guide to the key terms and concepts in AI-native creative production and modern digital advertising.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <div className="space-y-12">
                {terms.map((item) => (
                  <div key={item.term} className="group">
                    <h3 className="text-2xl font-bold mb-3 text-white tracking-tight flex items-baseline gap-4">
                      {item.term}
                      {item.link && (
                        <Link href={item.link} 
                          className="text-xs font-medium text-zinc-500 hover:text-white border border-zinc-800 rounded-full px-3 py-1 transition-colors"
                        >
                          Related Service
                        </Link>
                      )}
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-20 text-center">
              <div className="bg-zinc-900/30 p-12 rounded-3xl border border-zinc-800">
                <h2 className="text-2xl font-bold mb-6 text-white">Need more information?</h2>
                <Button asChild className="bg-white text-black hover:bg-zinc-200 h-12 px-8 text-base font-semibold rounded-full">
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

export default GlossaryPage;
