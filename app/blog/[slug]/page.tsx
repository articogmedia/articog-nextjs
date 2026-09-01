import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Link } from "@/components/ui/Link";
import { Container, Section, Heading } from "@/components/ui";
import { YouTubeEmbed } from "@/components/blog/YouTubeEmbed";
import { getBlogPostBySlug, getNativeBlogPosts } from "@/lib/blog";

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export function generateStaticParams() {
  return getNativeBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post | Articog",
    };
  }

  const canonicalUrl = `https://articog.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Articog Blog`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen">
      <Section size="lg" className="pt-32 md:pt-40">
        <Container className="max-w-4xl">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-sans text-white/60 transition-colors hover:text-white"
            >
              ← Back to blog
            </Link>
          </div>

          <div className="mb-8">
            <span className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              {post.category}
            </span>
            <Heading as="h1" size="hero" className="mb-5">
              {post.title}
            </Heading>
            <div className="flex flex-wrap items-center gap-4 font-sans text-sm text-white/55">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span>•</span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="mb-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="h-[360px] w-full object-cover md:h-[480px]"
            />
          </div>

          <article className="mx-auto max-w-3xl">
            <div className="space-y-8 text-white/80">
              {post.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={`${block.type}-${index}`}
                      className="font-sans text-base leading-8 md:text-lg"
                    >
                      {block.value}
                    </p>
                  );
                }

                if (block.type === "heading") {
                  if (block.level === 3) {
                    return (
                      <h3
                        key={`${block.type}-${index}`}
                        className="mt-8 font-display font-semibold text-white"
                      >
                        {block.value}
                      </h3>
                    );
                  }

                  return (
                    <h2
                      key={`${block.type}-${index}`}
                      className="mt-8 font-display font-semibold text-white"
                    >
                      {block.value}
                    </h2>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={`${block.type}-${index}`}
                      className="border-l border-white/15 pl-5 font-sans text-lg italic text-white/70 md:text-xl"
                    >
                      “{block.value}”
                    </blockquote>
                  );
                }

                if (block.type === "youtube") {
                  return (
                    <div key={`${block.type}-${index}`} className="pt-2">
                      <YouTubeEmbed url={block.youtubeUrl} title={post.title} />
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </article>
        </Container>
      </Section>
    </div>
  );
}
