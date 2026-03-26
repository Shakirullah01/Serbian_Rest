"use client";

import { useMemo, useState } from "react";
import { reviews } from "@/data/reviews";
import { restaurant } from "@/config/restaurant";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const total = reviews.length;
  const current = reviews[index];
  const secondary = useMemo(
    () => reviews[(index + 1) % total] ?? null,
    [index, total]
  );

  function prev() {
    setIndex((v) => (v - 1 + total) % total);
  }
  function next() {
    setIndex((v) => (v + 1) % total);
  }

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

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-4 shadow-[var(--shadow-soft)]">
            <div className="grid gap-3 md:grid-cols-2">
              {current ? <ReviewCard {...current} /> : null}
              {secondary ? (
                <div className="hidden md:block">
                  <ReviewCard {...secondary} compact />
                </div>
              ) : null}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                {reviews.map((r, i) => (
                  <button
                    key={r.id}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition",
                      i === index ? "w-6 bg-amber-400" : "w-2 bg-white/35"
                    )}
                    aria-label={`Отзыв ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="rounded-2xl border border-white/12 bg-white/6 p-2 text-white/85 hover:bg-white/10"
                  aria-label="Предыдущий отзыв"
                >
                  <ArrowLeft />
                </button>
                <button
                  onClick={next}
                  className="rounded-2xl border border-white/12 bg-white/6 p-2 text-white/85 hover:bg-white/10"
                  aria-label="Следующий отзыв"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
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
  compact,
}: {
  name: string;
  date: string;
  text: string;
  highlight?: string;
  rating?: 4 | 5;
  compact?: boolean;
}) {
  return (
    <article className="h-full rounded-3xl border border-white/10 bg-white/6 p-5 transition hover:border-white/16 hover:bg-white/8">
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
      <p
        className={cn(
          "mt-4 text-sm leading-relaxed text-white/70",
          compact && "max-h-[5.8rem] overflow-hidden"
        )}
      >
        {text}
      </p>
      {highlight ? (
        <div className="mt-4 text-xs text-amber-200/90">{highlight}</div>
      ) : null}
    </article>
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

