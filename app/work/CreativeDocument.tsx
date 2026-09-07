"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import styles from "./CreativeDocument.module.css";

type Artwork = {
  src: string;
  alt: string;
  entryX: number;
  entryY: number;
  exitX: number;
  exitY: number;
  rotate: number;
  tone: string;
};

const artworks: Artwork[] = [
  { src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788795062/hf_20260821_063718_d5d2aeb0-64d1-4655-ac8a-ba9e4f5e6c02.png", alt: "Articog creative visual study 01", entryX: 0, entryY: 8, exitX: -8, exitY: -6, rotate: -1.2, tone: "portrait" },
  { src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788795062/hf_20260821_055524_1a0e7292-1148-46c0-a291-3d9e153b9bb0.png", alt: "Articog creative visual study 02", entryX: -22, entryY: 10, exitX: 9, exitY: -10, rotate: 1.4, tone: "landscape" },
  { src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788795060/hf_20260821_075104_3836aa7f-4399-4256-9bc3-022992543e67.png", alt: "Articog creative visual study 03", entryX: 18, entryY: -6, exitX: -10, exitY: 9, rotate: -1.6, tone: "portrait" },
  { src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788795060/hf_20260821_083052_c34ee14c-6e9a-4c17-8f3b-34e90869a8c4.png", alt: "Articog creative visual study 04", entryX: -13, entryY: -14, exitX: 13, exitY: 7, rotate: 1, tone: "square" },
  { src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788795060/hf_20260821_081708_9bf57f26-425b-47f7-b199-bad796e7f256.png", alt: "Articog creative visual study 05", entryX: 21, entryY: 8, exitX: -11, exitY: -8, rotate: -1.1, tone: "portrait" },
  { src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788795059/hf_20260821_083339_49c07db6-34ef-4c24-9479-eba4ece0cc6f.png", alt: "Articog creative visual study 06", entryX: -17, entryY: 12, exitX: 10, exitY: -7, rotate: 1.5, tone: "landscape" },
  { src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788795058/hf_20260821_090327_a7cb6c2d-ed73-4de2-a1ff-498adbad1cf5.png", alt: "Articog creative visual study 07", entryX: 15, entryY: -12, exitX: -8, exitY: 10, rotate: -1.3, tone: "portrait" },
  { src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788795057/hf_20260821_092645_5e7fd9e3-dbed-4783-a813-5309a0a4cb0a.png", alt: "Articog creative visual study 08", entryX: -20, entryY: -5, exitX: 12, exitY: 8, rotate: 1.2, tone: "square" },
  { src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788795056/hf_20260821_135812_fb53b3fc-1e01-4b1d-8063-a4d2d359d0c9.png", alt: "Articog creative visual study 09", entryX: 18, entryY: 10, exitX: -12, exitY: -8, rotate: -1.5, tone: "landscape" },
  { src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788795055/hf_20260821_144739_70fad7b6-95c9-410e-8789-ee50cd71d712.png", alt: "Articog creative visual study 10", entryX: -14, entryY: -10, exitX: 10, exitY: 9, rotate: 1.3, tone: "portrait" },
  { src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788795054/hf_20260824_080045_a18b6dc0-0128-44b9-a8e9-def371a3a33c.png", alt: "Articog creative visual study 11", entryX: 20, entryY: 7, exitX: -9, exitY: -9, rotate: -1, tone: "square" },
  { src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788795054/hf_20260824_073044_5f2bbec3-d0c2-4043-b247-43bc1c3ed11c.png", alt: "Articog creative visual study 12", entryX: -18, entryY: 11, exitX: 8, exitY: -7, rotate: 1.4, tone: "landscape" },
];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function CreativeDocument() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [selected, setSelected] = useState<Artwork | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      setProgress(clamp(-bounds.top / travel * (artworks.length - 1), 0, artworks.length - 1));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <section ref={sectionRef} className={styles.document} aria-label="Selected Articog work">
        <div className={styles.sticky}>
          <div className={styles.header}>
            <div>
              <p className={styles.kicker}>A visual document</p>
              <h2>Creative work in motion.</h2>
            </div>
            <p className={styles.note}>Scroll to move through the work</p>
          </div>
          <div className={styles.stage}>
            <div className={styles.rule} aria-hidden="true" />
            {artworks.map((artwork, index) => {
              const distance = index - progress;
              const proximity = Math.abs(distance);
              const entering = clamp(distance, 0, 1);
              const leaving = clamp(-distance, 0, 1);
              const x = artwork.entryX * entering + artwork.exitX * leaving;
              const y = artwork.entryY * entering + artwork.exitY * leaving;
              const z = 120 - proximity * 260;
              const scale = 1.04 - proximity * 0.18;
              const opacity = clamp(1 - proximity * 0.72, 0, 1);
              const rotation = artwork.rotate * (entering - leaving);
              const isInteractive = opacity > 0.04;

              return (
                <button
                  key={artwork.src}
                  type="button"
                  className={`${styles.artwork} ${styles[artwork.tone]}`}
                  style={{
                    opacity,
                    zIndex: Math.round(100 - proximity * 10),
                    pointerEvents: isInteractive ? "auto" : "none",
                    transform: `translate3d(calc(-50% + ${x}%), calc(-50% + ${y}%), ${z}px) scale(${scale}) rotate(${rotation}deg)`,
                  }}
                  onClick={() => setSelected(artwork)}
                  aria-label={`Open ${artwork.alt}`}
                  aria-current={proximity < 0.5 ? "true" : undefined}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={artwork.src} alt={artwork.alt} width={1200} height={1500} loading={index < 3 ? "eager" : "lazy"} decoding="async" />
                </button>
              );
            })}
          </div>
          <div className={styles.footer}>
            <span aria-live="polite">{String(Math.round(progress) + 1).padStart(2, "0")} / {String(artworks.length).padStart(2, "0")}</span>
            <div className={styles.progressTrack} aria-hidden="true"><span style={{ width: `${((progress + 1) / artworks.length) * 100}%` }} /></div>
          </div>
        </div>
      </section>

      {selected && (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-label={selected.alt} onClick={() => setSelected(null)}>
          <button type="button" className={styles.close} onClick={() => setSelected(null)} aria-label="Close visual preview"><X size={20} /></button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={selected.src} alt={selected.alt} width={1800} height={2200} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  );
}
