"use client";

import { restaurant } from "@/config/restaurant";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ReservationModal } from "@/components/reservation/ReservationModal";
import { VkIcon } from "@/components/ui/VkIcon";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Контакты"
      title="Мы рядом — заходите на обед или вечером"
      description="Адрес, телефон, VK и график — всё в одном месте. Нажмите кнопку и действуйте: позвонить, написать или забронировать."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-[var(--shadow-soft)]">
          <div className="grid gap-3 text-sm text-white/70">
            <Row label="Адрес" value={restaurant.address} />
            <Row label="Кухня" value={restaurant.cuisine} />
            <Row label="Формат" value={restaurant.format} />
            <Row label="Телефон" value={restaurant.phoneDisplay} />
            <Row label="Статус" value={restaurant.hoursShort} />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-4">
            <a
              href={restaurant.phoneHref}
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-5 text-sm font-medium text-white/85 hover:bg-white/10"
            >
              Позвонить
            </a>
            <a
              href={restaurant.social.vk}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-5 text-sm font-medium text-white/85 hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-2">
                <VkIcon className="text-white/85" />
                Написать
              </span>
            </a>
            <a
              href={`https://yandex.ru/maps/?text=${encodeURIComponent(restaurant.address)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-5 text-sm font-medium text-white/85 hover:bg-white/10"
            >
              Построить маршрут
            </a>
            <ReservationModal
              trigger={(open) => (
                <Button
                  variant="primary"
                  onClick={open}
                  className="w-full shadow-none"
                >
                  Забронировать стол
                </Button>
              )}
            />
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">
              Часы работы
            </p>
            <div className="mt-3 grid gap-2 text-sm text-white/75">
              <HoursRow day="Понедельник" value={restaurant.hours.monday} />
              <HoursRow day="Вторник" value={restaurant.hours.tuesday} />
              <HoursRow day="Среда" value={restaurant.hours.wednesday} />
              <HoursRow day="Четверг" value={restaurant.hours.thursday} />
              <HoursRow day="Пятница" value={restaurant.hours.friday} />
              <HoursRow day="Суббота" value={restaurant.hours.saturday} />
              <HoursRow day="Воскресенье" value={restaurant.hours.sunday} />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 shadow-[var(--shadow-soft)]">
          <div className="absolute inset-0 bg-[radial-gradient(700px_360px_at_60%_30%,rgba(245,158,11,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),transparent_45%,rgba(0,0,0,0.35))]" />
          <div className="relative h-full min-h-[320px] p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">
              Локация
            </p>
            <h3 className="mt-3 font-[var(--font-heading)] text-3xl tracking-tight text-white">
              {restaurant.city}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {restaurant.address}
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-semibold text-white">Ориентир</div>
                <div className="mt-1 text-sm text-white/65">
                  Центр города, удобно добираться пешком и на транспорте.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-semibold text-white">Связь</div>
                <div className="mt-1 text-sm text-white/65">
                  Телефон: {restaurant.phoneDisplay}. VK: serbtaverna72.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-[160px_1fr] sm:gap-3">
      <div className="text-xs uppercase tracking-[0.22em] text-white/55">
        {label}
      </div>
      <div className="text-sm text-white/85">{value}</div>
    </div>
  );
}

function HoursRow({ day, value }: { day: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-white/65">{day}</span>
      <span className="font-medium text-white/85">{value}</span>
    </div>
  );
}

