import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <Container>
        <header className="max-w-2xl">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl leading-tight tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {description}
            </p>
          ) : null}
        </header>
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}

