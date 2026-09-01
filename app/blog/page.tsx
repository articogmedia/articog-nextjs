import type { Metadata } from "next";

import { BlogFilterList } from "@/components/blog/BlogFilterList";
import { Container, Section, Heading } from "@/components/ui";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Articog Blog",
  description: "Insights on AI-native creative production, campaign strategy, and brand growth.",
};

export default function BlogPage() {
  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              OUR BLOG
            </span>
            <Heading as="h1" size="hero" className="mb-6">
              Insights & Perspectives
            </Heading>
            <p className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-white/65 md:text-lg">
              Practical ideas and strategic thinking on AI-native creative production, campaign velocity, and high-performance marketing.
            </p>
          </div>

          <BlogFilterList posts={blogPosts} />
        </Container>
      </Section>
    </div>
  );
}
