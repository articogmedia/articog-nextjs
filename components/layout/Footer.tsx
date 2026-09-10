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
    href: "https://www.linkedin.com/company/articog/",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@articogcom",
    Icon: Youtube,
  },
  {
    label: "X",
    href: "https://x.com/articogcom",
    Icon: XIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/articogcom/",
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
      { label: "Audio", href: "/services/audio" },
      { label: "Creative Strategy", href: "/services/creative-strategy" },
      { label: "Post-Production", href: "/services/post-production" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Overview", href: "/solutions" },
      { label: "Monthly Subscription", href: "/solutions/monthly-creative-subscription" },
      { label: "Performance Marketing", href: "/solutions/performance-marketing" },
      { label: "Enterprise", href: "/solutions/enterprise" },
      { label: "Product Launch", href: "/solutions/product-launch" },
      { label: "Creative Team Overflow", href: "/solutions/creative-team-overflow" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "AI Ad Library", href: "/ai-ad-library" },
      { label: "Help Center", href: "/help" },
      { label: "Why Articog", href: "/why-articog" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Trust Center", href: "/trust" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Customers", href: "/customers" },
      { label: "Press & Media", href: "/press" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Contact", href: "/contact" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Cookie Policy", href: "/legal/cookie-policy" },
      { label: "Accessibility", href: "/legal/accessibility" },
      { label: "Copyright", href: "/copyright" },
      { label: "California Privacy", href: "/privacy/california" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{ background: "#000000" }}
      className="border-t border-white/10"
    >
      <Container className="py-10 md:py-12">
        <div className="mb-9 pb-6 md:mb-10 md:pb-8" style={{ borderBottom: `1px solid ${border}` }}>
          <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1.2fr]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-left font-display text-sm font-semibold tracking-[0.02em] text-white/90 hover:text-white"
            >
              <span className="grid h-3.5 w-3.5 place-items-center rounded-[2px] border border-white/20 bg-white/10 text-[8px] text-white/70">
                A
              </span>
              Articog
            </Link>

            <p className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-white/55 md:text-[10px]">
              Join the Articog mailing list
            </p>

            <form className="ml-auto flex w-full max-w-[360px] items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
              <input
                type="email"
                aria-label="Email address"
                placeholder="email@example.com"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none"
              />
              <button
                type="button"
                className="border-l border-white/10 bg-white/6 px-4 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white/75 transition-colors hover:bg-white/10"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))_1.2fr]">
          {footerNavSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {section.title}
              </p>

              <nav className="flex flex-col gap-1.5">
                {section.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          <div className="space-y-3 lg:justify-self-end">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Social
            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.02] text-white/60 transition-colors hover:border-white/20 hover:text-white"
                >
                  <s.Icon size={14} />
                </a>
              ))}
            </div>

            <div className="pt-5 space-y-2">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Contact
              </p>
              <p className="font-sans text-sm text-white/60">info@articog.com</p>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/20 hover:bg-white/10"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mt-10 grid items-center gap-3 border-t pt-5 text-center md:grid-cols-[auto_1fr_auto] md:text-left"
          style={{ borderTop: `1px solid ${border}` }}
        >
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="grid h-4 w-4 place-items-center rounded-[2px] border border-white/20 bg-white/10 text-[7px] text-white/70">
              A
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/45">
              Articog
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-center">
            <Link href="/legal/terms-of-service" className="font-sans text-[10px] uppercase tracking-[0.14em] text-white/45 hover:text-white">
              Terms
            </Link>
            <Link href="/privacy-policy" className="font-sans text-[10px] uppercase tracking-[0.14em] text-white/45 hover:text-white">
              Privacy
            </Link>
            <Link href="/legal/accessibility" className="font-sans text-[10px] uppercase tracking-[0.14em] text-white/45 hover:text-white">
              Accessibility
            </Link>
            <Link href="/copyright" className="font-sans text-[10px] uppercase tracking-[0.14em] text-white/45 hover:text-white">
              Copyright
            </Link>
          </div>

          <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-white/35 md:text-right">
            &copy; {new Date().getFullYear()} Articog
          </p>
        </div>
      </Container>
    </footer>
  );
}