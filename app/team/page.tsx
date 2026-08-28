import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team — Articog",
  description: "Meet the team of creative technologists and production experts behind Articog.",
};
import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Linkedin } from "lucide-react";

{/* 
  INTERNAL NOTE: 
  All bios and credentials must be accurate and verified before publishing. 
  No inflated titles or claims. 
*/}

export default function TeamPage() {
  const team = [
    {
      name: "[Name Placeholder]",
      role: "[Role Placeholder]",
      bio: "Short bio placeholder detailing experience in AI production, creative technology, and brand strategy. Focused on delivering high-quality, scalable creative solutions.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "[Name Placeholder]",
      role: "[Role Placeholder]",
      bio: "Short bio placeholder detailing experience in AI production, creative technology, and brand strategy. Focused on delivering high-quality, scalable creative solutions.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "[Name Placeholder]",
      role: "[Role Placeholder]",
      bio: "Short bio placeholder detailing experience in AI production, creative technology, and brand strategy. Focused on delivering high-quality, scalable creative solutions.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "[Name Placeholder]",
      role: "[Role Placeholder]",
      bio: "Short bio placeholder detailing experience in AI production, creative technology, and brand strategy. Focused on delivering high-quality, scalable creative solutions.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "[Name Placeholder]",
      role: "[Role Placeholder]",
      bio: "Short bio placeholder detailing experience in AI production, creative technology, and brand strategy. Focused on delivering high-quality, scalable creative solutions.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "[Name Placeholder]",
      role: "[Role Placeholder]",
      bio: "Short bio placeholder detailing experience in AI production, creative technology, and brand strategy. Focused on delivering high-quality, scalable creative solutions.",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-20">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              OUR TEAM
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              The people behind Articog
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
              A hybrid team of creative technologists, production experts, and AI specialists building the future of content.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24">
            {team.map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl p-8 border border-white/[0.08] transition-all hover:border-white/20 hover:bg-white/[0.02]"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-sm font-sans font-medium" style={{ color: "rgba(255,255,255,0.40)" }}>{member.role}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white/40 hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Heading as="h2" size="section" className="mb-8">
              Join the revolution
            </Heading>
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Work With Us</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
