import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function FashionLifestylePage() {
  const challenges = [
    {
      title: "Fast Fashion Cycles",
      description: "Keeping pace with rapid trend cycles by producing content at the speed of the social feed."
    },
    {
      title: "Content Volume",
      description: "Generating sufficient lookbook and campaign imagery for every single collection drop."
    },
    {
      title: "Brand Aesthetic Consistency",
      description: "Maintaining a distinct, high-end visual language across diverse collections and lifestyle categories."
    }
  ];

  const faqs = [
    {
      question: "What is the turnaround for seasonal drops?",
      answer: "We typically deliver full campaign suites within days, ensuring you can launch new collections as soon as they are ready."
    },
    {
      question: "How do you maintain styling consistency?",
      answer: "We build custom brand profiles that lock in your specific lighting, mood, and styling preferences across all generated assets."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Creative for Fashion & Lifestyle</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              On-trend campaign visuals and high-velocity social content designed for the modern fashion and lifestyle brand.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8 text-white">Common Challenges</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {challenges.map((item) => (
                  <div key={item.title} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                    <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8 text-white">Relevant Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  to="/services/ai-video-production/social-reels" 
                  className="group block bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">Social Reels</h3>
                  <p className="text-zinc-400 mb-4">Fast-paced video content optimized for TikTok and Instagram.</p>
                  <span className="text-white font-medium flex items-center">
                    Learn More <span className="ml-2">→</span>
                  </span>
                </Link>
                <Link 
                  to="/services/product-visuals" 
                  className="group block bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">Product Visuals</h3>
                  <p className="text-zinc-400 mb-4">High-fidelity lifestyle and product photography.</p>
                  <span className="text-white font-medium flex items-center">
                    Learn More <span className="ml-2">→</span>
                  </span>
                </Link>
              </div>
            </Section>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {faqs.map((faq) => (
                  <div key={faq.question} className="max-w-2xl">
                    <h3 className="text-lg font-bold mb-3 text-white">{faq.question}</h3>
                    <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-20 text-center">
              <div className="bg-gradient-to-b from-zinc-900 to-black p-12 rounded-3xl border border-zinc-800">
                <h2 className="text-3xl font-bold mb-6 text-white">Ready to scale your fashion creative?</h2>
                <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                  <Link to="/book-a-demo">See Relevant Work</Link>
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
