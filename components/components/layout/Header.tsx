"use client";
import { useState, useEffect, useRef } from "react";
import { Link } from "@/components/ui/Link";
import { Menu, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { MobileMenu } from "./MobileMenu";

// ─── Navigation Data ─────────────────────────────────────────────────────────

export const menuGroups = [
  {
    label: "Services",
    links: [
      { label: "Overview", href: "/services" },
      { label: "AI Video Production", href: "/services/ai-video-production" },
      { label: "Ad Creative", href: "/services/ad-creative" },
      { label: "Social Creative", href: "/services/social-creative" },
      { label: "Product Visuals", href: "/services/product-visuals" },
      { label: "Audio & Sound", href: "/services/audio" },
      { label: "Creative Strategy", href: "/services/creative-strategy" },
      { label: "Post-Production", href: "/services/post-production" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { label: "Overview", href: "/solutions" },
      { label: "Monthly Subscription", href: "/solutions/monthly-creative-subscription" },
      { label: "Performance Marketing", href: "/solutions/performance-marketing" },
      { label: "Creative Testing", href: "/solutions/creative-testing" },
      { label: "Enterprise Solutions", href: "/solutions/enterprise" },
      { label: "Localization & Global", href: "/solutions/localization-global" },
      { label: "Product Launch", href: "/solutions/product-launch" },
      { label: "Agency White-Label", href: "/solutions/agency-white-label" },
      { label: "Creative Automation", href: "/solutions/creative-automation" },
    ],
  },
  {
    label: "Industries",
    links: [
      { label: "Overview", href: "/industries" },
      { label: "DTC & Ecommerce", href: "/industries/dtc-ecommerce" },
      { label: "SaaS & Technology", href: "/industries/saas-technology" },
      { label: "Automotive & Mobility", href: "/industries/automotive-mobility" },
      { label: "Food & Beverage", href: "/industries/food-beverage" },
      { label: "Fashion & Lifestyle", href: "/industries/fashion-lifestyle" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Consumer Electronics", href: "/industries/consumer-electronics" },
      { label: "Beauty & Skincare", href: "/industries/beauty-skincare" },
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
      { label: "Reviews", href: "/reviews" },
    ],
  },
  {
    label: "Why Articog",
    links: [
      { label: "Production Economics", href: "/why-articog/production-economics" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "AI Creative Pipeline", href: "/how-it-works/ai-creative-pipeline" },
      { label: "Quality Assurance", href: "/how-it-works/quality-assurance" },
      { label: "Trust Center", href: "/trust" },
      { label: "Responsible AI", href: "/trust/responsible-ai" },
      { label: "Security & Data", href: "/trust/security" },
      { label: "Subprocessors", href: "/legal/subprocessors" },
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
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Press & Media", href: "/press" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "What's New", href: "/whats-new" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

// ─── Dropdown Panel ───────────────────────────────────────────────────────────

// ─── Dropdown Panel ───────────────────────────────────────────────────────────

function DropdownPanel({ 
  group, 
  onClose,
  isOpen 
}: { 
  group: typeof menuGroups[0] | { label: string, links: { label: string, href: string }[] }, 
  onClose: () => void,
  isOpen: boolean
}) {
  const isServices = group.label === "Services";
  
  return (
    <div
      className={`absolute top-full z-[100] pt-0 transition-all duration-300 ease-out will-change-[transform,opacity]
        ${isServices ? 'left-1/2 -translate-x-1/2' : 'left-0'}
        ${isOpen 
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible' 
          : 'opacity-0 -translate-y-2 scale-[0.98] pointer-events-none invisible'}`}
      style={{ 
        width: isServices ? "900px" : "240px",
        transformOrigin: isServices ? "top center" : "top left"
      }}
    >
      <div
        className="w-full rounded-2xl overflow-hidden p-8 mt-2"
        style={{
          background: "rgba(6,6,6,0.98)",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow: "0 20px 48px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          padding: isServices ? "32px" : "12px 8px"
        }}
      >
        {isServices ? (
          <ServicesContent onClose={onClose} />
        ) : (
          <div className="flex flex-col gap-0.5">
            {group.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="font-sans text-[13px] font-medium px-3 py-2 rounded-lg transition-colors duration-150 text-white/60 hover:text-white/90 hover:bg-white/[0.04]"
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

function ServicesContent({ onClose }: { onClose: () => void }) {
  const featured = [
    {
      title: "Brand Films & Commercials",
      desc: "Story-led films and broadcast-ready ads, produced from brief in days.",
      href: "/services/ai-video-production",
      icon: <ArrowUpRight size={14} />
    },
    {
      title: "AI Social & UGC",
      desc: "Platform-native creations for Instagram, TikTok, YouTube and LinkedIn at scale.",
      href: "/work/social",
      icon: <ArrowUpRight size={14} />
    },
    {
      title: "ML Ad Creations",
      desc: "Hundreds of on-brand variants, continuously optimised on performance signals.",
      href: "/services/ad-creative/testing-variants",
      icon: <ArrowUpRight size={14} />
    },
    {
      title: "Creative Automations",
      desc: "Brief-to-delivery workflow integration, 80% fewer manual production steps.",
      href: "/how-it-works/ai-creative-pipeline",
      icon: <ArrowUpRight size={14} />
    }
  ];

  const columns = [
    {
      title: "By Service",
      links: [
        { label: "Brand Films", href: "/services/ai-video-production" },
        { label: "Brand Storytelling", href: "/services/creative-strategy/storyboarding" },
        { label: "Commercials & Ads", href: "/services/ad-creative" },
        { label: "AI Posters & Visuals", href: "/services/product-visuals" },
        { label: "Audio Ads", href: "/services/audio" }
      ]
    },
    {
      title: "By Channel",
      links: [
        { label: "Social Media", href: "/work/social" },
        { label: "Paid Advertising", href: "/services/ad-creative" },
        { label: "Streaming Audio", href: "/services/audio" },
        { label: "OOH & Print", href: "/services/product-visuals" },
        { label: "YouTube & Video", href: "/services/ai-video-production" }
      ]
    },
    {
      title: "By Goal",
      links: [
        { label: "Brand Awareness", href: "/solutions/multi-format-campaigns" },
        { label: "Performance Marketing", href: "/solutions/performance-marketing" },
        { label: "Product Launch", href: "/solutions/product-launch" },
        { label: "Content at Scale", href: "/solutions/monthly-creative-subscription" }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { label: "View All Services", href: "/services" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Case Studies", href: "/work" },
        { label: "Book a Demo", href: "/book-a-demo" }
      ]
    }
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-6 mb-8">
        {featured.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="group flex flex-col gap-3 p-4 rounded-xl hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                {item.icon}
              </div>
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-white mb-1 tracking-tight">{item.title}</h4>
              <p className="text-[12px] leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="h-px w-full bg-white/[0.06] mb-8" />
      <div className="grid grid-cols-4 gap-8">
        {columns.map((col) => (
          <div key={col.title}>
            <h5 className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-4">{col.title}</h5>
            <div className="flex flex-col gap-3">
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors w-fit"
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
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!activeGroup) return;
      const target = event.target as HTMLElement;
      if (target.closest('.nav-group-container')) return;
      setActiveGroup(null);
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [activeGroup]);

  const openGroup = (label: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveGroup(label);
  };
  
  const scheduleClose = () => {
    leaveTimer.current = setTimeout(() => setActiveGroup(null), 300);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-30 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.90)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        }}
      >
        <Container className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-base font-semibold text-white hover:text-white/75 transition-colors">
            Articog
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {menuGroups.map((group) => (
              <div
                key={group.label}
                className="relative nav-group-container"
                onMouseEnter={() => openGroup(group.label)}
                onMouseLeave={scheduleClose}
                onClick={(e) => e.stopPropagation()}
                style={{ paddingBottom: '20px', marginBottom: '-20px', zIndex: activeGroup === group.label ? 100 : 1 }}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={activeGroup === group.label}
                  onClick={() => setActiveGroup(activeGroup === group.label ? null : group.label)}
                  className="inline-flex items-center gap-1 px-2 xl:px-3 py-2 rounded-lg font-sans text-[13px] font-medium transition-colors duration-150"
                  style={{ color: activeGroup === group.label ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)" }}
                >
                  {group.label}
                  <ChevronDown
                    size={11}
                    className="opacity-30 transition-transform duration-200"
                    style={{ transform: activeGroup === group.label ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                <DropdownPanel 
                  group={group} 
                  onClose={() => setActiveGroup(null)} 
                  isOpen={activeGroup === group.label}
                />
              </div>
            ))}

            <div
              className="relative nav-group-container"
              onMouseEnter={() => openGroup("Pricing")}
              onMouseLeave={scheduleClose}
              style={{ paddingBottom: '20px', marginBottom: '-20px', zIndex: activeGroup === "Pricing" ? 100 : 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-haspopup="true"
                aria-expanded={activeGroup === "Pricing"}
                onClick={() => setActiveGroup(activeGroup === "Pricing" ? null : "Pricing")}
                className="inline-flex items-center gap-1 px-2 xl:px-3 py-2 rounded-lg font-sans text-[13px] font-medium transition-colors duration-150"
                style={{ color: activeGroup === "Pricing" ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)" }}
              >
                Pricing
                <ChevronDown
                  size={11}
                  className="opacity-30 transition-transform duration-200"
                  style={{ transform: activeGroup === "Pricing" ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              <DropdownPanel 
                group={{ 
                  label: "Pricing", 
                  links: [
                    { label: "Pricing Overview", href: "/pricing" },
                    { label: "Monthly Plans", href: "/pricing/monthly-plans" },
                    { label: "Pilot Project", href: "/pricing/pilot" },
                    { label: "Pricing FAQ", href: "/pricing/faq" }
                  ] 
                }}
                onClose={() => setActiveGroup(null)}
                isOpen={activeGroup === "Pricing"}
              />
            </div>
          </nav>

          {/* Desktop & Mobile CTA */}
          <div className="flex items-center gap-3">
            <Button asChild variant="primary" size="sm" className="hidden sm:flex">
              <Link href="/book-a-demo">Book a Demo</Link>
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-lg border border-white/[0.10] text-white/55 hover:text-white/90 transition-colors"
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
