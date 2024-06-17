import type { Metadata } from "next";
import { Karla as FontKarla } from "next/font/google";
import { ServerThemeProvider } from "@wits/next-themes";

import { Header, Navbar } from "@/components/molecules";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";
import { getDictionary } from "@/lib/lang/get-dictionary";
import { Locale } from "@/i18n-config";

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

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const dictionary = await getDictionary(params.lang);

  return (
    <ServerThemeProvider attribute="class" defaultTheme="dark">
      <html lang="en">
        <body
          className={cn("max-w-[1040px] m-auto", fontKarla.className)}
          suppressHydrationWarning
        >
          <Header lang={params.lang} />
          <main className="flex flex-col p-4 min-h-[calc(100vh-136px)] lg:min-h-[calc(100vh-72px)] w-full">
            {children}
          </main>
          <Navbar
            lang={params.lang}
            dictionary={dictionary.COMMON.NAVIGATION}
          />
        </body>
      </html>
    </ServerThemeProvider>
  );
}
