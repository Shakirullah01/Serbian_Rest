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
  const active = useMemo(
    () => galleryImages.find((g) => g.id === openId) ?? null,
    [openId]
  );

  return (
    <Section
      id="gallery"
      eyebrow="Галерея"
      title="Интерьер, огонь гриля и детали"
      description="Нажмите на фото, чтобы рассмотреть детали."
    >
      <div className="rounded-3xl border border-white/10 bg-white/6 p-3 shadow-[var(--shadow-soft)]">
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
          {galleryImages.map((img, idx) => (
            <Reveal
              key={img.id}
              delayMs={idx * 40}
              className="mb-3 break-inside-avoid"
            >
              <button
                className="group relative block w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left transition hover:border-white/16"
                onClick={() => setOpenId(img.id)}
                aria-label={`Открыть фото: ${img.alt}`}
              >
                <div className="relative w-full">
                  <SmartImage
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[radial-gradient(420px_220px_at_30%_25%,rgba(245,158,11,0.22),transparent_60%)]" />
                <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-white/90 opacity-0 transition duration-700 group-hover:opacity-100">
                  {img.alt}
                </figcaption>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

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

