import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function AgencyWhiteLabelPage() {
  const steps = [
    {
      title: "NDA & Confidentiality",
      description: "Formal confidentiality covering your clients and your business relationship with us. We stay in the background."
    },
    {
      title: "White-Label Communication",
      description: "All deliverables and communication are styled to stay invisible to your client, delivered under your brand."
    },
    {
      title: "Rights",
      description: "Clear rights transfer so you can deliver to your clients without complication or legal friction."
    },
    {
      title: "Turnaround",
      description: "Production timelines built to fit your client deadlines, not just ours. We work at agency speed."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Agency & White-Label Production</h1>
            <p className="text-zinc-400 text-xl mb-16 max-w-2xl leading-relaxed">
              Partnering with agencies who need reliable production capacity for their own clients, delivered seamlessly under your brand.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8 text-white">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((item) => (
                  <div key={item.title} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                    <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-20 text-center">
              <div className="bg-gradient-to-b from-zinc-900 to-black p-12 rounded-3xl border border-zinc-800">
                <h2 className="text-3xl font-bold mb-6 text-white">Scale your agency's output today.</h2>
                <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                  <Link href="/book-a-demo">Partner With Us</Link>
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
