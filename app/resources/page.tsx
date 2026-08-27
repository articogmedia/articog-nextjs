import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { ArrowRight, BookOpen, FileText, BarChart, Calendar, Play } from "lucide-react";

function ResourcesPage() {
  const categories = [
    {
      title: "Blog",
      description: "Latest news, updates and deep dives from our creative team.",
      icon: <BookOpen className="w-5 h-5" />,
      href: "/blog",
      status: "active",
    },
    {
      title: "Guides",
      description: "Step-by-step documentation on AI production workflows.",
      icon: <FileText className="w-5 h-5" />,
      href: "/guides",
      status: "active",
    },
    {
      title: "Playbooks",
      description: "Strategic frameworks for scaling creative output.",
      icon: <Play className="w-5 h-5" />,
      href: "/playbooks",
      status: "active",
    },
    {
      title: "Reports",
      description: "Industry benchmarks and performance data on AI creative.",
      icon: <BarChart className="w-5 h-5" />,
      href: "/reports",
      status: "active",
    },
    {
      title: "Events",
      description: "Webinars and live sessions with production experts.",
      icon: <Calendar className="w-5 h-5" />,
      href: "/events",
      status: "active",
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
              RESOURCES
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Production Insights
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
              A collection of guides, articles, and playbooks to help your team navigate the shift to AI-native creative production.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className={`group rounded-2xl p-8 border border-white/[0.08] transition-all ${
                  cat.status === 'active' 
                    ? 'hover:border-white/20 hover:bg-white/[0.02] cursor-pointer' 
                    : 'opacity-60'
                }`}
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                {cat.status === 'active' ? (
                  <Link href={cat.href}>
                    <div className="mb-6 w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                      {cat.icon}
                    </div>
                    <h3 className="text-lg font-display font-semibold text-white mb-3 flex items-center justify-between">
                      {cat.title}
                      <ArrowRight size={16} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </h3>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                      {cat.description}
                    </p>
                  </Link>
                ) : (
                  <div>
                    <div className="mb-6 w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/20">
                      {cat.icon}
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-display font-semibold text-white/40">{cat.title}</h3>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-white/20 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]">
                        Coming Soon
                      </span>
                    </div>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.25)" }}>
                      {cat.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Heading as="h2" size="section" className="mb-8">
              Start your journey
            </Heading>
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default ResourcesPage;
