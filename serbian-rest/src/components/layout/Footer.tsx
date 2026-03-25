import { restaurant } from "@/config/restaurant";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { VkIcon } from "@/components/ui/VkIcon";

const links = [
  { href: "#about", label: "О нас" },
  { href: "#menu", label: "Меню" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/35">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-[var(--font-heading)] text-2xl tracking-tight text-white">
              {restaurant.name}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Сербская кухня, гриль и щедрые порции — тёплая таверна в центре
              Тюмени.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="soft">Сербская кухня</Badge>
              <Badge tone="soft">Гриль</Badge>
              <Badge tone="soft">{restaurant.hoursShort}</Badge>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">
              Навигация
            </p>
            <ul className="mt-4 grid gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    className="text-sm text-white/70 hover:text-white"
                    href={l.href}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">
              Контакты
            </p>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              <p>{restaurant.address}</p>
              <a className="hover:text-white" href={restaurant.phoneHref}>
                {restaurant.phoneDisplay}
              </a>
              <p>{restaurant.hoursShort}</p>
            </div>
            <div className="mt-5 flex gap-2">
              <a
                className="rounded-xl border border-white/12 bg-white/6 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                href={restaurant.social.vk}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <VkIcon className="text-white/85" />
                  <span>serbtaverna72</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {restaurant.name}. Все права защищены.
          </p>
          <p>Тюмень • {restaurant.address}</p>
        </div>
      </Container>
    </footer>
  );
}

