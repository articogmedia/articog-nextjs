import { cn } from "@/lib/utils";

function extractYouTubeId(value: string): string | null {
  if (!value) return null;

  const clean = value.trim();

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/|youtube-nocookie\.com\/embed\/)([A-Za-z0-9_-]{11})/,
    /^([A-Za-z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = clean.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  return null;
}

interface YouTubeEmbedProps {
  url?: string;
  videoId?: string;
  title?: string;
  className?: string;
}

export function YouTubeEmbed({
  url,
  videoId,
  title = "YouTube video",
  className,
}: YouTubeEmbedProps) {
  const resolvedId = videoId ?? (url ? extractYouTubeId(url) : null);

  if (!resolvedId) {
    return null;
  }

  const embedUrl = `https://www.youtube-nocookie.com/embed/${resolvedId}?rel=0&modestbranding=1&playsinline=1`;

  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]", className)}>
      <div className="relative aspect-video w-full">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
