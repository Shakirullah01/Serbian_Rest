import { imageManifest } from "@/data/imageManifest";
import type { MenuCategoryId } from "@/types/menu";

export function normalizeDishName(input: string): string {
  return String(input ?? "")
    .trim()
    .toLowerCase()
    .replaceAll("ё", "е")
    .replaceAll("«", "\"")
    .replaceAll("»", "\"")
    .replaceAll("—", "-")
    .replaceAll("–", "-")
    .replace(/[.,:;!?()[\]{}]/g, " ")
    .replace(/["'`]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function slugifyRussianName(input: string): string {
  // Keep Cyrillic: works fine for local filenames and URLs; normalize separators.
  return normalizeDishName(input)
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const categoryFolderAliases: Record<MenuCategoryId, string[]> = {
  salads: ["salad", "salads"],
  "serbian-specialties": ["serbian specials", "serbian specialties", "serbian-specialties"],
  soups: ["soups", "soup"],
  "meat-dishes": ["meat dishes", "meat", "meat-dishes"],
  "fish-and-seafood": [
    "dishes of fish and sea food",
    "fish and seafood",
    "fish-seafood",
    "fish",
  ],
  "dishes-for-company": ["dishes for accoumpany", "dishes for company", "company dishes", "company"],
  desserts: ["deserts", "desserts"],
  "cold-appetizers": ["cold junk", "cold appetizers", "cold snacks", "cold"],
};

/**
 * Ручные алиасы для “сложных” названий (кавычки, спецсимволы, разные варианты).
 * Пример: в меню может быть “Салат “Шопский””, а файл называется “Салат Шопский.jfif”.
 */
const dishNameAliases: Record<string, string[]> = {
  // salads
  [normalizeDishName("Салат “Шопский”")]: [
    "Салат Шопский",
    "Салат Шопскии", // иногда в файлах бывает искажение/опечатка
  ],
  // company dishes
  [normalizeDishName("Мясное ассорти “Серпска плата”")]: [
    "Мясное ассорти Серпска плата",
    "Мясное ассорти Сербска плата",
    "Серпска плата",
  ],
};

function publicCandidates(categoryId: MenuCategoryId | undefined, baseName: string) {
  const roots: string[] = [];

  // Primary organized structure (recommended)
  roots.push("/images/menu");

  // This project’s photo folder (via junction we create by default)
  roots.push("/images/menu");

  const slugs = [slugifyRussianName(baseName), slugifyRussianName(normalizeDishName(baseName))].filter(
    Boolean
  );
  const norms = [normalizeDishName(baseName)].filter(Boolean);

  const folders = categoryId ? categoryFolderAliases[categoryId] : [];
  const candidates: string[] = [];

  const exts = [".jpg", ".jpeg", ".png", ".webp", ".jfif", ".avif"];

  for (const root of roots) {
    if (folders.length) {
      for (const folder of folders) {
        for (const s of slugs) for (const ext of exts) candidates.push(`${root}/${folder}/${s}${ext}`);
        for (const n of norms) for (const ext of exts) candidates.push(`${root}/${folder}/${n}${ext}`);
      }
    }
    for (const s of slugs) for (const ext of exts) candidates.push(`${root}/${s}${ext}`);
  }

  return candidates;
}

function similarity(a: string, b: string) {
  // Quick token overlap score [0..1]
  const ta = new Set(normalizeDishName(a).split(" ").filter(Boolean));
  const tb = new Set(normalizeDishName(b).split(" ").filter(Boolean));
  if (!ta.size || !tb.size) return 0;
  let inter = 0;
  for (const t of ta) if (tb.has(t)) inter++;
  return inter / Math.max(ta.size, tb.size);
}

export function resolveDishImage({
  dishName,
  categoryId,
  explicitSrc,
}: {
  dishName: string;
  categoryId?: MenuCategoryId;
  explicitSrc?: string;
}): string {
  const slug = slugifyRussianName(dishName);
  const norm = normalizeDishName(dishName);

  const bySlug = imageManifest.bySlug as Record<string, string | undefined>;
  const byNormalized = imageManifest.byNormalized as Record<
    string,
    string | undefined
  >;
  const all = imageManifest.all as readonly string[];

  // If an explicit src is provided, only use it when it actually exists in `/public`.
  // This keeps the UI resilient when placeholder paths were used previously.
  if (explicitSrc && explicitSrc.trim().length) {
    const trimmed = explicitSrc.trim();
    if (all.includes(trimmed)) return trimmed;
  }

  // 0) Alias match (before direct). Helps when filenames intentionally omit quotes etc.
  const aliasList = dishNameAliases[norm] ?? [];
  for (const alias of aliasList) {
    const aSlug = slugifyRussianName(alias);
    const aNorm = normalizeDishName(alias);
    const directAlias = (aSlug && bySlug[aSlug]) || (aNorm && byNormalized[aNorm]);
    if (directAlias) return directAlias;
  }

  // 1) Fast exact matches from generated manifest (works even for .jfif)
  const direct = (slug && bySlug[slug]) || (norm && byNormalized[norm]);
  if (direct) return direct;

  // 2) Category-aware candidate paths (best effort)
  const candidates = publicCandidates(categoryId, dishName);
  for (const c of candidates) {
    // If manifest already includes this exact public path, we can accept it
    if (all.includes(c)) return c;
  }

  // 3) Fuzzy fallback: find closest filename match by similarity
  let best: { path: string; score: number } | null = null;
  for (const p of all) {
    const base = p.split("/").pop() ?? p;
    const baseNoExt = base.replace(/\.[a-z0-9]+$/i, "");
    const score = similarity(dishName, baseNoExt);
    if (score >= 0.62 && (!best || score > best.score)) best = { path: p, score };
  }
  if (best) return best.path;

  return "/images/placeholder.svg";
}

export function resolveHeroImage(): string {
  // Prefer any image under /images/hero (junction points to interior by default)
  const all = imageManifest.all as readonly string[];
  const hero = all.find((p) => p.startsWith("/images/hero/"));
  return hero ?? "/images/placeholder.svg";
}

export function resolveNamedImage(baseName: string): string {
  const all = imageManifest.all as readonly string[];
  const normBase = slugifyRussianName(baseName);
  // Prefer /images/<baseName>.* first (common for logo)
  const direct =
    all.find((p) => p.startsWith(`/images/${baseName}.`)) ??
    all.find((p) => p.startsWith(`/images/${normBase}.`)) ??
    all.find((p) => p.includes(`/images/${baseName}.`));
  return direct ?? "/images/placeholder.svg";
}

