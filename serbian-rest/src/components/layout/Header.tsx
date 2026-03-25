"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/config/restaurant";
import { cn } from "@/lib/cn";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/Button";
import { ReservationModal } from "@/components/reservation/ReservationModal";

const nav = [
  { id: "about", label: "О нас" },
  { id: "menu", label: "Меню" },
  { id: "gallery", label: "Галерея" },
  { id: "reviews", label: "Отзывы" },
  { id: "contact", label: "Контакты" },
] as const;

export function Header() {
  const { activeId } = useActiveSection(nav.map((n) => n.id));
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent transition",
        scrolled
          ? "border-white/10 bg-black/55 backdrop-blur supports-[backdrop-filter]:bg-black/45"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-white"
          aria-label="На верх страницы"
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-[var(--font-heading)] text-xl tracking-tight sm:text-2xl">
            {restaurant.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Навигация">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/8 hover:text-white",
                activeId === item.id && "bg-white/10 text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ReservationModal
            trigger={(open) => (
              <Button onClick={open} className="shadow-none">
                Забронировать стол
              </Button>
            )}
          />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ReservationModal
            trigger={(open) => (
              <Button size="sm" onClick={open} className="shadow-none">
                Бронь
              </Button>
            )}
          />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/6 text-white/85 hover:bg-white/10"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Меню</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
            >
              {mobileOpen ? (
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-black/70 backdrop-blur lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:px-6 lg:px-8">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/8 hover:text-white",
                  activeId === item.id && "bg-white/10 text-white"
                )}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={restaurant.phoneHref}
                className="col-span-2 inline-flex h-10 items-center justify-center rounded-xl border border-white/12 bg-white/6 px-4 text-sm font-medium text-white/85 hover:bg-white/10"
              >
                Позвонить
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

