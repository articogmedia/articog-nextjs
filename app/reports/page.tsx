import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function ReportsPage() {
  const reports = [
    {
      title: "The State of AI Creative 2026",
      date: "August 2026",
      description: "Original research on how enterprise brands are adopting generative AI for video production."
    },
    {
      title: "Performance Benchmarks: AI vs. Traditional Ads",
      date: "June 2026",
      description: "A comparative study of engagement and conversion metrics across 500+ campaigns."
    },
    {
      title: "Audio Advertising Trends",
      date: "April 2026",
      description: "Data-driven insights into the growth of streaming audio and AI voice technology."
    }
  ];

  {/* 
    EDITORIAL NOTE FOR FUTURE PUBLISHING:
    - Every published report must include a stated methodology.
    - Include sample size/source and publish date.
    - Provide citations for any external data.
    - No statistics should be published without a verifiable source.
  */}

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Reports</h1>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
              Original research, industry data, and in-depth analysis from Articog's production data and market studies.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reports.map((report) => (
                  <div key={report.title} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 flex flex-col h-full group hover:border-zinc-700 transition-colors">
                    <span className="text-xs text-zinc-500 font-medium mb-2">{report.date}</span>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-zinc-200 tracking-tight">{report.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">{report.description}</p>
                    <Button variant="outline" className="w-fit border-zinc-700 hover:bg-zinc-800 text-white px-8">Read Report</Button>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-20 text-center">
              <div className="bg-zinc-900/30 p-12 rounded-3xl border border-zinc-800">
                <h2 className="text-2xl font-bold mb-6 text-white">Looking for more resources?</h2>
                <Button asChild className="bg-white text-black hover:bg-zinc-200 h-12 px-8 text-base font-semibold rounded-full">
                  <Link to="/resources">View Resources</Link>
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
