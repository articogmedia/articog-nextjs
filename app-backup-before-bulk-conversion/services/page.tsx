import { Container, Section, Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

const serviceGroups = [
  {
    category: "Video",
    items: [
      {
        title: "AI Video Production",
        href: "/services/ai-video-production",
        description:
          "Premium cinematic video generated with state-of-the-art AI.",
      },
      {
        title: "Brand Films",
        href: "/services/ai-video-production/brand-films",
        description:
          "Evocative, high-fidelity films that define your brand identity.",
      },
      {
        title: "Product Commercials",
        href: "/services/ai-video-production/product-commercials",
        description:
          "Striking product showcases built for conversion and impact.",
      },
      {
        title: "Performance Ads",
        href: "/services/ai-video-production/performance-ads",
        description:
          "Direct-response video creative optimized for cross-channel ROI.",
      },
      {
        title: "Social & Reel Production",
        href: "/services/ai-video-production/social-reels",
        description:
          "Fast-paced, vertically-optimized content for modern platforms.",
      },
      {
        title: "Product Launch Videos",
        href: "/services/ai-video-production/product-launch",
        description:
          "High-impact announcement films to build momentum.",
      },
      {
        title: "Localization & Variants",
        href: "/services/ai-video-production/localization",
        description:
          "Adapt campaigns for global markets with voice localization.",
      },
    ],
  },

  {
    category: "Ad Creative",
    items: [
      {
        title: "Ad Creative",
        href: "/services/ad-creative",
        description:
          "Scalable static and video assets for global performance marketing.",
      },
      {
        title: "Performance Video Ads",
        href: "/services/ai-video-production/performance-ads",
        description:
          "High-velocity video testing and production for paid media.",
      },
      {
        title: "Testing & Variants",
        href: "/services/ad-creative/testing-variants",
        description:
          "Structured, hypothesis-driven creative testing for paid campaigns.",
      },
      {
        title: "Campaign Key Visuals",
        href: "/services/ad-creative/key-visuals",
        description:
          "Developing the core visual system that anchors a campaign across channels.",
      },
    ],
  },

  {
    category: "Social",
    items: [
      {
        title: "Social Creative",
        href: "/services/social-creative",
        description:
          "Data-driven creative concepts designed for platform engagement.",
      },
      {
        title: "Monthly Social Content",
        href: "/services/social-creative/monthly-content",
        description:
          "Consistent content cycles to maintain your brand presence.",
      },
      {
        title: "Creative Repurposing",
        href: "/services/social-creative/repurposing",
        description:
          "Turn existing content into new formats and channels intelligently.",
      },
    ],
  },

  {
    category: "Product Visuals",
    items: [
      {
        title: "Product Visual Content",
        href: "/services/product-visuals",
        description:
          "Dynamic product imagery for e-commerce and marketing.",
      },
      {
        title: "AI Product Photography",
        href: "/services/product-visuals/product-photography",
        description:
          "Photorealistic product scenes without the physical studio.",
      },
      {
        title: "Custom Image Libraries",
        href: "/services/product-visuals/image-libraries",
        description:
          "Build large, consistent libraries of on-brand product images.",
      },
      {
        title: "E-commerce Visuals",
        href: "/services/product-visuals/ecommerce",
        description:
          "Visuals built for conversion on your site and global marketplaces.",
      },
    ],
  },

  {
    category: "Audio",
    items: [
      {
        title: "Audio & Sound",
        href: "/services/audio",
        description:
          "Complete audio production, from cinematic scores to AI voiceover.",
      },
      {
        title: "AI Voiceover",
        href: "/services/audio/ai-voiceover",
        description:
          "Hyper-realistic synthetic voice production with full rights clearance.",
      },
      {
        title: "Music & Sound Design",
        href: "/services/audio/music-sound-design",
        description:
          "Custom scoring and immersive soundscapes for cinematic impact.",
      },
    ],
  },

  {
    category: "Strategy",
    items: [
      {
        title: "Creative Strategy & Concepting",
        href: "/services/creative-strategy",
        description:
          "Strategic frameworks to guide your creative production engine.",
      },
      {
        title: "Campaign Strategy",
        href: "/services/creative-strategy/campaigns",
        description:
          "Planning full campaign systems for cross-channel impact.",
      },
      {
        title: "Concept Development",
        href: "/services/creative-strategy/concept-development",
        description:
          "Exploring multiple creative directions before committing to production.",
      },
      {
        title: "Storyboarding & Previs",
        href: "/services/creative-strategy/storyboarding",
        description:
          "Visualizing and sequencing every shot before production begins.",
      },
    ],
  },

  {
    category: "Post-Production",
    items: [
      {
        title: "AI Post-Production",
        href: "/services/post-production",
        description:
          "Professional editing, color grading, and technical finishing.",
      },
      {
        title: "Motion Graphics",
        href: "/services/post-production/motion-graphics",
        description:
          "Animated titles, callouts, and branded elements for video.",
      },
      {
        title: "Upscaling & Mastering",
        href: "/services/post-production/mastering",
        description:
          "Technical mastering for high-resolution delivery.",
      },
      {
        title: "AI Compositing",
        href: "/services/post-production/ai-compositing",
        description:
          "Integrating assets seamlessly into complex cinematic scenes.",
      },
      {
        title: "Video Editing",
        href: "/services/post-production/video-editing",
        description:
          "Smart narrative assembly and sequence optimization.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section
        size="lg"
        className="relative min-h-[60vh] overflow-hidden pt-32 md:pt-40"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            playsInline
            loop
            controls={false}
            preload="metadata"
            className="h-full w-full object-cover opacity-40"
            poster="https://res.cloudinary.com/hmy5ctzy/video/upload/q_auto:best,f_auto,so_0,w_1920/v1786976270/web_1_1_1_1.jpg"
          >
            <source
              src="https://res.cloudinary.com/hmy5ctzy/video/upload/q_auto:best,f_auto/v1786976270/web_1_1_1_1.mp4"
              type="video/mp4"
            />
          </video>

          <div
            className="absolute inset-0 z-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          />
        </div>

        <Container className="relative z-20">
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Services
            </span>

            <h1
              className="font-display font-semibold text-white"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Every creative format, delivered.
            </h1>

            <p
              className="mx-auto mt-6 max-w-2xl font-sans text-base md:text-lg"
              style={{
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.65,
              }}
            >
              From brand films to performance ad variants — one AI-native
              production partner for every format your brand needs.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <div className="pb-24">
        {serviceGroups.map((group) => (
          <Section key={group.category} size="md" className="py-12">
            <Container>
              <h2
                className="mb-10 font-display text-2xl font-semibold text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                {group.category}
              </h2>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="group flex flex-col rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <h3
                      className="font-display text-lg font-semibold text-white transition-colors duration-200 group-hover:text-white/90"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="mt-3 font-sans text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.50)" }}
                    >
                      {service.description}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-sans text-sm font-medium text-accent transition-colors duration-200 group-hover:text-accent-hover">
                      Learn more
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </span>
                  </a>
                ))}
              </div>
            </Container>
          </Section>
        ))}
      </div>

      {/* CTA */}
      <Section size="lg" className="border-t border-white/[0.05]">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2
              className="mb-6 font-display font-semibold text-white"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.028em",
              }}
            >
              Not sure where to start?
            </h2>

            <Button asChild variant="primary" size="lg">
              <a href="/book-a-demo">
                Book a Demo
                <ArrowRight size={15} />
              </a>
            </Button>

            <p
              className="mt-8 font-sans text-xs"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              No commitment required. First conversation is free.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}