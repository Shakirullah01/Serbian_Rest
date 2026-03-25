import { imageManifest } from "@/data/imageManifest";

/**
 * Галерея (локальные изображения):
 * - папка: `public/images/gallery/`
 * - сейчас у вас это junction на: `photos of rest/interior`
 *
 * Важно: мы НЕ хардкодим расширения (.jpg/.webp). Берём реально существующие файлы
 * из автосгенерированного `imageManifest`.
 */
const galleryPaths = (imageManifest.all as readonly string[])
  .filter((p) => p.startsWith("/images/gallery/"))
  .sort((a, b) => a.localeCompare(b, "ru"));

export const galleryImages: { id: string; src: string; alt: string }[] =
  (galleryPaths.length ? galleryPaths.slice(0, 12) : ["/images/placeholder.svg"]).map(
    (src, idx) => ({
      id: `g${idx + 1}`,
      src,
      alt: "Интерьер и атмосфера",
    })
  );

// NOTE: hero берётся автоматически в `resolveHeroImage()`.
export const heroImages = {} as const;

