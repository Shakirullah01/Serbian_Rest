import type { MenuCategory } from "@/types/menu";

/**
 * Картинки блюд (локальные):
 * - положите фото в `public/images/menu/`
 * - далее используйте пути вида `/images/menu/<file>.jpg`
 * Если фото нет — UI аккуратно покажет плейсхолдер.
 */
export const menuCategories: MenuCategory[] = [
  {
    id: "salads",
    label: "Салаты",
    items: [
      {
        id: "salad-tongue",
        name: "Салат с говяжьим языком",
        description:
          "Нежный говяжий язык, свежие овощи и фирменная заправка — сытно и по‑домашнему.",
        priceRub: 740,
        weightGr: 250,
        imageSrc: "/images/menu/salat-yazyk.jpg",
      },
      {
        id: "salad-shopski",
        name: "Салат “Шопский”",
        description:
          "Классика Балкан: сочные овощи, брынза и лёгкая свежесть в каждой ложке.",
        priceRub: 540,
        weightGr: 250,
        imageSrc: "/images/menu/salat-shopski.jpg",
      },
      {
        id: "salad-squid",
        name: "Салат с кальмаром",
        description:
          "Кальмар, овощи и нежная текстура — сбалансированный вкус без тяжести.",
        priceRub: 760,
        weightGr: 250,
        imageSrc: "/images/menu/salat-kalmar.jpg",
      },
      {
        id: "salad-shrimp",
        name: "Салат с тигровыми креветками",
        description:
          "Тигровые креветки, свежие листья и выразительная заправка — ярко и аппетитно.",
        priceRub: 820,
        weightGr: 200,
        imageSrc: "/images/menu/salat-krevetki.jpg",
      },
      {
        id: "salad-salmon",
        name: "Салат с сёмгой",
        description:
          "Сёмга, свежие овощи и мягкие акценты соуса — лёгкий, но сытный выбор.",
        priceRub: 860,
        weightGr: 200,
        imageSrc: "/images/menu/salat-semga.jpg",
      },
      {
        id: "salad-warm-roastbeef",
        name: "Тёплый салат с ростбифом",
        description:
          "Тёплый ростбиф, овощи и ароматные специи — идеален, когда хочется “плотно, но красиво”.",
        priceRub: 840,
        weightGr: 250,
        imageSrc: "/images/menu/teplyi-salat-rostbif.jpg",
      },
      {
        id: "salad-chicken",
        name: "Салат с курицей",
        description:
          "Курица, свежие овощи и лёгкая заправка — понятный вкус и хороший баланс.",
        priceRub: 630,
        weightGr: 250,
        imageSrc: "/images/menu/salat-kuritsa.jpg",
      },
      {
        id: "salad-eggplant-crisp",
        name: "Салат с хрустящим баклажаном",
        description:
          "Хрустящий баклажан, сочные овощи и соус с характером — любимец гостей.",
        priceRub: 610,
        weightGr: 250,
        imageSrc: "/images/menu/salat-baklazhan.jpg",
      },
    ],
  },
  {
    id: "serbian-specialties",
    label: "Сербские специалитеты",
    items: [
      {
        id: "yagnenok-sach",
        name: "Ягнёнок сач",
        description:
          "Томлёный молодой ягнёнок по традиционному сербскому рецепту. Подаётся с жареным картофелем с розмарином и овощным рататуем с соусом на каймаке.",
        priceRub: 1380,
        weightGr: 500,
        imageSrc: "/images/menu/yagnenok-sach.jpg",
        isPopular: true,
      },
      {
        id: "telenok-sach",
        name: "Телёнок сач",
        description:
          "Томлёная телятина по традиционному сербскому рецепту. Подаётся с жареным картофелем с розмарином и овощным рататуем со сливочным демигласом.",
        priceRub: 1340,
        weightGr: 470,
        imageSrc: "/images/menu/telenok-sach.jpg",
        isPopular: true,
      },
      {
        id: "ribich",
        name: "Рибич",
        description:
          "Томлёная говядина с овощами на картофельной подушке с каймаком.",
        priceRub: 980,
        weightGr: 400,
        imageSrc: "/images/menu/ribich.jpg",
        isPopular: true,
      },
      {
        id: "serbian-sausages-grill",
        name: "Сербские колбаски на гриле",
        description: "Подаются с тушёной капустой по-венски.",
        priceRub: 820,
        weightGr: 350,
        imageSrc: "/images/menu/serbskie-kolbaski.jpg",
        isPopular: true,
      },
      {
        id: "rulka-serbian",
        name: "Рулька по-сербски",
        description:
          "Большая порция для компании: сочное мясо, яркие специи и подача в духе таверны.",
        priceRub: 2800,
        weightGr: 1300,
        imageSrc: "/images/menu/rulka.jpg",
      },
    ],
  },
  {
    id: "soups",
    label: "Супы",
    items: [
      {
        id: "soup-seafood",
        name: "Суп с морепродуктами",
        description:
          "Насыщенный бульон с морепродуктами — ароматный и согревающий.",
        priceRub: 780,
        weightGr: 350,
        imageSrc: "/images/menu/sup-moreprodukty.jpg",
      },
      {
        id: "soup-chicken-egg",
        name: "Суп куриный с яйцом",
        description:
          "Домашний куриный суп с яйцом и зеленью — лёгко и уютно.",
        priceRub: 420,
        weightGr: 350,
        imageSrc: "/images/menu/sup-kuriny.jpg",
      },
      {
        id: "soup-mushroom",
        name: "Грибница",
        description:
          "Грибной суп с мягким вкусом и ароматом — то, что нужно в прохладный день.",
        priceRub: 480,
        weightGr: 350,
        imageSrc: "/images/menu/gribnitsa.jpg",
      },
      {
        id: "soup-fish",
        name: "Суп рыбный",
        description:
          "Чистый рыбный бульон, специи и зелень — лёгкий, но выразительный.",
        priceRub: 620,
        weightGr: 300,
        imageSrc: "/images/menu/sup-rybny.jpg",
      },
      {
        id: "telechya-chorba",
        name: "Телячья чорба",
        description:
          "Традиционный суп с телятиной, овощами, специями и зеленью.",
        priceRub: 560,
        weightGr: 320,
        imageSrc: "/images/menu/telechya-chorba.jpg",
        isPopular: true,
      },
    ],
  },
  {
    id: "meat-dishes",
    label: "Мясные блюда",
    items: [
      {
        id: "golyashka-yagnenka",
        name: "Голяшка ягнёнка",
        description:
          "Сочная голяшка ягнёнка, томлёная до мягкости — богатый вкус и аромат.",
        priceRub: 1980,
        weightGr: 690,
        imageSrc: "/images/menu/golyashka-yagnenka.jpg",
      },
      {
        id: "shashlik-pork",
        name: "Шашлык из свиной вырезки",
        description:
          "Нежная вырезка на углях — сочное мясо и правильная прожарка.",
        priceRub: 870,
        weightGr: 440,
        imageSrc: "/images/menu/shashlik-svinina.jpg",
      },
      {
        id: "sheika-haiduk",
        name: "Шейка свиная “Хайдук”",
        description:
          "Маринованная свиная шея, приготовленная на гриле, подаётся с пикантным соусом.",
        priceRub: 980,
        weightGr: 460,
        imageSrc: "/images/menu/sheika-haiduk.jpg",
        isPopular: true,
      },
      {
        id: "shashlik-chicken",
        name: "Шашлык куриный",
        description:
          "Курица на гриле со специями — лёгкий вариант, который всегда попадает в точку.",
        priceRub: 750,
        weightGr: 440,
        imageSrc: "/images/menu/shashlik-kuritsa.jpg",
      },
    ],
  },
  {
    id: "fish-and-seafood",
    label: "Рыба и морепродукты",
    items: [
      {
        id: "dorado-grill",
        name: "Дорадо на гриле",
        description:
          "Подаётся с жареным картофелем с розмарином и овощным рататуем.",
        priceRub: 1680,
        weightGr: 531,
        imageSrc: "/images/menu/dorado-grill.jpg",
        isPopular: true,
      },
      {
        id: "sudak-cheese",
        name: "Судак под сыром",
        description:
          "Нежный судак под сырной корочкой — мягко, сливочно и очень сытно.",
        priceRub: 940,
        weightGr: 440,
        imageSrc: "/images/menu/sudak-syr.jpg",
      },
      {
        id: "salmon-fillet-grill",
        name: "Филе лосося на гриле",
        description:
          "Филе лосося на гриле — сочное внутри, с аппетитной корочкой снаружи.",
        priceRub: 1350,
        weightGr: 364,
        imageSrc: "/images/menu/losos-grill.jpg",
      },
    ],
  },
  {
    id: "dishes-for-company",
    label: "Блюда на компанию",
    items: [
      {
        id: "serpska-plata",
        name: "Мясное ассорти “Серпска плата”",
        description:
          "Большое ассорти для компании: разные виды мяса с гриля и насыщенные вкусы Балкан.",
        priceRub: 7900,
        weightGr: 2135,
        imageSrc: "/images/menu/serpska-plata.jpg",
      },
      {
        id: "plata-adriatika",
        name: "Рыбное ассорти на гриле “Плата Адриатика”",
        description:
          "Ассорти рыбы и морепродуктов на гриле — эффектная подача для компании.",
        priceRub: 8450,
        weightGr: 2000,
        imageSrc: "/images/menu/plata-adriatika.jpg",
      },
    ],
  },
  {
    id: "desserts",
    label: "Десерты",
    items: [
      {
        id: "choco-cheesecake",
        name: "Шоколадный чизкейк со сливочным соусом",
        priceRub: 485,
        weightGr: 200,
        imageSrc: "/images/menu/choco-cheesecake.jpg",
        isPopular: true,
      },
      {
        id: "milfei",
        name: "Мильфей",
        description:
          "Хрустящие слои и нежный крем — лёгкий десерт с красивой подачей.",
        priceRub: 530,
        imageSrc: "/images/menu/milfei.jpg",
      },
    ],
  },
  {
    id: "cold-appetizers",
    label: "Холодные закуски",
    items: [
      {
        id: "mezze",
        name: "Закуска сербская “Меззе”",
        description:
          "Закуска под разговор и напитки: разнообразные вкусы в одной подаче.",
        priceRub: 2450,
        weightGr: 400,
        imageSrc: "/images/menu/mezze.jpg",
      },
    ],
  },
];

export const signatureDishes = [
  {
    id: "sig-yagnenok-sach",
    name: "Ягнёнок сач",
    description:
      "Томлёный молодой ягнёнок по традиционному сербскому рецепту. Подаётся с жареным картофелем с розмарином и овощным рататуем с соусом на каймаке.",
    priceRub: 1380,
    weightGr: 500,
    imageSrc: "/images/menu/yagnenok-sach.jpg",
    isPopular: true,
  },
  {
    id: "sig-telenok-sach",
    name: "Телёнок сач",
    description:
      "Томлёная телятина по традиционному сербскому рецепту. Подаётся с жареным картофелем с розмарином и овощным рататуем со сливочным демигласом.",
    priceRub: 1340,
    weightGr: 470,
    imageSrc: "/images/menu/telenok-sach.jpg",
    isPopular: true,
  },
  {
    id: "sig-ribich",
    name: "Рибич",
    description:
      "Томлёная говядина с овощами на картофельной подушке с каймаком.",
    priceRub: 980,
    weightGr: 400,
    imageSrc: "/images/menu/ribich.jpg",
    isPopular: true,
  },
  {
    id: "sig-sausages",
    name: "Сербские колбаски на гриле",
    description: "Подаются с тушёной капустой по-венски.",
    priceRub: 820,
    weightGr: 350,
    imageSrc: "/images/menu/serbskie-kolbaski.jpg",
    isPopular: true,
  },
  {
    id: "sig-sheika",
    name: "Шейка свиная «Хайдук»",
    description:
      "Маринованная свиная шея, приготовленная на гриле, подаётся с пикантным соусом.",
    priceRub: 980,
    weightGr: 460,
    imageSrc: "/images/menu/sheika-haiduk.jpg",
    isPopular: true,
  },
  {
    id: "sig-dorado",
    name: "Дорадо на гриле",
    description:
      "Подаётся с жареным картофелем с розмарином и овощным рататуем.",
    priceRub: 1680,
    weightGr: 531,
    imageSrc: "/images/menu/dorado-grill.jpg",
    isPopular: true,
  },
  {
    id: "sig-chorba",
    name: "Телячья чорба",
    description:
      "Традиционный суп с телятиной, овощами, специями и зеленью.",
    priceRub: 560,
    weightGr: 320,
    imageSrc: "/images/menu/telechya-chorba.jpg",
  },
  {
    id: "sig-cheesecake",
    name: "Шоколадный чизкейк со сливочным соусом",
    priceRub: 485,
    weightGr: 200,
    imageSrc: "/images/menu/choco-cheesecake.jpg",
  },
] satisfies Array<{
  id: string;
  name: string;
  description?: string;
  priceRub: number;
  weightGr?: number;
  imageSrc?: string;
  isPopular?: boolean;
}>;

