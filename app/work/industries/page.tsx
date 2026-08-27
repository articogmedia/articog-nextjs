import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ArrowRight, ShoppingBag, Laptop, Home, Car, Coffee, Shirt } from "lucide-react";

export default function WorkByIndustryPage() {
  const industries = [
    { title: "DTC & Ecommerce", href: "/industries/dtc-ecommerce", icon: ShoppingBag },
    { title: "SaaS & Technology", href: "/industries/saas-technology", icon: Laptop },
    { title: "Real Estate", href: "/industries/real-estate", icon: Home },
    { title: "Automotive & Mobility", href: "/industries/automotive-mobility", icon: Car },
    { title: "Food & Beverage", href: "/industries/food-beverage", icon: Coffee },
    { title: "Fashion & Lifestyle", href: "/industries/fashion-lifestyle", icon: Shirt },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mb-4 inline-block">Portfolio</span>
            <Heading as="h1" size="hero" className="mb-6">Work by Industry</Heading>
            <p className="font-sans text-xl text-white/60 leading-relaxed">
              Explore how we solve creative bottlenecks for specific verticals using our AI-native production engine.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="group rounded-2xl p-8 border border-white/[0.08] transition-all hover:border-white/20 hover:bg-white/[0.02] bg-white/[0.01]"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <industry.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-white flex items-center justify-between">
                  {industry.title}
                  <ArrowRight size={18} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </h3>
                <p className="font-sans text-sm text-white/40">View case studies and outcomes for {industry.title.toLowerCase()}.</p>
              </Link>
            ))}
          </div>

          <div className="text-center pt-12 border-t border-white/10">
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
