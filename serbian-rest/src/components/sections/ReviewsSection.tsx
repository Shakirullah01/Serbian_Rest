"use client";

import { reviews } from "@/data/reviews";
import { restaurant } from "@/config/restaurant";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function ReviewsSection() {
  return (
    <Section
      id="reviews"
      eyebrow="Отзывы"
      title="Гости любят за вкус и атмосферу"
      description="Короткие, правдоподобные фрагменты отзывов: большие порции, быстрая подача, вежливый персонал и сербский колорит."
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-[var(--shadow-soft)]">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="accent">Рейтинг {restaurant.rating}</Badge>
              <Badge tone="soft">{restaurant.trust.ratingsCount} оценок</Badge>
              <Badge tone="soft">{restaurant.trust.reviewsCount} отзывов</Badge>
              <Badge tone="soft">{restaurant.trust.badge}</Badge>
            </div>
            <h3 className="mt-5 font-[var(--font-heading)] text-3xl tracking-tight text-white">
              “Хочется вернуться”
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Большие порции, быстрый сервис и настоящая таверная атмосфера —
              именно это чаще всего отмечают гости. Ниже — короткие фрагменты
              отзывов, чтобы почувствовать настроение.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <MiniStat title="Порции" value="большие" />
              <MiniStat title="Подача" value="быстрая" />
              <MiniStat title="Персонал" value="вежливый" />
              <MiniStat title="Атмосфера" value="уютная" />
            </div>
          </div>
        </Reveal>

        <div>
          <div className="hidden grid-cols-2 gap-4 md:grid">
            {reviews.slice(0, 6).map((r, idx) => (
              <Reveal key={r.id} delayMs={idx * 60}>
                <ReviewCard {...r} />
              </Reveal>
            ))}
          </div>

          <div className="md:hidden">
            <div className="flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {reviews.map((r) => (
                <div key={r.id} className="min-w-[84%] snap-start">
                  <ReviewCard {...r} />
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-white/45">
              Листайте в сторону, чтобы посмотреть больше отзывов.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function MiniStat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
      <div className="text-xs uppercase tracking-[0.22em] text-white/55">
        {title}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

function ReviewCard({
  name,
  date,
  text,
  highlight,
  rating,
}: {
  name: string;
  date: string;
  text: string;
  highlight?: string;
  rating?: 4 | 5;
}) {
  return (
    <article className="h-full rounded-3xl border border-white/10 bg-white/6 p-5 shadow-[var(--shadow-soft)] transition hover:border-white/16 hover:bg-white/8">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="mt-1 text-xs text-white/55">{date}</p>
        </div>
        {rating ? (
          <div className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-medium text-white/75">
            ★ {rating}.0
          </div>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-white/70">{text}</p>
      {highlight ? (
        <div className="mt-4 text-xs text-amber-200/90">{highlight}</div>
      ) : null}
    </article>
  );
}

