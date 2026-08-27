import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function MasterServiceAgreementPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Master Service Agreement</h1>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
              Our Master Service Agreement (MSA) governs the overall terms of working with Articog and is provided as part of the onboarding process for new clients.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                <h2 className="text-xl font-bold mb-4 text-white">Agreement Access</h2>
                <p className="text-zinc-400 leading-relaxed">
                  To ensure our partnership terms are tailored to your specific project needs and organizational requirements, our MSA is available for review as part of the formal contract negotiation process.
                </p>
              </div>
            </Section>

            <Section className="py-12 text-center">
              <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                <Link to="/contact">Review Our MSA</Link>
              </Button>
            </Section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
