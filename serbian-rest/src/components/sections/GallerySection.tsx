"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";
import { galleryImages } from "@/data/gallery";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { Modal } from "@/components/ui/Modal";
import { cn } from "@/lib/cn";

export function GallerySection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const total = galleryImages.length;
  const activeSlide = galleryImages[index] ?? null;
  const active = useMemo(
    () => galleryImages.find((g) => g.id === openId) ?? null,
    [openId]
  );
  const preview = galleryImages.slice(0, 6);

  function goPrev() {
    setIndex((v) => (v - 1 + total) % total);
  }
  function goNext() {
    setIndex((v) => (v + 1) % total);
  }

  return (
    <Section
      id="gallery"
      eyebrow="Галерея"
      title="Интерьер, огонь гриля и детали"
      description="Кураторская подборка атмосферы: листайте слайды и откройте фото в полном размере."
    >
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-3 shadow-[var(--shadow-soft)]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30">
            <button
              className="relative block w-full text-left"
              onClick={() => activeSlide && setOpenId(activeSlide.id)}
              aria-label="Открыть текущее фото"
            >
              {activeSlide ? (
                <SmartImage
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  width={1800}
                  height={1100}
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[440px]"
                />
              ) : null}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(540px_260px_at_22%_24%,rgba(245,158,11,0.22),transparent_60%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                  Галерея
                </p>
                <p className="mt-1 text-sm font-medium text-white/90">
                  {activeSlide?.alt ?? "Интерьер и атмосфера"}
                </p>
              </div>
            </button>

            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-white/15 bg-black/45 p-2.5 text-white/90 transition hover:bg-black/60"
              aria-label="Предыдущее фото"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-white/15 bg-black/45 p-2.5 text-white/90 transition hover:bg-black/60"
              aria-label="Следующее фото"
            >
              <ArrowRight />
            </button>
          </div>

          <div className="mt-3 hidden gap-2 sm:grid sm:grid-cols-6">
            {preview.map((img) => {
              const i = galleryImages.findIndex((g) => g.id === img.id);
              const activeThumb = i === index;
              return (
                <button
                  key={img.id}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "relative overflow-hidden rounded-xl border bg-black/20",
                    activeThumb
                      ? "border-amber-400/45"
                      : "border-white/10 hover:border-white/20"
                  )}
                  aria-label={`Показать фото ${i + 1}`}
                >
                  <SmartImage
                    src={img.src}
                    alt={img.alt}
                    width={320}
                    height={220}
                    sizes="140px"
                    className="h-16 w-full object-cover"
                  />
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-center gap-1.5 sm:hidden">
            {galleryImages.map((g, i) => (
              <button
                key={g.id}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition",
                  i === index ? "w-6 bg-amber-400" : "w-2 bg-white/35"
                )}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <Modal
        open={Boolean(active)}
        onClose={() => setOpenId(null)}
        title={active?.alt ?? "Фото"}
        className="max-w-4xl"
      >
        <div className="grid gap-4">
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            )}
          >
            {active ? (
              <SmartImage
                src={active.src}
                alt={active.alt}
                width={1800}
                height={1200}
                sizes="(max-width: 1024px) 92vw, 900px"
                className="h-auto w-full object-cover"
              />
            ) : null}
          </div>
        </div>
      </Modal>
    </Section>
  );
}

function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

