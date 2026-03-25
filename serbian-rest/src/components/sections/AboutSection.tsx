import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { restaurant } from "@/config/restaurant";
import { SmartImage } from "@/components/ui/SmartImage";
import { resolveHeroImage } from "@/lib/images/resolver";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="О нас"
      title="Гостеприимство по‑сербски — с огнём гриля и щедрой подачей"
      description="«Сербская таверна» — место, где хочется задержаться: тёплый свет, вечерняя атмосфера и кухня, которая звучит ярко. На обед — быстро и сытно, вечером — неспешно и по‑настоящему вкусно."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <div className="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-[var(--shadow-soft)]">
          <div className="flex flex-wrap gap-2">
            <Badge tone="accent">Хорошее место 2026</Badge>
            <Badge tone="soft">Рейтинг {restaurant.rating}</Badge>
            <Badge tone="soft">Бизнес‑ланч</Badge>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-white/55">
                Кухня
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                {restaurant.cuisine}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Гриль, томлёные специалитеты, супы и десерты — всё про вкус и тепло.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-white/55">
                Формат
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                {restaurant.format}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Для обеда, ужина и встреч компанией — уютно и уверенно по‑взрослому.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5 sm:col-span-2">
              <div className="text-xs uppercase tracking-[0.22em] text-white/55">
                Отметка гостей
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Badge tone="accent">{restaurant.trust.badge}</Badge>
                <span className="text-sm text-white/70">
                  {restaurant.trust.ratingsCount} оценок • {restaurant.trust.reviewsCount} отзывов
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Тёплая атмосфера, вежливый сервис и щедрая подача — то, что чаще всего отмечают в отзывах.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 shadow-[var(--shadow-soft)]">
          <SmartImage
            src={resolveHeroImage()}
            alt="Атмосфера в Сербской таверне"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_50%_20%,rgba(245,158,11,0.18),transparent_60%)]" />
          <div className="relative flex h-full min-h-[360px] items-end p-6">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                Вечерняя атмосфера
              </p>
              <h3 className="mt-3 font-[var(--font-heading)] text-3xl tracking-tight text-white">
                Тёплый свет, аромат гриля, спокойный ритм
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Приходите за вкусом и настроением — здесь умеют встречать по‑сербски.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

