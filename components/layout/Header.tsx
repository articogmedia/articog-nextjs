"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "@/components/ui/Link";
import {
  ArrowUpRight,
  ChevronDown,
  Film,
  Menu,
  Smartphone,
  TestTube2,
  Workflow,
} from "lucide-react";
import { Button, Container } from "@/components/ui";
import { MobileMenu } from "./MobileMenu";

// ─── Navigation Data ─────────────────────────────────────────────────────────

export const menuGroups = [
  {
    label: "Services",
    links: [
      { label: "Overview", href: "/services" },
      {
        label: "AI Video Production",
        href: "/services/ai-video-production",
      },
      { label: "Ad Creative", href: "/services/ad-creative" },
      { label: "Social Creative", href: "/services/social-creative" },
      { label: "Product Visuals", href: "/services/product-visuals" },
      { label: "Audio & Sound", href: "/services/audio" },
      {
        label: "Creative Strategy",
        href: "/services/creative-strategy",
      },
      {
        label: "Post-Production",
        href: "/services/post-production",
      },
    ],
  },
  {
    label: "Solutions",
    links: [
      { label: "Overview", href: "/solutions" },
      {
        label: "Monthly Subscription",
        href: "/solutions/monthly-creative-subscription",
      },
      {
        label: "Performance Marketing",
        href: "/solutions/performance-marketing",
      },
      {
        label: "Creative Testing",
        href: "/solutions/creative-testing",
      },
      {
        label: "Enterprise Solutions",
        href: "/solutions/enterprise",
      },
      {
        label: "Localization & Global",
        href: "/solutions/localization-global",
      },
      {
        label: "Product Launch",
        href: "/solutions/product-launch",
      },
      {
        label: "Agency White-Label",
        href: "/solutions/agency-white-label",
      },
      {
        label: "Creative Automation",
        href: "/solutions/creative-automation",
      },
    ],
  },
  {
    label: "Industries",
    links: [
      { label: "Overview", href: "/industries" },
      {
        label: "DTC & Ecommerce",
        href: "/industries/dtc-ecommerce",
      },
      {
        label: "SaaS & Technology",
        href: "/industries/saas-technology",
      },
      {
        label: "Automotive & Mobility",
        href: "/industries/automotive-mobility",
      },
      {
        label: "Food & Beverage",
        href: "/industries/food-beverage",
      },
      {
        label: "Fashion & Lifestyle",
        href: "/industries/fashion-lifestyle",
      },
      {
        label: "Real Estate",
        href: "/industries/real-estate",
      },
      {
        label: "Consumer Electronics",
        href: "/industries/consumer-electronics",
      },
      {
        label: "Beauty & Skincare",
        href: "/industries/beauty-skincare",
      },
    ],
  },
  {
    label: "Work",
    links: [
      { label: "Portfolio Overview", href: "/work" },
      { label: "Video Ads", href: "/work/video-ads" },
      { label: "Social & UGC", href: "/work/social" },
      { label: "AI Ad Library", href: "/ai-ad-library" },
      { label: "Customer Stories", href: "/customers" },
    ],
  },
  {
    label: "Why Articog",
    links: [
      {
        label: "Production Economics",
        href: "/why-articog/production-economics",
      },
      {
        label: "How It Works",
        href: "/how-it-works",
      },
      {
        label: "AI Creative Pipeline",
        href: "/how-it-works/ai-creative-pipeline",
      },
      {
        label: "Quality Assurance",
        href: "/how-it-works/quality-assurance",
      },
      {
        label: "Trust Center",
        href: "/trust",
      },
      {
        label: "Responsible AI",
        href: "/trust/responsible-ai",
      },
      {
        label: "Security & Data",
        href: "/trust/security",
      },
      {
        label: "Subprocessors",
        href: "/legal/subprocessors",
      },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Resources Hub", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Playbooks", href: "/playbooks" },
      { label: "Reports", href: "/reports" },
      { label: "Events & Webinars", href: "/events" },
      { label: "Glossary", href: "/glossary" },
      { label: "Help Center", href: "/help" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press & Media", href: "/press" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

// ─── Dropdown Panel ───────────────────────────────────────────────────────────

function DropdownPanel({
  group,
  onClose,
  isOpen,
}: {
  group:
    | (typeof menuGroups)[0]
    | {
        label: string;
        links: { label: string; href: string }[];
      };
  onClose: () => void;
  isOpen: boolean;
}) {
  const isServices = group.label === "Services";

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={
        isServices
          ? "fixed left-1/2 top-16 z-[99999] -translate-x-1/2"
          : "absolute left-0 top-full z-[99999]"
      }
      style={{
        width: isServices ? "900px" : "260px",
        maxWidth: isServices ? "calc(100vw - 32px)" : undefined,
        paddingTop: "12px",
      }}
      onClick={(e) => e.stopPropagation()}
      onMouseEnter={clearTimeoutOnMouseEnter}
    >
      <div
        className="w-full overflow-hidden rounded-2xl"
        style={{
          background: "rgba(6,6,6,0.98)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.05)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          padding: isServices ? "32px" : "12px",
        }}
      >
        {isServices ? (
          <ServicesContent onClose={onClose} />
        ) : (
          <div className="flex flex-col gap-1">
            {group.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => onClose()}
                className="block rounded-lg px-3 py-2 font-sans text-[13px] font-medium text-white/60 transition-colors duration-150 hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function clearTimeoutOnMouseEnter() {
  // Keeps the dropdown open while moving the mouse into it.
}

// ─── Services Dropdown Content ────────────────────────────────────────────────

function ServicesContent({
  onClose,
}: {
  onClose: () => void;
}) {
  const featured = [
    {
      title: "Brand Films & Commercials",
      desc: "Story-led films and broadcast-ready ads, produced from brief in days.",
      href: "/services/ai-video-production",
      icon: <Film size={14} />,
    },
    {
      title: "AI Social & UGC",
      desc: "Platform-native creations for Instagram, TikTok, YouTube and LinkedIn at scale.",
      href: "/work/social",
      icon: <Smartphone size={14} />,
    },
    {
      title: "ML Ad Creations",
      desc: "Hundreds of on-brand variants, continuously optimised on performance signals.",
      href: "/services/ad-creative/testing-variants",
      icon: <TestTube2 size={14} />,
    },
    {
      title: "Creative Automations",
      desc: "Brief-to-delivery workflow integration, 80% fewer manual production steps.",
      href: "/how-it-works/ai-creative-pipeline",
      icon: <Workflow size={14} />,
    },
  ];

  const columns = [
    {
      title: "By Service",
      links: [
        {
          label: "Brand Films",
          href: "/services/ai-video-production",
        },
        {
          label: "Brand Storytelling",
          href: "/services/creative-strategy/storyboarding",
        },
        {
          label: "Commercials & Ads",
          href: "/services/ad-creative",
        },
        {
          label: "AI Posters & Visuals",
          href: "/services/product-visuals",
        },
        {
          label: "Audio Ads",
          href: "/services/audio",
        },
      ],
    },
    {
      title: "By Channel",
      links: [
        {
          label: "Social Media",
          href: "/work/social",
        },
        {
          label: "Paid Advertising",
          href: "/services/ad-creative",
        },
        {
          label: "Streaming Audio",
          href: "/services/audio",
        },
        {
          label: "OOH & Print",
          href: "/services/product-visuals",
        },
        {
          label: "YouTube & Video",
          href: "/services/ai-video-production",
        },
      ],
    },
    {
      title: "By Goal",
      links: [
        {
          label: "Brand Awareness",
          href: "/solutions/multi-format-campaigns",
        },
        {
          label: "Performance Marketing",
          href: "/solutions/performance-marketing",
        },
        {
          label: "Product Launch",
          href: "/solutions/product-launch",
        },
        {
          label: "Content at Scale",
          href: "/solutions/monthly-creative-subscription",
        },
      ],
    },
    {
      title: "Quick Links",
      links: [
        {
          label: "View All Services",
          href: "/services",
        },
        {
          label: "How It Works",
          href: "/how-it-works",
        },
        {
          label: "Case Studies",
          href: "/work",
        },
        {
          label: "Book a Demo",
          href: "/book-a-demo",
        },
      ],
    },
  ];

  return (
    <>
      {/* Featured Services */}
      <div className="mb-8 grid grid-cols-4 gap-6">
        {featured.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="group flex flex-col gap-3 rounded-xl p-4 transition-colors hover:bg-white/[0.04]"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-zinc-400 transition-colors group-hover:text-white">
                {item.icon}
              </div>
              <ArrowUpRight size={14} className="text-zinc-500 transition-colors group-hover:text-white" />
            </div>

            <div>
              <h4 className="mb-1 text-[14px] font-bold tracking-tight text-white">
                {item.title}
              </h4>

              <p className="text-[12px] leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="mb-8 h-px w-full bg-white/[0.06]" />

      {/* Service Categories */}
      <div className="grid grid-cols-4 gap-8">
        {columns.map((col) => (
          <div key={col.title}>
            <h5 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
              {col.title}
            </h5>

            <div className="flex flex-col gap-3">
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="w-fit text-[13px] font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!activeGroup) {
        return;
      }

      const target = event.target as Node;

      if (
        headerRef.current &&
        !headerRef.current.contains(target)
      ) {
        setActiveGroup(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [activeGroup]);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openGroup = (label: string) => {
    clearCloseTimer();
    setActiveGroup(label);
  };

  const scheduleClose = () => {
    clearCloseTimer();

    closeTimer.current = setTimeout(() => {
      setActiveGroup(null);
    }, 250);
  };

  const toggleGroup = (label: string) => {
    clearCloseTimer();

    setActiveGroup((current) =>
      current === label ? null : label
    );
  };

  const closeDropdown = () => {
    clearCloseTimer();
    setActiveGroup(null);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed left-0 right-0 top-0 z-[1000] transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(0,0,0,0.90)"
            : "transparent",
          backdropFilter: scrolled
            ? "blur(16px)"
            : "none",
          WebkitBackdropFilter: scrolled
            ? "blur(16px)"
            : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
        }}
      >
        <Container className="relative flex h-16 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="font-display text-base font-semibold text-white transition-colors hover:text-white/75"
            onClick={closeDropdown}
          >
            Articog
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {menuGroups.map((group) => (
              <div
                key={group.label}
                className="relative nav-group-container"
                onMouseEnter={() => openGroup(group.label)}
                onMouseLeave={scheduleClose}
                onClick={(e) => e.stopPropagation()}
                style={{
                  zIndex:
                    activeGroup === group.label
                      ? 99999
                      : 1,
                }}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  onMouseEnter={() => openGroup(group.label)}
                  aria-expanded={
                    activeGroup === group.label
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleGroup(group.label);
                  }}
                  className="inline-flex items-center gap-1 rounded-lg px-2 py-2 font-sans text-[13px] font-medium transition-colors duration-150 xl:px-3"
                  style={{
                    color:
                      activeGroup === group.label
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.55)",
                  }}
                >
                  {group.label}

                  <ChevronDown
                    size={11}
                    className="opacity-30 transition-transform duration-200"
                    style={{
                      transform:
                        activeGroup === group.label
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </button>

                <DropdownPanel
                  group={group}
                  onClose={closeDropdown}
                  isOpen={
                    activeGroup === group.label
                  }
                />
              </div>
            ))}

            {/* Pricing */}

            <div
              className="relative nav-group-container"
              onMouseEnter={() => openGroup("Pricing")}
              onMouseLeave={scheduleClose}
              onClick={(e) => e.stopPropagation()}
              style={{
                zIndex:
                  activeGroup === "Pricing"
                    ? 99999
                    : 1,
              }}
            >
              <button
                type="button"
                aria-haspopup="true"
                onMouseEnter={() => openGroup("Pricing")}
                aria-expanded={
                  activeGroup === "Pricing"
                }
                onClick={(e) => {
                  e.stopPropagation();
                  toggleGroup("Pricing");
                }}
                className="inline-flex items-center gap-1 rounded-lg px-2 py-2 font-sans text-[13px] font-medium transition-colors duration-150 xl:px-3"
                style={{
                  color:
                    activeGroup === "Pricing"
                      ? "rgba(255,255,255,0.95)"
                      : "rgba(255,255,255,0.55)",
                }}
              >
                Pricing

                <ChevronDown
                  size={11}
                  className="opacity-30 transition-transform duration-200"
                  style={{
                    transform:
                      activeGroup === "Pricing"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>

              <DropdownPanel
                group={{
                  label: "Pricing",
                  links: [
                    {
                      label: "Pricing Overview",
                      href: "/pricing",
                    },
                    {
                      label: "Monthly Plans",
                      href: "/pricing/monthly-plans",
                    },
                    {
                      label: "Pilot Project",
                      href: "/pricing/pilot",
                    },
                    {
                      label: "Pricing FAQ",
                      href: "/pricing/faq",
                    },
                  ],
                }}
                onClose={closeDropdown}
                isOpen={
                  activeGroup === "Pricing"
                }
              />
            </div>
          </nav>

          {/* CTA */}

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="primary"
              size="sm"
              className="hidden sm:flex"
            >
              <Link
                href="/book-a-demo"
                onClick={closeDropdown}
              >
                Book a Demo
              </Link>
            </Button>

            {/* Mobile hamburger */}

            <button
              type="button"
              onClick={() => {
                setActiveGroup(null);
                setMobileOpen(true);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.10] text-white/55 transition-colors hover:text-white/90 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={17} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}