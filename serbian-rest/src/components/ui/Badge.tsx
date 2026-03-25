import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function Badge({
  className,
  tone = "default",
  ...props
}: HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "accent" | "soft";
}) {
  const toneClass =
    tone === "accent"
      ? "bg-amber-500/14 text-amber-100 border-amber-500/28"
      : tone === "soft"
        ? "bg-white/7 text-white/80 border-white/10"
        : "bg-white/10 text-white/85 border-white/12";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide backdrop-blur",
        toneClass,
        className
      )}
      {...props}
    />
  );
}

