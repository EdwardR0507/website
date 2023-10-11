"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { fadeIn } from "@/utils";
import { socialMediaSection } from "./header-items";

import International from "../../atoms/icons/International";
import LightMode from "../../atoms/icons/LightMode";

export const Header = () => {
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
              className="hover:scale-105 transition-transform duration-150 ease-in-out"
            >
              <Icon />
            </Link>
          ))}
        </div>
        <div className="grow-0 h-full flex items-center justify-end gap-6">
          <i className="cursor-pointer ">
            <LightMode />
          </i>
          <i className="cursor-pointer">
            <International />
          </i>
        </div>
      </div>
    </motion.header>
  );
};
