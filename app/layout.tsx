// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Sora } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Articog | Creative AI Production Company | AI Brand Films & Ad Creations",
  description:
    "Articog is a Creative AI Production Company. We produce AI brand films, commercials, ad creations, UGC, AI social content, and audio ads for growth-stage brands. Brief to delivery in days, not weeks.",
  metadataBase: new URL("https://articog.com"),
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Articog",
    title: "Articog | Creative AI Production Company | AI Brand Films & Ad Creations",
    description:
      "Articog is a Creative AI Production Company. We produce AI brand films, commercials, ad creations, UGC, AI social content, and audio ads for growth-stage brands. Brief to delivery in days, not weeks.",
    url: "https://articog.com",
    images: [
      {
        url: "/og-image.png",
        width: 2400,
        height: 1260,
        alt: "Articog creative AI production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articog | Creative AI Production Company",
    description:
      "AI creative production for growth-stage brands. Brief to delivery in days, not weeks.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/hmy5ctzy/video/upload/f_mp4,vc_h264,q_auto:good,w_1280,dpr_auto,c_limit/v1786961383/Web_3.mp4"
          type="video/mp4"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Articog",
              url: "https://articog.com",
              logo: "https://articog.com/icon.svg",
              sameAs: [
                "https://linkedin.com/company/articog/",
                "https://youtube.com/@articogcom",
                "https://twitter.com/articogcom",
                "https://instagram.com/articogcom",
                "https://medium.com/@articog.com",
              ],
            }),
          }}
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}