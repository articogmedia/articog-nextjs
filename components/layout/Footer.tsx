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
    title: "Explore",
    links: [
      { label: "Services", href: "/services" },
      { label: "Solutions", href: "/solutions" },
      { label: "Industries", href: "/industries" },
      { label: "Work", href: "/work" },
      { label: "AI Ad Library", href: "/ai-ad-library" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Why Articog", href: "/why-articog" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Trust Center", href: "/trust" },
      { label: "Help Center", href: "/help" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press & Media", href: "/press" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Contact", href: "/contact" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Customer Stories", href: "/customers" },
      { label: "Book a Demo", href: "/book-a-demo" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Accessibility", href: "/legal/accessibility" },
    ],
  },
];

export function Footer() {
  return (
    /* Adapted from Tailark's Footer component published on 21st.dev:
       https://21st.dev/@meschacirung/components/footer */
    <footer
      style={{ background: "#000000" }}
      className="border-t border-white/5 pt-16"
    >
      <Container className="py-14">
        <div className="mb-12 rounded-2xl border border-white/8 bg-white/[0.02] p-5 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Join the Articog mailing list
              </p>
              <p className="mt-2 max-w-xl text-sm text-white/55">
                Get creative insights, production ideas, and launch updates from the Articog team.
              </p>
            </div>

            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
            >
              Subscribe
            </Link>
          </div>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <Link
              href="https://articog.com"
              className="font-display text-base font-semibold text-white/90 hover:text-white transition-colors"
            >
              Articog
            </Link>

            <p className="font-sans text-sm leading-relaxed max-w-xs text-white/40">
              AI creative production for growth-stage brands.
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
                    className="font-sans text-sm text-muted-safe hover:text-white/80 transition-colors w-fit"
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
          className="mt-20 grid gap-6 pt-8 text-center md:grid-cols-[minmax(0,1fr)_auto_minmax(10rem,1fr)] md:items-center md:text-left"
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

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:col-start-2 md:row-start-1">
            <Link
              href="/legal/terms-of-service"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em] md:text-[11px] md:text-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Terms
            </Link>

            <Link
              href="/privacy-policy"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em] md:text-[11px] md:text-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Privacy
            </Link>

            <Link
              href="/legal/accessibility"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em] md:text-[11px] md:text-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Accessibility
            </Link>

            <Link
              href="/copyright"
              className="font-sans text-[10px] text-white/25 hover:text-white transition-colors uppercase tracking-[0.15em] md:text-[11px] md:text-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Copyright
            </Link>

          </div>
        </div>
      </Container>
    </footer>
  );
}