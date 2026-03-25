export function formatRub(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}

export function formatWeightGr(value?: number): string | null {
  if (!value) return null;
  return `${value} g`;
}

