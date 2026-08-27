import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

function EventsPage() {
  const upcomingEvents = [
    {
      title: "Scale Your Creative Production with AI-Native Workflows",
      date: "September 15, 2026",
      format: "Virtual Webinar",
      description: "Learn how enterprise brands are leveraging AI to increase creative output while maintaining brand fidelity."
    },
    {
      title: "The Future of Post-Production: Automation at Scale",
      date: "October 5, 2026",
      format: "Live Workshop",
      description: "A deep dive into automated upscaling, mastering, and localization for global campaigns."
    }
  ];

  const pastEvents = [
    {
      title: "Articog Summer Showcase: Q3 Features",
      date: "July 20, 2026",
      format: "Recorded Session",
      description: "A demonstration of our latest creative testing and dynamic variant generation tools."
    },
    {
      title: "Responsible AI in Creative Production",
      date: "June 12, 2026",
      format: "Panel Discussion",
      description: "Industry experts discuss data handling, fidelity, and ethical considerations in AI media."
    }
  ];

  {/* 
    COMPLIANCE NOTE:
    Registration forms must include appropriate consent language distinguishing event registration 
    from marketing email opt-in per global privacy standards.
  */}

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Webinars & Events</h1>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
              Join our live and recorded sessions to learn the latest techniques and strategies in AI-native creative production.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8 text-white">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingEvents.map((event) => (
                  <div key={event.title} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 flex flex-col h-full group hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs text-zinc-500 font-medium">{event.date}</span>
                      <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                      <span className="text-xs text-zinc-500 font-medium">{event.format}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{event.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">{event.description}</p>
                    <Button variant="outline" className="w-fit border-zinc-700 hover:bg-zinc-800 text-white px-8">Register</Button>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-12 border-t border-zinc-900">
              <h2 className="text-2xl font-bold mb-8 text-white">Past Events / Recordings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pastEvents.map((event) => (
                  <div key={event.title} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 flex flex-col h-full group hover:border-zinc-700 transition-colors opacity-80 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs text-zinc-500 font-medium">{event.date}</span>
                      <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                      <span className="text-xs text-zinc-500 font-medium">{event.format}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{event.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">{event.description}</p>
                    <Button variant="ghost" className="w-fit text-zinc-400 hover:text-white p-0 hover:bg-transparent flex items-center gap-2">
                      Watch Recording
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </Button>
                  </div>
                ))}
              </div>
            </Section>

            <Section className="py-20 text-center">
              <div className="bg-zinc-900/30 p-12 rounded-3xl border border-zinc-800">
                <h2 className="text-2xl font-bold mb-6 text-white">Want a custom walkthrough?</h2>
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

export default EventsPage;
