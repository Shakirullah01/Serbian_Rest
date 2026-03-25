## Сербская таверна — demo frontend

Одностраничный лендинг (Next.js App Router + TypeScript + Tailwind) для презентации владельцу ресторана “Сербская таверна” (Тюмень).

### Запуск локально

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

### Куда положить изображения

Проект использует локальные пути (которые вы сможете заменить своими фото):

- **Вариант А (рекомендуется)**: положите фото в `public/images/...`
  - `public/images/hero/` — hero
  - `public/images/gallery/` — галерея
  - `public/images/menu/<category>/` — меню по категориям

- **Вариант B (как у вас сейчас)**: храните фото в `photos of rest/` (по папкам `salad/`, `soups/` и т.д.)
  - проект создаёт Windows junction’ы:
    - `public/images/menu` → `photos of rest`
    - `public/images/gallery` → `photos of rest/interior`
    - `public/images/hero` → `photos of rest/interior`
  - благодаря этому Next.js видит изображения как будто они лежат в `public/`.

Если какого-то файла нет, UI покажет аккуратный плейсхолдер (`public/images/placeholder.svg`) и не “сломается”.

### Где менять контент (главное)

- **Контакты / адрес / телефон**: `src/config/restaurant.ts`
- **Меню (категории + позиции)**: `src/data/menu.ts`
- **Фирменные блюда (карточки “хиты”)**: `src/data/menu.ts` (`signatureDishes`)
- **Отзывы**: `src/data/reviews.ts`
- **Галерея / hero изображения**: `src/data/gallery.ts`
- **Индекс картинок (автогенерация)**: `src/data/imageManifest.ts` (создаётся командой `npm run images:manifest`)
- **Резолвер картинок (нормализация + fuzzy fallback)**: `src/lib/images/resolver.ts`
- **Секции главной страницы (верстка)**: `src/app/page.tsx` и `src/components/sections/*`

### Бронирование (frontend-only demo)

Форма бронирования работает на фронтенде (валидация + “успешная отправка”), но **ничего реально не отправляет**.

- UI формы: `src/components/reservation/ReservationForm.tsx`
- “Отправка” (заглушка под будущий Django API): `src/lib/reservation.ts`

Позже вы сможете заменить `submitReservation()` на реальный `fetch()` в Django endpoint без изменений в дизайне.
