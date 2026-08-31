import { Link } from "@/components/ui/Link";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import { Container } from "@/components/ui";

const border = "rgba(255,255,255,0.08)";

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function MediumIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/articog/",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@articogcom",
    Icon: Youtube,
  },
  {
    label: "X",
    href: "https://twitter.com/articogcom",
    Icon: XIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/articogcom",
    Icon: Instagram,
  },
  {
    label: "Medium",
    href: "https://medium.com/@articog.com",
    Icon: MediumIcon,
  },
];

const footerNavSections = [
  {
    title: "Services",
    links: [
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
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Playbooks", href: "/playbooks" },
      { label: "Reports", href: "/reports" },
      { label: "AI Ad Library", href: "/ai-ad-library" },
      { label: "Help Center", href: "/help" },
      { label: "Events", href: "/events" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Press & Media", href: "/press" },
      { label: "Trust Center", href: "/trust" },
      { label: "Contact", href: "/contact" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{ background: "#000000" }}
      className="border-t border-white/5 pt-16"
    >
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <Link
              href="/"
              className="font-display text-base font-semibold text-white/90 hover:text-white transition-colors"
            >
              Articog
            </Link>

            <p className="font-sans text-sm leading-relaxed max-w-xs text-white/40">
              Creative AI Production. Built to Scale. High-performance
              creative for growth-stage brands.
            </p>

            <div className="flex items-center gap-3.5 pt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/35 hover:text-white/75 transition-colors"
                >
                  <s.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Nav Sections */}
          {footerNavSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-white/28">
                {section.title}
              </p>

              <nav className="flex flex-col gap-2">
                {section.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-sm text-white/40 hover:text-white/80 transition-colors w-fit"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          style={{ borderTop: `1px solid ${border}` }}
        >
          <div className="flex flex-col gap-1">
            <p className="font-sans text-xs text-white/25">
              &copy; {new Date().getFullYear()} Articog. All rights reserved.
            </p>

            <p className="font-sans text-[10px] text-white/20 uppercase tracking-widest">
              Creative AI Production for Modern Marketing
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/legal/terms-of-service"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              Terms
            </Link>

            <Link
              href="/legal/privacy-policy"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              Privacy
            </Link>

            <Link
              href="/legal/dpa"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              DPA
            </Link>

            <Link
              href="/legal/msa"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              MSA
            </Link>

            <Link
              href="/legal/cookie-policy"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              Cookies
            </Link>

            <Link
              href="/legal/accessibility"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              Accessibility
            </Link>

            <Link
              href="/copyright"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              Copyright
            </Link>

            <Link
              href="/privacy-choices"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              Privacy Choices
            </Link>

            <Link
              href="/privacy/california"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              CA Notice
            </Link>

            <Link
              href="/email-preferences"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              Email Prefs
            </Link>

            <Link
              href="/privacy/request"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              Data Request
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}