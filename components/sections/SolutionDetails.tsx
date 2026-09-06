import { Container, Section } from "@/components/ui";

type SolutionCategory = "monthly" | "performance" | "launch" | "overflow";

type DetailGroup = {
  title: string;
  description: string;
  items: Array<{ title: string; description: string }>;
};

const detailGroups: Record<SolutionCategory, DetailGroup[]> = {
  monthly: [
    {
      title: "Always-On Content",
      description: "Continuous cross-channel production for brands that need a steady flow of organic and paid content without more headcount.",
      items: [
        { title: "Continuous Production", description: "An ongoing content engine that keeps video, social, and visual channels active across campaign cycles." },
        { title: "Scalable Volume", description: "Output can flex with your needs while maintaining a consistent brand system and delivery cadence." },
        { title: "Subscription vs Infrastructure", description: "The subscription provides a predictable monthly package; broader always-on infrastructure supports variable output across channels." },
      ],
    },
  ],
  performance: [
    {
      title: "Testing & Optimization",
      description: "A structured performance system that turns creative production into a repeatable learning loop.",
      items: [
        { title: "Testing Hypotheses", description: "Each test begins with a clear question rather than random variation." },
        { title: "Variant Matrices", description: "Organize hooks, visual changes, copy, and CTAs so each result is actionable." },
        { title: "Asset Naming & Learning Loops", description: "Consistent naming keeps results readable and feeds the next round of production." },
      ],
    },
    {
      title: "Performance Formats",
      description: "High-volume creative for paid social and performance teams that need constant refreshes.",
      items: [
        { title: "Paid Social Scale", description: "High-volume production, iterative testing, platform optimization, and regular creative refreshes." },
        { title: "Dynamic Creative", description: "Modular creative layers and audience-driven variants optimized for Meta, TikTok, and YouTube." },
        { title: "UGC-Style Content", description: "Creator-style aesthetics, production without a shoot, rapid trend response, and conversion-focused hooks." },
      ],
    },
    {
      title: "Workflow & Automation",
      description: "Production systems designed to connect high-volume creative with existing marketing workflows.",
      items: [
        { title: "Creative Automation", description: "API-first workflows, mass variation, and rule-based branding for repeatable production." },
        { title: "Workflow Integration", description: "DAM and product-feed integrations can connect brief-to-delivery production to existing systems." },
        { title: "Rapid Iteration", description: "Performance signals guide visual iteration and data-led optimization across the testing matrix." },
      ],
    },
  ],
  launch: [
    {
      title: "Multi-Format Campaigns",
      description: "Extend one modular campaign concept across every format and channel with coordinated delivery.",
      items: [
        { title: "Modular Concept", description: "Build a campaign idea that can flex across video, static, audio, and social outputs." },
        { title: "Asset Map", description: "Plan every required asset and its destination before production begins." },
        { title: "Channel Specifications", description: "Adapt each deliverable to the technical and creative requirements of its channel." },
        { title: "Approvals & Coordination", description: "Use clear approval points and coordinated delivery to keep the campaign moving together." },
      ],
    },
    {
      title: "Global & Localized Launches",
      description: "Adapt campaign ideas for new markets while maintaining visual consistency and local relevance.",
      items: [
        { title: "Visual Translation", description: "Adapt visual language and messaging for each market rather than relying on literal translation alone." },
        { title: "Native Audio", description: "Use localized voice and audio treatments suited to the target market." },
        { title: "Regional Formats", description: "Prepare creative for regional platform specifications, including Kakao, WeChat, and Line where relevant." },
        { title: "Compliance Review", description: "Review localized claims and representations before distribution." },
      ],
    },
    {
      title: "Brand Films & Audio Campaigns",
      description: "Support launch moments with cinematic storytelling and channel-ready audio production.",
      items: [
        { title: "Cinematic Storytelling", description: "Explore visual direction at scale while maintaining consistent brand and product identity." },
        { title: "Emotional Resonance", description: "Use pacing, tone, and visual exploration to build a stronger connection with the audience." },
        { title: "Audio Ads & Streaming", description: "Produce radio, streaming, and podcast deliverables with dynamic insertion, voice options, and compliant mastering." },
      ],
    },
  ],
  overflow: [
    {
      title: "Agency White-Label Capacity",
      description: "Confidential production support that extends agency capacity while remaining invisible to the end client.",
      items: [
        { title: "Confidentiality", description: "NDA-backed collaboration and confidential handling of agency and client materials." },
        { title: "White-Label Communication", description: "Work can be delivered under the agency's brand and communication model." },
        { title: "Rights Transfer", description: "Clear rights transfer supports the agency's client delivery requirements." },
        { title: "Agency-Speed Turnaround", description: "Flexible production capacity designed to match agency timelines and campaign demands." },
      ],
    },
  ],
};

export function SolutionDetails({ category }: { category: SolutionCategory }) {
  return (
    <Section className="border-t border-white/5 py-20">
      <Container>
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 font-display text-3xl font-semibold text-white">
            More ways this solution can work
          </h2>
          <p className="font-sans text-white/50">
            Use these capabilities to shape the engagement around your campaign and operating model.
          </p>
        </div>
        <div className="space-y-12">
          {detailGroups[category].map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 font-display text-2xl font-semibold text-white">{group.title}</h3>
              <p className="mb-6 max-w-3xl font-sans leading-relaxed text-white/50">{group.description}</p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h4 className="mb-2 font-display text-lg font-semibold text-white">{item.title}</h4>
                    <p className="font-sans text-sm leading-relaxed text-white/50">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}