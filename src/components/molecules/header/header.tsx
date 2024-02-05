"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useTheme } from "@wits/next-themes";
import { motion } from "framer-motion";

import { fadeIn } from "@/utils";
import { socialMediaSection } from "./header-items";

import WorldIcon from "../../atoms/icons/WorldIcon";
import DarkMode from "@/components/atoms/icons/DarkMode";
import LightMode from "../../atoms/icons/LightMode";

export const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  const pathName = usePathname();
  const locale = pathName.split("/")[1];

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const getOppositeLanguagePath = () => {
    const currentLanguage = locale === "es" ? "en" : "es";
    const additionalPath = pathName.split("/")[2] ?? "";
    return `/${currentLanguage}/${additionalPath}`;
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.header
      variants={fadeIn("up", 0.01)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="relative z-50 top-0 w-full "
    >
      <div className="w-full h-full flex justify-between items-center p-4">
        <Link href={`/${locale}`} className="grow-0 text-4xl">
          👋
        </Link>
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
            <Link href={getOppositeLanguagePath()} passHref>
              <i className="cursor-pointer">
                <WorldIcon />
              </i>
            </Link>
          </div>
        )}
      </div>
    </motion.header>
  );
};
