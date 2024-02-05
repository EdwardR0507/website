import type { Metadata } from "next";
import { Karla as FontKarla } from "next/font/google";
import { ServerThemeProvider } from "@wits/next-themes";

import { Header, Navbar } from "@/components/molecules";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

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
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class" defaultTheme="dark">
      <html lang="en">
        <body
          className={cn(
            "max-w-[1440px] m-auto bg-custom-background",
            fontKarla.className
          )}
          suppressHydrationWarning
        >
          <Header />
          <main className="p-4">{children}</main>
          <Navbar />
        </body>
      </html>
    </ServerThemeProvider>
  );
}
