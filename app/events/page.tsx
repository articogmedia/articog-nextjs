import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Webinars & Events
            </h1>

            <p className="text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
              Join our live and recorded sessions to learn the latest
              techniques and strategies in AI-native creative production.
            </p>

            <p className="border-t border-zinc-900 pt-10 text-lg text-zinc-400">
              No upcoming webinars or events at this time. Check back soon for
              updates.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
}