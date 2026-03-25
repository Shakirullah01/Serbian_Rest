"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
  ReservationPayload,
  submitReservation,
} from "@/lib/reservation";
import type { FormEvent } from "react";

type FieldErrors = Partial<Record<keyof ReservationPayload, string>>;

const inputBase =
  "w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/35 transition focus:border-amber-500/30 focus:bg-white/7";

export function ReservationForm({ onSuccess }: { onSuccess?: () => void }) {
  const now = useMemo(() => new Date(), []);
  const defaultDate = useMemo(() => {
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  }, [now]);

  const [payload, setPayload] = useState<ReservationPayload>({
    name: "",
    phone: "",
    date: defaultDate,
    time: "19:00",
    guests: 2,
    comment: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  function validate(p: ReservationPayload): FieldErrors {
    const e: FieldErrors = {};
    if (!p.name.trim()) e.name = "Введите имя";
    if (!p.phone.trim()) e.phone = "Введите телефон";
    if (!p.date.trim()) e.date = "Выберите дату";
    if (!p.time.trim()) e.time = "Выберите время";
    if (!Number.isFinite(p.guests) || p.guests < 1 || p.guests > 20)
      e.guests = "Укажите количество гостей (1–20)";
    return e;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("idle");

    const eMap = validate(payload);
    setErrors(eMap);
    if (Object.keys(eMap).length) return;

    setStatus("submitting");
    try {
      await submitReservation(payload);
      setStatus("success");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="text-xs font-medium text-white/70">Имя</label>
          <input
            className={cn(inputBase, errors.name && "border-red-500/45")}
            value={payload.name}
            onChange={(ev) => setPayload((p) => ({ ...p, name: ev.target.value }))}
            placeholder="Например, Ирина"
            autoComplete="name"
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-red-300">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label className="text-xs font-medium text-white/70">Телефон</label>
          <input
            className={cn(inputBase, errors.phone && "border-red-500/45")}
            value={payload.phone}
            onChange={(ev) =>
              setPayload((p) => ({ ...p, phone: ev.target.value }))
            }
            placeholder="+7 (3452) 59-09-06"
            inputMode="tel"
            autoComplete="tel"
          />
          {errors.phone ? (
            <p className="mt-1 text-xs text-red-300">{errors.phone}</p>
          ) : null}
        </div>
        <div>
          <label className="text-xs font-medium text-white/70">Дата</label>
          <input
            className={cn(inputBase, errors.date && "border-red-500/45")}
            value={payload.date}
            onChange={(ev) => setPayload((p) => ({ ...p, date: ev.target.value }))}
            type="date"
          />
          {errors.date ? (
            <p className="mt-1 text-xs text-red-300">{errors.date}</p>
          ) : null}
        </div>
        <div>
          <label className="text-xs font-medium text-white/70">Время</label>
          <input
            className={cn(inputBase, errors.time && "border-red-500/45")}
            value={payload.time}
            onChange={(ev) => setPayload((p) => ({ ...p, time: ev.target.value }))}
            type="time"
          />
          {errors.time ? (
            <p className="mt-1 text-xs text-red-300">{errors.time}</p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-medium text-white/70">
            Количество гостей
          </label>
          <input
            className={cn(inputBase, errors.guests && "border-red-500/45")}
            value={payload.guests}
            onChange={(ev) =>
              setPayload((p) => ({ ...p, guests: Number(ev.target.value) }))
            }
            type="number"
            min={1}
            max={20}
          />
          {errors.guests ? (
            <p className="mt-1 text-xs text-red-300">{errors.guests}</p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-medium text-white/70">Комментарий</label>
          <textarea
            className={cn(inputBase, "min-h-24 resize-y")}
            value={payload.comment ?? ""}
            onChange={(ev) =>
              setPayload((p) => ({ ...p, comment: ev.target.value }))
            }
            placeholder="Пожелания по столу, детский стул и т.д."
          />
        </div>
      </div>

      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/55">Подтверждение — по звонку.</p>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Отправляем…" : "Забронировать"}
        </Button>
      </div>

      {status === "success" ? (
        <div className="rounded-2xl border border-amber-500/25 bg-amber-500/10 p-4 text-sm text-amber-100">
          Заявка принята. Мы свяжемся с вами для подтверждения брони.
        </div>
      ) : null}
      {status === "error" ? (
        <div className="rounded-2xl border border-red-500/25 bg-red-500/10 p-4 text-sm text-red-100">
          Не удалось отправить заявку. Попробуйте ещё раз.
        </div>
      ) : null}
    </form>
  );
}

