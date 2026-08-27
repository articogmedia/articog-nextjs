import { Container, Section, Button } from "@/components/ui";

export default function AfinCommunityPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              AFIN Community
            </h1>

            <p className="text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
              [Description of AFIN community to be added]
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                <h2 className="text-xl font-bold mb-4 text-white">
                  About AFIN
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  AFIN is a community initiative supported by Articog — details
                  to be added.
                </p>
              </div>
            </Section>

            <Section className="py-12 text-center">
              <Button className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                Join the Community
              </Button>
            </Section>
          </div>
        </Container>
      </main>
    </div>
  );
}