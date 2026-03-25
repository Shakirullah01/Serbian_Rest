"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { ReservationForm } from "@/components/reservation/ReservationForm";
import type { ReactNode } from "react";

export function ReservationModal({
  trigger,
  title = "Бронирование стола",
}: {
  trigger: (open: () => void) => ReactNode;
  title?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {trigger(() => setOpen(true))}
      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        <ReservationForm onSuccess={() => setTimeout(() => setOpen(false), 900)} />
      </Modal>
    </>
  );
}

