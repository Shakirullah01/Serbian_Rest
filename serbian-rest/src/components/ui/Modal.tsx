"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import type { ReactNode } from "react";

export function Modal({
  open,
  onClose,
  title,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Закрыть модальное окно"
        className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="relative mx-auto flex min-h-full w-full items-center justify-center px-4 py-10">
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Диалог"}
          className={cn(
            "w-full max-w-xl overflow-hidden rounded-2xl border border-white/12 bg-[#0d0b09] shadow-[var(--shadow)]",
            className
          )}
        >
          {title ? (
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <h3 className="font-[var(--font-heading)] text-xl tracking-tight text-white">
                {title}
              </h3>
              <button
                className="rounded-lg px-2 py-1 text-sm text-white/70 hover:bg-white/8 hover:text-white"
                onClick={onClose}
              >
                Закрыть
              </button>
            </div>
          ) : null}
          <div className="px-5 py-5">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}

