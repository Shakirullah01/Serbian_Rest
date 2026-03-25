import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://serbskaya-taverna.demo"),
  title: {
    default: "Сербская таверна — сербская кухня в Тюмени",
    template: "%s — Сербская таверна",
  },
  description:
    "Сербская таверна в Тюмени: сербская кухня, блюда на гриле, щедрые порции и тёплая атмосфера. Официальный сайт.",
  keywords: [
    "Сербская таверна",
    "сербская кухня",
    "Тюмень",
    "гриль",
    "бизнес-ланч",
    "ресторан",
    "тавeрна",
  ],
  openGraph: {
    title: "Сербская таверна — сербская кухня в Тюмени",
    description:
      "Сербская кухня, гриль и уютная атмосфера в Тюмени.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Сербская таверна — сербская кухня в Тюмени",
    description:
      "Сербская кухня, гриль и уютная атмосфера в Тюмени.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        {children}
      </body>
    </html>
  );
}
