import { Container, Section, Heading } from "@/components/ui";

export default function SubprocessorsPage() {
  const vendors = [
    { name: "Cloud Infrastructure", purpose: "Application hosting and data storage", location: "US/EU" },
    { name: "AI Model Providers", purpose: "Content generation and processing", location: "Global" },
    { name: "Analytics Providers", purpose: "Website usage monitoring", location: "US" },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-4xl">
            <span className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">Trust</span>
            <Heading as="h1" size="hero" className="mb-6">Subprocessors</Heading>
            <p className="text-zinc-400 text-lg mb-12">Transparency into the third-party tools and vendors we use to deliver our services.</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-white/5">
                    <th className="py-4 px-6 text-white font-semibold border-b border-white/10">Vendor</th>
                    <th className="py-4 px-6 text-white font-semibold border-b border-white/10">Purpose</th>
                    <th className="py-4 px-6 text-white font-semibold border-b border-white/10">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((v, i) => (
                    <tr key={i} className="hover:bg-white/[0.02]">
                      <td className="py-4 px-6 text-zinc-300 border-b border-white/10">{v.name}</td>
                      <td className="py-4 px-6 text-zinc-400 border-b border-white/10">{v.purpose}</td>
                      <td className="py-4 px-6 text-zinc-400 border-b border-white/10">{v.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
