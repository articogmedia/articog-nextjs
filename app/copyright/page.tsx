import type { Metadata } from "next";
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: "Copyright Policy | Articog",
  description: "Articog's copyright policy: ownership of creative assets, usage rights, and how to report a copyright concern.",
  alternates: { canonical: "https://articog.com/copyright" },
};

export default function CopyrightPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <div className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="type-h1 mb-6 text-white">Copyright / DMCA</h1>
            <p className="text-zinc-400 type-h3 mb-12 max-w-2xl leading-relaxed">
              Articog respects the intellectual property rights of others and expects its users to do the same.
            </p>

            <Section className="py-12 border-t border-zinc-900">
              <div className="prose prose-invert max-w-none space-y-8">
                <div>
                  <h2 className="type-h2 mb-4 text-white">Reporting Infringement</h2>
                  <p className="text-zinc-400 type-body-lg leading-relaxed">
                    If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our copyright team with the following information:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
                    <li>A description of the copyrighted work that you claim has been infringed.</li>
                    <li>A description of where the material that you claim is infringing is located on the Articog site.</li>
                    <li>Your address, telephone number, and email address.</li>
                    <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                    <li>A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
                  </ul>
                </div>

                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                    <h3 className="type-h3 mb-2 text-white">Contact Our Copyright Team</h3>
                  <p className="text-zinc-400">
                    Submit your request via email to: <a href="mailto:info@articog.com" className="text-white hover:underline">info@articog.com</a>
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 type-small leading-relaxed">
                    We respond to legitimate copyright concerns promptly. Please note that this process is for reporting copyright infringement only; other inquiries (such as support requests) will not receive a response through this channel.
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </Container>
      </div>

    </div>
  );
}
