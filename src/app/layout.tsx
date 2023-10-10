import type { Metadata } from "next";
import { Karla as FontKarla } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/lib/site";

export const fontKarla = FontKarla({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
  keywords: ["Edward Ramos", "EdwardR0507", "Tech", "Web Development"],
  authors: [
    {
      name: "Edward Ramos",
      url: "https://github.com/EdwardR0507",
    },
  ],
  creator: "Edward Ramos",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@EdRamosV",
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontKarla.className}>{children}</body>
    </html>
  );
}
