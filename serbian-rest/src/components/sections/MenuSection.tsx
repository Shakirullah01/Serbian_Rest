"use client";

import { useMemo, useState } from "react";
import { menuCategories } from "@/data/menu";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { SmartImage } from "@/components/ui/SmartImage";
import { formatRub, formatWeightGr } from "@/lib/format";
import type { MenuCategory } from "@/types/menu";
import { Badge } from "@/components/ui/Badge";
import { resolveDishImage } from "@/lib/images/resolver";

export function MenuSection() {
  const [active, setActive] = useState(menuCategories[0]?.id);
  const activeCategory = useMemo(
    () => menuCategories.find((c) => c.id === active) ?? menuCategories[0],
    [active]
  );

  return (
    <Section
      id="menu"
      eyebrow="Меню"
      title="Категории и популярные позиции"
      description="Выберите категорию — покажем позиции с фото, весом и ценой. Всё собрано так, как на настоящем сайте ресторана."
      className="py-12 sm:py-14"
    >
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {menuCategories.map((c) => (
          <button
            key={c.id}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm transition backdrop-blur",
              active === c.id
                ? "border-amber-500/35 bg-amber-500/15 text-amber-100"
                : "border-white/12 bg-white/6 text-white/75 hover:bg-white/10 hover:text-white"
            )}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
        <MenuList category={activeCategory} />

        <aside className="rounded-2xl border border-white/10 bg-white/6 p-4 shadow-[var(--shadow-soft)]">
          <p className="text-xs uppercase tracking-[0.22em] text-white/55">
            Подсказка
          </p>
          <h3 className="mt-2 font-[var(--font-heading)] text-xl tracking-tight text-white">
            Хотите быстро выбрать?
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-white/65">
            В “Сербских специалитетах” — сац и блюда, которые чаще всего
            рекомендуют гостям. Для обеда — супы и салаты.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Badge tone="soft">Большие порции</Badge>
            <Badge tone="soft">Быстрая подача</Badge>
            <Badge tone="soft">Импортное пиво</Badge>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function MenuList({ category }: { category: MenuCategory }) {
  if (!category) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/6 p-6 text-white/70">
        Пока нет данных меню.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/6 p-1.5 shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between gap-3 px-3 py-3">
        <div>
          <h3 className="font-[var(--font-heading)] text-xl tracking-tight text-white">
            {category.label}
          </h3>
          <p className="mt-0.5 text-xs text-white/60">
            {category.items.length} позиций
          </p>
        </div>
      </div>

      <div className="grid">
        {category.items.map((item) => (
          <div
            key={item.id}
            className="group grid grid-cols-[76px_1fr] gap-3 rounded-xl px-3 py-3 transition hover:bg-white/6 sm:grid-cols-[86px_1fr]"
          >
            <div className="relative h-[76px] w-[76px] overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:h-[86px] sm:w-[86px]">
              <SmartImage
                src={resolveDishImage({
                  dishName: item.name,
                  categoryId: category.id,
                  explicitSrc: item.imageSrc,
                })}
                alt={item.name}
                fill
                sizes="96px"
                className="object-cover transition duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />
            </div>

            <div className="min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="truncate text-sm font-semibold tracking-tight text-white">
                      {item.name}
                    </p>
                    {item.isPopular ? (
                      <Badge tone="accent" className="py-0.5">
                        Популярное
                      </Badge>
                    ) : null}
                  </div>
                  {item.description ? (
                    <p className="mt-1 text-xs leading-relaxed text-white/60 sm:text-sm">
                      {item.description}
                    </p>
                  ) : null}
                </div>

                <div className="shrink-0 text-right">
                  <div className="text-sm font-semibold text-white sm:text-base">
                    {formatRub(item.priceRub)}
                  </div>
                  <div className="mt-0.5 text-[11px] text-white/55 sm:text-xs">
                    {formatWeightGr(item.weightGr) ?? "—"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

