export interface Review {
  id: string;
  name: string;
  date: string; // human readable, e.g. "февраль 2026"
  text: string;
  highlight?: string;
  rating?: 4 | 5;
}

