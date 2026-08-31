import { Link } from "@/components/ui/Link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

export default function SitemapPage() {
  const sitemapData = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Press & Media", href: "/press" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Services Hub", href: "/services" },
        { label: "AI Video Production", href: "/services/ai-video-production" },
        { label: "Ad Creative", href: "/services/ad-creative" },
        { label: "Social Creative", href: "/services/social-creative" },
        { label: "Product Visuals", href: "/services/product-visuals" },
        { label: "Audio", href: "/services/audio" },
        { label: "Creative Strategy", href: "/services/creative-strategy" },
        { label: "Post-Production", href: "/services/post-production" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Solutions Hub", href: "/solutions" },
        { label: "Monthly Subscription", href: "/solutions/monthly-creative-subscription" },
        { label: "Product Launch", href: "/solutions/product-launch" },
        { label: "Creative Testing", href: "/solutions/creative-testing" },
        { label: "Multi-Format Campaigns", href: "/solutions/multi-format-campaigns" },
        { label: "Enterprise Solutions", href: "/solutions/enterprise" },
      ]
    },
    {
      title: "Industries",
      links: [
        { label: "Industries Hub", href: "/industries" },
        { label: "DTC & Ecommerce", href: "/industries/dtc-ecommerce" },
        { label: "SaaS & Technology", href: "/industries/saas-technology" },
        { label: "Real Estate", href: "/industries/real-estate" },
        { label: "Consumer Electronics", href: "/industries/consumer-electronics" },
        { label: "Beauty & Skincare", href: "/industries/beauty-skincare" },
      ]
    },
    {
      title: "Work",
      links: [
        { label: "Work Hub", href: "/work" },
        { label: "Video Ads", href: "/work/video-ads" },
        { label: "Social Gallery", href: "/work/social" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Resources Hub", href: "/resources" },
        { label: "Blog", href: "/blog" },
        { label: "Customer Stories", href: "/customers" },
        { label: "Reviews", href: "/reviews" },
        { label: "AI Ad Library", href: "/ai-ad-library" },
        { label: "Help Center", href: "/help" },
        { label: "Guides", href: "/guides" },
        { label: "Playbooks", href: "/playbooks" },
        { label: "Reports", href: "/reports" },
        { label: "Events", href: "/events" },
        { label: "Glossary", href: "/glossary" },
      ]
    },
    {
      title: "Company Trust",
      links: [
        { label: "Why Articog", href: "/why-articog" },
        { label: "Trust Center", href: "/trust" },
        { label: "AI & IP Ownership", href: "/trust/ai-and-ip" },
        { label: "Security & Data Protection", href: "/trust/security" },
        { label: "Responsible AI", href: "/trust/responsible-ai" },
        { label: "Pricing Hub", href: "/pricing" },
        { label: "Monthly Plans", href: "/pricing/monthly-plans" },
        { label: "Pilot Projects", href: "/pricing/pilot" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms of Service", href: "/legal/terms-of-service" },
        { label: "DPA", href: "/legal/dpa" },
        { label: "MSA", href: "/legal/msa" },
        { label: "Cookie Policy", href: "/legal/cookie-policy" },
        { label: "Accessibility", href: "/legal/accessibility" },
        { label: "Copyright", href: "/copyright" },
        { label: "Privacy Choices", href: "/privacy-choices" },
        { label: "California Privacy Notice", href: "/privacy/california" },
        { label: "Email Preferences", href: "/email-preferences" },
        { label: "Subprocessors", href: "/legal/subprocessors" },
        { label: "Data Rights Request", href: "/privacy/request" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Sitemap</h1>
            <p className="text-zinc-400 text-lg mb-16 max-w-2xl">
              Navigate all pages across the Articog platform. Find resources, services, and legal documentation in one place.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {sitemapData.map((section) => (
                <div key={section.title} className="space-y-6">
                  <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-2">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link 
                          to={link.href} 
                          className="text-zinc-300 hover:text-white transition-colors text-[17px] font-medium block w-fit"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
