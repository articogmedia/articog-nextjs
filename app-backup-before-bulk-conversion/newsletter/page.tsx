import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Link } from "@/components/ui/Link";
function NewsletterPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Newsletter</h1>
            <p className="text-zinc-400 text-xl mb-12 leading-relaxed">
              Stay updated on the latest AI creative production insights, industry benchmarks, and Articog product updates.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <form className="space-y-6 bg-zinc-900/30 p-8 rounded-3xl border border-zinc-800">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email Address <span className="text-white/20">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="you@company.com"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <div className="pt-1">
                    <input 
                      type="checkbox" 
                      id="marketing-consent" 
                      className="w-4 h-4 rounded border-zinc-800 bg-black text-white focus:ring-0 focus:ring-offset-0"
                    />
                  </div>
                  <label htmlFor="marketing-consent" className="text-sm text-zinc-500 leading-normal cursor-pointer select-none">
                    I agree to receive marketing communications and insights from Articog. 
                  </label>
                </div>

                <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200 h-12 text-base font-semibold rounded-xl">
                  Subscribe
                </Button>

                <p className="text-[12px] text-zinc-600 text-center leading-relaxed">
                  You can unsubscribe at any time via the link in our emails or by visiting our <Link href="/email-preferences" className="underline hover:text-zinc-400 transition-colors">email preferences</Link> page.
                </p>

                {/* 
                  COMPLIANCE NOTE:
                  Any actual marketing emails sent must include a physical postal address 
                  per CAN-SPAM requirements.
                */}
              </form>
            </Section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default NewsletterPage;
