import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function SubprocessorsPage() {
  const placeholderVendors = [
    { name: "Vendor Name", purpose: "Purpose of Processing", location: "Processing Location" },
    { name: "[Vendor Name]", purpose: "[Purpose]", location: "[Location]" },
    { name: "[Vendor Name]", purpose: "[Purpose]", location: "[Location]" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Subprocessors & Key Vendors</h1>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl leading-relaxed">
              To deliver our services effectively, we partner with specialized third-party tools and vendors. This page lists the subprocessors who may process customer data.
            </p>

            <Section className="py-8 border-t border-zinc-900">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="py-4 px-4 text-zinc-200 font-semibold">Vendor Name</th>
                      <th className="py-4 px-4 text-zinc-200 font-semibold">Purpose</th>
                      <th className="py-4 px-4 text-zinc-200 font-semibold">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placeholderVendors.map((vendor, idx) => (
                      <tr key={idx} className="border-b border-zinc-900/50 hover:bg-zinc-900/20 transition-colors">
                        <td className="py-6 px-4 text-zinc-400">{vendor.name}</td>
                        <td className="py-6 px-4 text-zinc-400">{vendor.purpose}</td>
                        <td className="py-6 px-4 text-zinc-400">{vendor.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-12 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Note: This list is maintained and updated as our vendor relationships evolve. If you have specific questions regarding our data processing partners, please reach out to us.
                </p>
                <div className="mt-4 text-zinc-300 font-medium">
                  Contact: <a href="mailto:info@articog.com" className="text-white hover:underline">info@articog.com</a>
                </div>
              </div>
            </Section>

            <Section className="py-12 flex justify-center">
              <Button asChild className="bg-white text-black hover:bg-zinc-200 h-14 px-10 text-lg font-semibold rounded-full">
                <Link href="/contact">Request Vendor Details</Link>
              </Button>
            </Section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
