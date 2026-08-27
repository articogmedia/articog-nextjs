"use client";
import { Container, Section, Button, Heading } from "@/components/ui";
import { Link } from "@/components/ui/Link";
import { useState } from "react";

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "AI Video", "Ad Creative", "Industry Insights", "Company News"];
  
  const articles = [
    {
      title: "[Article Title Placeholder]",
      author: "[Author Name]",
      date: "Aug 19, 2026",
      category: "AI Video",
      excerpt: "A short excerpt placeholder describing the insights and trends covered in this deep dive into AI-native production workflows.",
      slug: "placeholder-1"
    },
    {
      title: "[Article Title Placeholder]",
      author: "[Author Name]",
      date: "Aug 15, 2026",
      category: "Ad Creative",
      excerpt: "A short excerpt placeholder describing the insights and trends covered in this deep dive into AI-native production workflows.",
      slug: "placeholder-2"
    },
    {
      title: "[Article Title Placeholder]",
      author: "[Author Name]",
      date: "Aug 10, 2026",
      category: "Industry Insights",
      excerpt: "A short excerpt placeholder describing the insights and trends covered in this deep dive into AI-native production workflows.",
      slug: "placeholder-3"
    },
    {
      title: "[Article Title Placeholder]",
      author: "[Author Name]",
      date: "Aug 05, 2026",
      category: "Company News",
      excerpt: "A short excerpt placeholder describing the insights and trends covered in this deep dive into AI-native production workflows.",
      slug: "placeholder-4"
    },
    {
      title: "[Article Title Placeholder]",
      author: "[Author Name]",
      date: "Jul 28, 2026",
      category: "AI Video",
      excerpt: "A short excerpt placeholder describing the insights and trends covered in this deep dive into AI-native production workflows.",
      slug: "placeholder-5"
    },
    {
      title: "[Article Title Placeholder]",
      author: "[Author Name]",
      date: "Jul 20, 2026",
      category: "Ad Creative",
      excerpt: "A short excerpt placeholder describing the insights and trends covered in this deep dive into AI-native production workflows.",
      slug: "placeholder-6"
    }
  ];

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span
              className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              OUR BLOG
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Insights & Perspectives
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Exploring the intersection of creativity, technology, and the future of brand production.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-medium transition-all duration-200 border ${
                  activeCategory === cat 
                    ? "bg-white text-black border-white" 
                    : "bg-white/[0.03] text-white/50 border-white/10 hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24">
            {filteredArticles.map((article, index) => (
              <Link
                key={index}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-2xl border border-white/[0.08] transition-all hover:border-white/20 hover:bg-white/[0.02] overflow-hidden"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                <div className="aspect-video bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-center text-white/10">
                  <span className="font-sans text-xs uppercase tracking-widest">Image Placeholder</span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-white/40 bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.05]">
                      {article.category}
                    </span>
                    <span className="text-[10px] font-sans text-white/30">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-4 group-hover:text-white/90 transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed mb-6 flex-grow" style={{ color: "rgba(255,255,255,0.50)" }}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="w-6 h-6 rounded-full bg-white/10 border border-white/10" />
                    <span className="text-[11px] font-sans text-white/40">By {article.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center pt-16 border-t border-white/10">
            <Heading as="h2" size="section" className="mb-8">
              Stay ahead of the curve
            </Heading>
            <Button asChild variant="primary" size="lg">
              <Link href="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default BlogPage;
