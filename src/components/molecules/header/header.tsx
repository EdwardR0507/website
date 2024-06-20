"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@wits/next-themes";

import { Locale, i18n } from "@/i18n-config";
import { CustomLink } from "../custom-link";
import { socialMediaSection } from "./header-items";

import LightMode from "@/components/atoms/icons/LightMode";
import DarkMode from "@/components/atoms/icons/DarkMode";
import WorldIcon from "@/components/atoms/icons/WorldIcon";

export const Header = ({ lang }: { lang: Locale }) => {
  const [isMounted, setIsMounted] = useState(false);

  const pathName = usePathname();

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const getNewHref = (selectedLanguage: Locale): string => {
    const currentLangIsDefault = lang === i18n.defaultLocale;
    const targetLanguage = currentLangIsDefault
      ? selectedLanguage
      : i18n.defaultLocale;

    const pathSegments = pathName.split("/");

    const newHref =
      targetLanguage === selectedLanguage
        ? `/${targetLanguage}/${pathSegments.slice(1).join("/")}`
        : `/${pathSegments.slice(2).join("/") ?? ""}`;

    return newHref;
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="relative z-50 top-0 w-full ">
      <div className="w-full h-full flex justify-between items-center p-4">
        <CustomLink
          lang={lang}
          href="/"
          className="grow-0 text-4xl"
          aria-label="Home page"
        >
          👋
        </CustomLink>
        <div className="flex grow justify-center gap-6">
          {socialMediaSection.map(({ icon: Icon, href, target }) => (
            <Link
              key={href}
              href={href}
              target={target}
              aria-label={`${href} social media link`}
              className="hover:scale-105 transition-transform duration-150 ease-in-out"
            >
              <Icon />
            </Link>
          ))}
        </div>
        {isMounted && (
          <div className="flex align-center gap-4">
            <div className="grow-0 h-full flex items-center justify-end gap-6">
              <i className="cursor-pointer" onClick={toggleTheme}>
                {theme === "dark" ? <LightMode /> : <DarkMode />}
              </i>
            </div>

            <Link
              href={getNewHref("en")}
              passHref
              replace
              aria-label="Change language"
            >
              <i className="cursor-pointer">
                <WorldIcon />
              </i>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
