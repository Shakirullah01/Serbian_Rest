"use client";

import { restaurant } from "@/config/restaurant";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { ReservationModal } from "@/components/reservation/ReservationModal";
import { resolveHeroImage } from "@/lib/images/resolver";

export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* TODO (фото): положите интерьер/food hero в `photos of rest/interior` (или в `public/images/hero/`) */}
        <SmartImage
          src={resolveHeroImage()}
          alt="Сербская таверна — атмосфера"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[var(--bg)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1100px_600px_at_50%_18%,rgba(245,158,11,0.22),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.55),transparent_55%)]" />
      </div>

      <Container className="grain py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="accent">Хорошее место 2026</Badge>
            <Badge tone="soft">Рейтинг {restaurant.rating}</Badge>
            <Badge tone="soft">Бизнес-ланч</Badge>
            <Badge tone="soft">Живая атмосфера</Badge>
          </div>

          <h1 className="mt-7 font-[var(--font-heading)] text-5xl leading-[0.90] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {restaurant.name}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            Сербская кухня в Тюмени: блюда на гриле, щедрые порции и тёплая
            таверная атмосфера — одинаково хорошо для бизнес-ланча и ужина.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#menu" className="justify-center">
              Посмотреть меню
            </ButtonLink>
            <ReservationModal
              trigger={(open) => (
                <Button
                  variant="secondary"
                  onClick={open}
                  className="justify-center"
                >
                  Забронировать стол
                </Button>
              )}
            />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <TrustPill title="4.5 рейтинг" subtitle="по отзывам гостей" />
            <TrustPill title="Хорошее место" subtitle="2026" />
            <TrustPill title="Бизнес-ланч" subtitle="быстрая подача" />
            <TrustPill title="Живая атмосфера" subtitle="музыка и бар" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustPill({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 backdrop-blur">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-1 text-xs text-white/60">{subtitle}</div>
    </div>
  );
}

