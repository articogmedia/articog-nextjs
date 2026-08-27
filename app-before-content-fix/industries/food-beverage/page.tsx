import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function FoodBeveragePage() {
  const challenges = [
    {
      title: "Appetizing at Scale",
      description: "Making products look genuinely delicious and crave-worthy across hundreds of creative variations."
    },
    {
      title: "Seasonal Speed",
      description: "Producing seasonal and promotional content in days, not months, to hit key retail moments."
    },
    {
      title: "Product Range Consistency",
      description: "Maintaining a cohesive brand look and feel across your entire SKU library and beverage portfolio."
    }
  ];

  const faqs = [
    {
      question: "How do you ensure product accuracy?",
      answer: "We use your actual product references to ensure labeling, packaging, and product appearance are exactly as they appear on the shelf."
    },
    {
      question: "Can you handle last-minute seasonal campaigns?",
      answer: "Yes. Our AI-powered pipeline is built for speed, allowing us to turn around seasonal promotions in a fraction of the time of traditional shoots."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Creative for Food & Beverage</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Appetizing product visuals and high-impact campaign content designed specifically for food and beverage brands.
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
                  href="/services/product-visuals" 
                  className="group block bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">Product Visuals</h3>
                  <p className="text-zinc-400 mb-4">High-end product photography and 3D-style renderings.</p>
                  <span className="text-white font-medium flex items-center">
                    Learn More <span className="ml-2">→</span>
                  </span>
                </Link>
                <Link 
                  href="/services/ai-video-production/product-commercials" 
                  className="group block bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">Product Commercials</h3>
                  <p className="text-zinc-400 mb-4">Cinematic video ads built for the F&B industry.</p>
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
                <h2 className="text-3xl font-bold mb-6 text-white">Ready to elevate your product creative?</h2>
                <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                  <Link href="/book-a-demo">See Relevant Work</Link>
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
