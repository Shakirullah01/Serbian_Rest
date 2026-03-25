export type MenuCategoryId =
  | "salads"
  | "serbian-specialties"
  | "soups"
  | "meat-dishes"
  | "fish-and-seafood"
  | "dishes-for-company"
  | "desserts"
  | "cold-appetizers";

export type MoneyRub = number;

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  priceRub: MoneyRub;
  weightGr?: number;
  imageSrc?: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  items: MenuItem[];
}
