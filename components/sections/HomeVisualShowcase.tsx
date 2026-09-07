"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Container, Section, Heading } from "@/components/ui";

const visuals = [
  {
    src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788789713/hf_20260821_065643_6976e0a6-c34e-406a-bd95-c7e797053c7f.png",
    alt: "Articog creative visual study 01",
    slot: "showcase-slot showcase-slot--left",
  },
  {
    src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788789712/hf_20260821_084936_75678ff3-a64b-4a52-8282-9f4ba50ff8ee.png",
    alt: "Articog creative visual study 02",
    slot: "showcase-slot showcase-slot--center",
  },
  {
    src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788789712/hf_20260821_143722_0fdbe9fd-0d85-40e9-a33a-08a4801eb7bf.png",
    alt: "Articog creative visual study 03",
    slot: "showcase-slot showcase-slot--right",
  },
  {
    src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788789710/hf_20260824_074433_da1464ea-2e00-45ae-bf12-e5590296e0b4.png",
    alt: "Articog creative visual study 04",
    slot: "showcase-slot showcase-slot--left",
  },
  {
    src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788789709/hf_20260824_093120_776966e5-5a3b-42f8-91b7-f4a8644b915b.png",
    alt: "Articog creative visual study 05",
    slot: "showcase-slot showcase-slot--center",
  },
  {
    src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788789708/hf_20260824_092558_3f5c4ba3-c830-439e-8eb4-dbd9f6a85296.png",
    alt: "Articog creative visual study 06",
    slot: "showcase-slot showcase-slot--right",
  },
  {
    src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788789708/hf_20260824_093331_32e45f5b-915d-4fa8-850b-6d53f87f3d3d.png",
    alt: "Articog creative visual study 07",
    slot: "showcase-slot showcase-slot--left-lower",
  },
  {
    src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788789710/hf_20260824_075254_b3fcf38d-1bc9-463d-9a13-2aaf2ceeed8e.png",
    alt: "Articog creative visual study 08",
    slot: "showcase-slot showcase-slot--center-lower",
  },
  {
    src: "https://res.cloudinary.com/hmy5ctzy/image/upload/v1788789718/hf_20260821_140321_73af4c8f-f252-4c41-8f83-de3d906fbcba.png",
    alt: "Articog creative visual study 09",
    slot: "showcase-slot showcase-slot--right-lower",
  },
];

const depthLayers = [
  {
    name: "background",
    visuals: [visuals[0], visuals[1], visuals[2]],
  },
  {
    name: "midground",
    visuals: [visuals[3], visuals[4], visuals[5]],
  },
  {
    name: "foreground",
    visuals: [visuals[6], visuals[7], visuals[8]],
  },
] as const;

export function HomeVisualShowcase() {
  const [selectedVisual, setSelectedVisual] = useState<(typeof visuals)[number] | null>(null);

  useEffect(() => {
    if (!selectedVisual) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedVisual(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVisual]);

  return (
    <>
      <Section className="overflow-hidden border-y border-white/[0.06] bg-[#080808] py-24 md:py-32">
        <Container>
          <div className="mb-12 flex items-end justify-between gap-8 md:mb-16">
            <div className="max-w-xl">
              <Heading as="h2" size="label" className="mb-4 text-white/45">
                Selected visual studies
              </Heading>
              <Heading as="h2" size="section" className="mb-0 text-white">
                Creative, without limits.
              </Heading>
            </div>
            <p className="hidden max-w-[15rem] pb-1 text-right font-sans text-xs leading-relaxed text-white/35 md:block">
              A living canvas for bold ideas, built to move between worlds.
            </p>
          </div>

          <div className="showcase-stage" aria-label="Selected Articog visual studies">
            {depthLayers.map((layer) => (
              <div
                key={layer.name}
                className={`showcase-layer showcase-layer--${layer.name}`}
                aria-label={`${layer.name} visual layer`}
              >
                {layer.visuals.map((visual, index) => (
                  <button
                    key={visual.src}
                    type="button"
                    className={visual.slot}
                    onClick={() => setSelectedVisual(visual)}
                    aria-label={`Open ${visual.alt}`}
                  >
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      width={900}
                      height={1200}
                      loading={layer.name === "background" && index > 0 ? "lazy" : "eager"}
                      decoding="async"
                      sizes="(max-width: 640px) 43vw, (max-width: 1024px) 28vw, 24vw"
                    />
                  </button>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {selectedVisual && (
        <div
          className="showcase-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVisual.alt}
          onClick={() => setSelectedVisual(null)}
        >
          <button
            type="button"
            className="showcase-lightbox__close"
            onClick={() => setSelectedVisual(null)}
            aria-label="Close visual preview"
          >
            <X size={20} />
          </button>
          <img
            src={selectedVisual.src}
            alt={selectedVisual.alt}
            width={1600}
            height={2000}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
