export const restaurant = {
  name: "Сербская таверна",
  city: "Тюмень",
  address: "Тюмень, улица Республики, 81",
  cuisine: "сербская",
  format: "таверна",
  phoneDisplay: "+7 (3452) 59-09-06",
  phoneHref: "tel:+73452590906",
  hoursShort: "Открыто до 00:00",
  hours: {
    monday: "12:00–00:00",
    tuesday: "12:00–00:00",
    wednesday: "12:00–00:00",
    thursday: "12:00–00:00",
    friday: "12:00–02:00",
    saturday: "12:00–02:00",
    sunday: "12:00–00:00",
  },
  rating: 4.5,
  trust: {
    ratingsCount: 37,
    reviewsCount: 26,
    badge: "Хорошее место 2026",
  },
  services: [
    "Доставка еды",
    "Еда навынос",
    "Оплата картой",
    "Бизнес-ланч",
    "Сербская кухня",
    "Формат: таверна",
  ] as const,
  features: [
    "Спортивные трансляции",
    "Барная стойка",
    "Чай",
    "Кофе",
    "Туалет",
  ] as const,
  accessibility: {
    wheelchair: "Недоступно для кресел-колясок",
  } as const,
  social: {
    vk: "https://vk.com/serbtaverna72",
  },
} as const;

export type RestaurantConfig = typeof restaurant;
