import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { Plane, Map, Camera, Globe } from "lucide-react";

export default function TravelHospitalityPage() {
  const features = [
    {
      title: "Destination Content",
      desc: "Evocative, high-craft AI video and imagery that captures the spirit of any destination.",
      icon: Map,
    },
    {
      title: "Property Visuals",
      desc: "Cinematic property tours and lifestyle shots built around your real location assets.",
      icon: Camera,
    },
    {
      title: "Multi-Language Scaling",
      desc: "Easily adapt creative for global markets with native-feel visual and copy variants.",
      icon: Globe,
    },
    {
      title: "Booking-Driven Ads",
      desc: "High-performance video ads built to drive conversion and fill rooms.",
      icon: Plane,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Industry Solutions
              </span>
            </div>
            <Heading as="h1" size="hero" className="mb-6">
              AI Creative for Travel & Hospitality
            </Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Capture the imagination of global travelers. Produce high-end destination content and property marketing at a fraction of traditional production costs.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">Ready to transport your audience?</h2>
            <Link href="/book-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Book a Demo
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
