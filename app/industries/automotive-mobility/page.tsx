import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function AutomotiveMobilityPage() {
  const challenges = [
    {
      title: "Representing Features Accurately",
      description: "Ensuring vehicle features and technical specs are visually perfect and technically correct."
    },
    {
      title: "Region-Specific Variants",
      description: "Producing unique variants for different markets, including right-hand drive and local badging."
    },
    {
      title: "Performance Compliance",
      description: "Reviewing and verifying performance claims to meet strict automotive marketing regulations."
    }
  ];

  const faqs = [
    {
      question: "How do you ensure vehicle fidelity?",
      answer: "We use high-resolution reference models and CAD data to ensure every curve, light signature, and feature of your vehicle is represented accurately."
    },
    {
      question: "Can you handle regional compliance?",
      answer: "Yes. We work closely with your legal teams to ensure all visuals and claims meet the specific regulatory requirements of each target market."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Creative for Automotive & Mobility</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Vehicle films and marketing visuals designed for automotive and mobility brands who demand precision and cinematic quality.
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
              <Link 
                to="/services/ai-video-production/automotive" 
                className="group block bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors max-w-md"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">AI Video Production: Automotive</h3>
                <p className="text-zinc-400 mb-4">Cinematic vehicle films produced with advanced AI.</p>
                <span className="text-white font-medium flex items-center">
                  View Service Details <span className="ml-2">→</span>
                </span>
              </Link>
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
                <h2 className="text-3xl font-bold mb-6 text-white">Ready to transform your automotive creative?</h2>
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
