"use client";

import { useMemo, useState } from "react";

import { Link } from "@/components/ui/Link";
import { Heading } from "@/components/ui";
import type { BlogEntry } from "@/lib/blog";

export type BlogFilter = "all" | "articles" | "videos";

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

function BlogCard({ post }: { post: BlogEntry }) {
  const isNative = post.type === "articog";

  if (isNative) {
    return (
      <article className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-white/[0.14]">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="overflow-hidden border-b border-white/[0.08]">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          <div className="p-6 md:p-7">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {post.category}
              </span>
              <span className="font-sans text-xs text-white/35">
                {formatDate(post.publishedAt)}
              </span>
            </div>

            <Heading as="h2" size="card" className="mb-4 text-white">
              {post.title}
            </Heading>

            <p className="mb-5 font-sans text-sm leading-7 text-white/60">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between border-t border-white/[0.08] pt-4">
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-white/35">
                {post.readTime}
              </span>
              <span className="font-sans text-sm text-white/70 group-hover:text-white">
                Read article →
              </span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-white/[0.14]">
      <div className="overflow-hidden border-b border-white/[0.08]">
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-56 items-center justify-center bg-white/[0.03] font-sans text-xs uppercase tracking-[0.2em] text-white/30">
            {post.sourceLabel}
          </div>
        )}
      </div>

      <div className="p-6 md:p-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
            {post.sourceLabel.toUpperCase()}
          </span>
          <span className="font-sans text-xs text-white/35">
            {formatDate(post.publishedAt)}
          </span>
        </div>

        <Heading as="h2" size="card" className="mb-4 text-white">
          {post.title}
        </Heading>

        <p className="mb-6 font-sans text-sm leading-7 text-white/60">
          {post.excerpt}
        </p>

        <Link
          href={post.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 font-sans text-sm text-white/80 transition-colors hover:border-white/[0.14] hover:text-white"
        >
          {post.actionLabel}
        </Link>
      </div>
    </article>
  );
}

const filterOptions: Array<{ id: BlogFilter; label: string }> = [
  { id: "all", label: "All" },
  { id: "articles", label: "Articles" },
  { id: "videos", label: "Videos" },
];

export function BlogFilterList({ posts }: { posts: BlogEntry[] }) {
  const [activeFilter, setActiveFilter] = useState<BlogFilter>("all");

  const visiblePosts = useMemo(() => {
    switch (activeFilter) {
      case "articles":
        return posts.filter(
          (post) => post.type === "articog" || post.type === "medium" || post.type === "substack"
        );
      case "videos":
        return posts.filter((post) => post.type === "youtube");
      case "all":
      default:
        return posts;
    }
  }, [activeFilter, posts]);

  return (
    <>
      <div className="mb-10 flex justify-center">
        <div className="flex w-full max-w-xl items-center gap-2 overflow-x-auto rounded-full border border-white/[0.08] bg-white/[0.02] p-1.5 scrollbar-none md:justify-center">
          {filterOptions.map((option) => {
            const isActive = activeFilter === option.id;

            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(option.id)}
                className={[
                  "relative inline-flex shrink-0 items-center justify-center rounded-full px-4 py-2 text-sm font-sans font-medium transition-all duration-200",
                  "min-w-[92px]",
                  isActive
                    ? "bg-white text-black shadow-sm"
                    : "text-white/60 hover:text-white hover:bg-white/[0.02]",
                ].join(" ")}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {visiblePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
