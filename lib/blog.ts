export type BlogSourceType = "articog" | "medium" | "substack" | "youtube";

export interface NativeBlogArticle {
  type: "articog";
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  readTime: string;
  canonicalUrl: string;
  content: Array<
    | { type: "paragraph"; value: string }
    | { type: "heading"; value: string; level?: 2 | 3 }
    | { type: "quote"; value: string }
    | { type: "youtube"; youtubeUrl: string }
  >;
}

export interface ExternalBlogCard {
  type: "medium" | "substack" | "youtube";
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  featuredImage?: string;
  sourceLabel: "Medium" | "Substack" | "YouTube";
  sourceUrl: string;
  actionLabel: string;
}

export type BlogEntry = NativeBlogArticle | ExternalBlogCard;

export const blogPosts: BlogEntry[] = [
  {
    type: "articog",
    slug: "how-ai-creative-teams-ship-faster-without-sacrificing-brand-quality",
    title: "How AI creative teams ship faster without sacrificing brand quality",
    category: "Creative Operations",
    publishedAt: "2025-02-12",
    excerpt:
      "When creative volume spikes, the real bottleneck is not generation—it is decision quality, brand calibration, and feedback loops.",
    featuredImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    author: "Articog Editorial",
    readTime: "6 min read",
    canonicalUrl:
      "https://articog.com/blog/how-ai-creative-teams-ship-faster-without-sacrificing-brand-quality",
    content: [
      {
        type: "paragraph",
        value:
          "The best AI creative teams do not chase more output for its own sake. They build a system that turns brand intent into repeatable production velocity while protecting quality at the point of decision.",
      },
      {
        type: "heading",
        value: "The hidden bottleneck is not speed",
        level: 2,
      },
      {
        type: "paragraph",
        value:
          "Most production teams think the friction is in rendering or editing. In practice, the bottleneck sits earlier: unclear briefs, weak creative feedback loops, and understaffed review stages.",
      },
      {
        type: "paragraph",
        value:
          "The brands that win are the ones that treat AI as a creative operating layer, not a shortcut. They create sharper feedback loops, choose a narrower set of usable references, and review work faster because the process is clearer from the beginning.",
      },

      // Articog YouTube video embedded directly inside the article
      {
        type: "youtube",
        youtubeUrl: "https://www.youtube.com/watch?v=l5pReVGFVqs",
      },

      {
        type: "heading",
        value: "Build a review system, not just a prompt library",
        level: 2,
      },
      {
        type: "paragraph",
        value:
          "Prompt quality matters, but campaign consistency matters more. Strong teams lock in core brand references, define a visual language, and set review criteria before creative generation begins. That prevents revisions from turning into a creative drift loop.",
      },
      {
        type: "quote",
        value:
          "The fastest teams do not generate more versions; they reduce ambiguity before a single frame is approved.",
      },
      {
        type: "paragraph",
        value:
          "When the process is documented, the output becomes more scalable, more repeatable, and easier to quality-check. That is the real unlock behind AI creative velocity.",
      },
    ],
  },

  {
    type: "articog",
    slug: "the-4-systems-behind-high-velocity-campaign-production",
    title: "The 4 systems behind high-velocity campaign production",
    category: "AI Production",
    publishedAt: "2025-03-04",
    excerpt:
      "Production speed improves when a brand combines feedback loops, performance data, asset governance, and creative operating rhythm into a single system.",
    featuredImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    author: "Articog Editorial",
    readTime: "5 min read",
    canonicalUrl:
      "https://articog.com/blog/the-4-systems-behind-high-velocity-campaign-production",
    content: [
      {
        type: "paragraph",
        value:
          "High-velocity creative production is not a one-off sprint. It is a system that coordinates generation, review, iteration, and delivery across channels.",
      },
      {
        type: "heading",
        value: "1. The brief system",
        level: 2,
      },
      {
        type: "paragraph",
        value:
          "Strong creative work begins with a better brief. Top-performing teams specify audience, offer, use case, visual references, and rejection criteria before they begin generating options.",
      },
      {
        type: "heading",
        value: "2. The review system",
        level: 2,
      },
      {
        type: "paragraph",
        value:
          "Fast review cycles depend on clear ownership. The faster a team can align on what is good, the faster that team can move to production at scale.",
      },
      {
        type: "heading",
        value: "3. The performance system",
        level: 2,
      },
      {
        type: "paragraph",
        value:
          "Creative velocity is magnified when performance data is fed back into the creative loop. This helps teams learn what actually converts rather than relying on aesthetic preference alone.",
      },
      {
        type: "heading",
        value: "4. The delivery system",
        level: 2,
      },
      {
        type: "paragraph",
        value:
          "The final stage matters just as much as the first. Versioning, platform sizing, and channel-specific delivery are what turn good creative into systematic output.",
      },
    ],
  },

  {
    type: "medium",
    slug: "medium-brand-velocity-and-the-ai-production-stack",
    title: "Brand velocity and the AI production stack",
    excerpt:
      "A look at how AI production systems reduce creative bottlenecks while keeping brand quality and consistency intact.",
    publishedAt: "2025-01-22",
    featuredImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    sourceLabel: "Medium",
    sourceUrl:
      "https://medium.com/@articog.com/brand-velocity-and-the-ai-production-stack",
    actionLabel: "Read on Medium",
  },

  {
    type: "substack",
    slug: "substack-what-great-ai-brand-content-really-looks-like",
    title: "What great AI brand content really looks like",
    excerpt:
      "A grounded framework for evaluating AI-generated creative across brand fit, emotional response, and production efficiency.",
    publishedAt: "2025-01-07",
    featuredImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    sourceLabel: "Substack",
    sourceUrl:
      "https://articog.substack.com/p/what-great-ai-brand-content-really-looks-like",
    actionLabel: "Read on Substack",
  },

  {
    type: "youtube",
    slug: "these-actors-dont-exist-this-entire-ad-was-made-with-ai",
    title: "These Actors Don’t Exist. This Entire Ad Was Made With AI | Articog",
    excerpt:
      "An Articog AI-native production showcasing how an entire ad can be created using AI-generated actors and creative production workflows.",
    publishedAt: "2026-09-01",
    featuredImage:
      "https://img.youtube.com/vi/l5pReVGFVqs/hqdefault.jpg",
    sourceLabel: "YouTube",
    sourceUrl:
      "https://www.youtube.com/watch?v=l5pReVGFVqs",
    actionLabel: "Watch on YouTube",
  },
];

export function getNativeBlogPosts(): NativeBlogArticle[] {
  return blogPosts.filter(
    (post): post is NativeBlogArticle => post.type === "articog"
  );
}

export function getBlogPostBySlug(
  slug: string
): NativeBlogArticle | undefined {
  return getNativeBlogPosts().find((post) => post.slug === slug);
}

export function getBlogEntries() {
  return blogPosts;
}