import { signatureDishes } from "@/data/menu";
import { Section } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import { Badge } from "@/components/ui/Badge";
import { formatRub, formatWeightGr } from "@/lib/format";
import { Reveal } from "@/components/ui/Reveal";
import { resolveMenuImageById } from "@/lib/images/resolver";

export function SignatureSection() {
  return (
    <Section
      eyebrow="Фирменное"
      title="Сац, гриль и хиты кухни"
      description="Подборка блюд, которые чаще всего заказывают гости — насыщенно, щедро и по‑сербски."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {signatureDishes.map((dish, idx) => (
          <Reveal key={dish.id} delayMs={idx * 60}>
            <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/6 shadow-[var(--shadow)] transition hover:border-white/16 hover:bg-white/8">
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Фото берется из явной карты menu-image-map.ts */}
                <SmartImage
                  src={resolveMenuImageById(dish.id)}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[radial-gradient(500px_220px_at_30%_30%,rgba(245,158,11,0.20),transparent_60%)]" />
                {dish.isPopular ? (
                  <div className="absolute left-3 top-3">
                    <Badge tone="accent">Популярное блюдо</Badge>
                  </div>
                ) : null}
              </div>
              <div className="p-6">
                <h3 className="font-[var(--font-heading)] text-2xl leading-tight tracking-tight text-white">
                  {dish.name}
                </h3>
                {dish.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-white/68">
                    {dish.description}
                  </p>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    Десерт/позиция из меню.
                  </p>
                )}

                <div className="mt-5 flex items-baseline justify-between gap-3">
                  <div className="text-xl font-semibold text-white">
                    {formatRub(dish.priceRub)}
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-white/55">
                    {formatWeightGr(dish.weightGr) ?? "—"}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

