import { Container, Section, Heading, Button } from "@/components/ui";
import { Link } from "@/components/ui/Link";

function CompareAIToolsPage() {
  const comparisonData = [
    {
      metric: "Creative Direction",
      diy: {
        value: "Inconsistent",
        desc: "Without a trained eye, raw outputs often lack the strategic intention and nuance required for high-stakes brand work.",
      },
      articog: {
        value: "Expert-Guided",
        desc: "Every asset is guided by experienced creative direction, ensuring technical brilliance is matched by strategic purpose.",
      },
    },
    {
      metric: "Technical Expertise",
      diy: {
        value: "Steep Learning Curve",
        desc: "Managing multiple specialized AI tools requires significant time to master prompting, parameters, and post-production.",
      },
      articog: {
        value: "Calibrated Pipeline",
        desc: "Our engine is built and managed by specialists who calibrate multiple models into a single, seamless production flow.",
      },
    },
    {
      metric: "Brand Consistency",
      diy: {
        value: "Output Drifts",
        desc: "Prompts often drift over time, leading to visual variations that can dilute your brand's core identity and impact.",
      },
      articog: {
        value: "Systematic Enforcement",
        desc: "We build your specific brand guidelines into the pipeline, ensuring systematic enforcement across every asset we generate.",
      },
    },
    {
      metric: "Time Investment",
      diy: {
        value: "High Time Cost",
        desc: "Hours spent prompting, re-generating, and troubleshooting outputs manually—taking time away from higher-value tasks.",
      },
      articog: {
        value: "Low Friction",
        desc: "Brief in, finished assets out. We handle the technical complexity so your team can focus on strategy and scaling.",
      },
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 mb-6 border border-white/10">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Comparison
              </span>
            </div>

            <Heading as="h1" size="hero" className="mb-6 text-white">
              Articog vs AI Tools Only
            </Heading>

            <p className="font-sans text-xl text-white/60 leading-relaxed">
              AI tools are powerful, but using them well for brand-quality
              creative at scale takes expertise most teams don't have the time
              to build in-house.
            </p>
          </div>
        </Container>
      </Section>

      {/* Comparison Table Section */}
      <Section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-left font-display text-sm font-semibold text-white/30 uppercase tracking-widest w-1/4">
                    Metric
                  </th>

                  <th className="py-6 px-8 text-left font-display text-lg font-semibold text-white/60 w-3/8">
                    DIY With AI Tools
                  </th>

                  <th className="py-6 px-8 text-left font-display text-lg font-semibold text-white w-3/8">
                    Articog Engine
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 group hover:bg-white/[0.01] transition-colors"
                  >
                    <td className="py-10 px-4 align-top">
                      <span className="font-display text-lg font-medium text-white">
                        {row.metric}
                      </span>
                    </td>

                    <td className="py-10 px-8 align-top">
                      <div className="text-white/60 font-display text-xl mb-3">
                        {row.diy.value}
                      </div>

                      <p className="text-white/40 font-sans text-sm leading-relaxed">
                        {row.diy.desc}
                      </p>
                    </td>

                    <td className="py-10 px-8 align-top bg-white/[0.02]">
                      <div className="text-white font-display text-xl mb-3">
                        {row.articog.value}
                      </div>

                      <p className="text-white/60 font-sans text-sm leading-relaxed">
                        {row.articog.desc}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 border-t border-white/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-semibold text-white mb-8">
              Get brand-quality AI creative without the learning curve
            </h2>

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

export default function AIToolsComparisonPage() {
  return <CompareAIToolsPage />;
}