export interface ReservationPayload {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  comment?: string;
}

/**
 * Frontend-only submit stub.
 * Позже можно заменить на POST в API (например `/api/reservations/`).
 */
export async function submitReservation(_payload: ReservationPayload) {
  void _payload;
  await new Promise((r) => setTimeout(r, 650));
}

