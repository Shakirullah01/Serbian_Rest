import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { ReactNode } from "react";

const features = [
  {
    title: "Доставка еды",
    text: "Привезём любимые блюда — вкус и подача остаются на уровне.",
    icon: TruckIcon,
  },
  {
    title: "Еда навынос",
    text: "Удобно забрать по пути — быстро и аккуратно упаковано.",
    icon: BagIcon,
  },
  {
    title: "Оплата картой",
    text: "Без наличных — легко и привычно.",
    icon: CardIcon,
  },
  {
    title: "Бизнес-ланч",
    text: "Сытно, честно и без долгого ожидания.",
    icon: ClockIcon,
  },
  {
    title: "Спортивные трансляции",
    text: "Матчи, турнирные вечера и атмосфера болельщиков.",
    icon: ScreenIcon,
  },
  {
    title: "Барная стойка",
    text: "Импортное пиво и хорошая компания — как в таверне.",
    icon: BeerIcon,
  },
  {
    title: "Чай и кофе",
    text: "Хорошее завершение ужина или пауза в середине дня.",
    icon: CupIcon,
  },
  {
    title: "Туалет",
    text: "Комфорт в деталях — как и должно быть в хорошем месте.",
    icon: DoorIcon,
  },
] as const;

export function FeaturesSection() {
  return (
    <Section
      eyebrow="Преимущества"
      title="То, за что нас выбирают"
      description="Комфорт, сервис и настроение — всё, что делает визит действительно приятным."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <Reveal key={f.title} delayMs={idx * 60}>
            <div className="rounded-3xl border border-white/10 bg-white/6 p-5 shadow-[var(--shadow-soft)] transition hover:border-white/16 hover:bg-white/8">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-amber-500/25 bg-amber-500/10 text-amber-100">
                  <f.icon />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">
                    {f.text}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function iconBase(children: ReactNode) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function TruckIcon() {
  return iconBase(
    <>
      <path
        d="M3 7h11v10H3V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 10h4l3 3v4h-7v-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="currentColor"
        opacity="0.15"
      />
    </>
  );
}

function BagIcon() {
  return iconBase(
    <>
      <path
        d="M7 9V7a5 5 0 0 1 10 0v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 9h12l1 12H5L6 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </>
  );
}

function CardIcon() {
  return iconBase(
    <>
      <path
        d="M4 7h16v10H4V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 10h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </>
  );
}

function ClockIcon() {
  return iconBase(
    <>
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

function ScreenIcon() {
  return iconBase(
    <>
      <path
        d="M4 6h16v10H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 20h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 16v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  );
}

function BeerIcon() {
  return iconBase(
    <>
      <path
        d="M7 7h8v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15 9h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 3h4a2 2 0 0 1 2 2v2H7V5a2 2 0 0 1 2-2Z"
        fill="currentColor"
        opacity="0.12"
      />
    </>
  );
}

function CupIcon() {
  return iconBase(
    <>
      <path
        d="M6 8h10v6a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 9h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 21h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  );
}

function DoorIcon() {
  return iconBase(
    <>
      <path
        d="M7 3h10v18H7V3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 12h.01"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </>
  );
}


