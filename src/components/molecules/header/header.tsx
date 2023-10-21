"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "@wits/next-themes";
import { motion } from "framer-motion";

import { fadeIn } from "@/utils";
import { socialMediaSection } from "./header-items";

import DarkMode from "@/components/atoms/icons/DarkMode";
import LightMode from "../../atoms/icons/LightMode";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

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
        <Link href="/" className="grow-0 text-4xl">
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
          <div className="grow-0 h-full flex items-center justify-end gap-6">
            {theme === "dark" ? (
              <i className="cursor-pointer" onClick={() => setTheme("light")}>
                <LightMode />
              </i>
            ) : (
              <i className="cursor-pointer" onClick={() => setTheme("dark")}>
                <DarkMode />
              </i>
            )}
          </div>
        )}
      </div>
    </motion.header>
  );
};
