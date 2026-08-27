import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function DataProcessingAddendumPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Data Processing Addendum</h1>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
              We take data protection seriously. A Data Processing Addendum (DPA) is available for clients who require specific contractual protections for the processing of personal data.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                <h2 className="text-xl font-bold mb-4 text-white">Agreement Terms</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Our standard Data Processing Addendum is designed to meet the requirements of modern privacy regulations. The DPA is available upon request and will be provided as part of the contract negotiation process to ensure it aligns with your organization's specific compliance needs.
                </p>
              </div>
            </Section>

            <Section className="py-12 text-center">
              <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                <Link to="/contact">Request Our DPA</Link>
              </Button>
            </Section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
