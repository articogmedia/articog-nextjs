import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Ad Creative Articog",
  description: "High-volume, performance-tested video ads for every platform. Scale your creative output without increasing headcount.",
};
import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function VideoAdsGalleryPage() {
  const examples = [
    { title: "DTC Lifestyle Reveal", type: "Client Work", industry: "Beauty", format: "9:16" },
    { title: "Automotive Cinematic", type: "Concept Piece", industry: "Automotive", format: "16:9" },
    { title: "SaaS Product Tour", type: "Client Work", industry: "Technology", format: "16:9" },
    { title: "Electronics Detail", type: "Concept Piece", industry: "Electronics", format: "1:1" },
    { title: "Fashion Seasonal", type: "Client Work", industry: "DTC", format: "9:16" },
    { title: "Real Estate Flythrough", type: "Concept Piece", industry: "Real Estate", format: "9:16" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Video Ad Gallery</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Explore our latest AI-generated video creative across industries and formats.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {examples.map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-sm font-bold uppercase tracking-widest">View Project</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs text-zinc-500">{item.industry}</span>
                    <span className="text-xs text-zinc-500">•</span>
                    <span className="text-xs text-zinc-500">{item.format}</span>
                  </div>
                </div>
              ))}
            </div>

            <Section className="mt-20 py-12 border-t border-zinc-900 text-center">
              <p className="text-zinc-500 text-sm mb-8 italic">All displayed work is used with appropriate permissions.</p>
              <Link to="/book-a-demo" className="text-white hover:underline underline-offset-4">
                View all case studies →
              </Link>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
