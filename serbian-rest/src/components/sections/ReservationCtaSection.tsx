"use client";

import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink, Button } from "@/components/ui/Button";
import { ReservationModal } from "@/components/reservation/ReservationModal";

export function ReservationCtaSection() {
  return (
    <Section
      eyebrow="Бронь"
      title="Забронируйте стол — без лишних слов"
      description="Оставьте заявку — мы перезвоним для подтверждения. Быстро, удобно и по‑человечески."
      className="py-14"
    >
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-[linear-gradient(180deg,rgba(245,158,11,0.14),rgba(255,255,255,0.06))] p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-amber-500/15 blur-2xl" />
        <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-orange-500/10 blur-2xl" />

        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge tone="soft">Ужин</Badge>
              <Badge tone="soft">Бизнес-ланч</Badge>
              <Badge tone="soft">Компания</Badge>
            </div>
            <h3 className="mt-5 font-[var(--font-heading)] text-3xl tracking-tight text-white sm:text-4xl">
              Тёплая таверна ждёт вас сегодня
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Уточним детали и подтвердим бронь по телефону. Можно добавить
              комментарий — например, “у окна” или “на компанию”.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ReservationModal
              trigger={(open) => (
                <Button onClick={open} className="w-full justify-center">
                  Забронировать стол
                </Button>
              )}
            />
            <ButtonLink
              href="#menu"
              variant="secondary"
              className="w-full justify-center"
            >
              Посмотреть меню
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

