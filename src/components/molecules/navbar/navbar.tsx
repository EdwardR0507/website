"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { fadeIn } from "@/utils";
import { navbarItems } from "./navbar-items";

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <motion.div
      className="fixed bottom-0 z-20 flex flex-col items-center w-full mt-auto lg:justify-center h-max lg:top-1/4 lg:right-10 lg:w-16 lg:max-w-lg lg:h-screen"
      variants={fadeIn("right", 0.05)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <div className="flex items-center justify-around w-full px-4 py-3 lg:py-8 lg:flex-col lg:justify-center gap-y-10 lg:px-4 lg:h-max bg-white/10 backdrop-blur-sm lg:rounded-full">
        {navbarItems.map(({ name, path, icon }) => (
          <div key={name}>
            <Link
              href={path}
              className={cn("group transition-all duration-300", {
                "current-icon-page": path === pathName,
              })}
            >
              <div className="absolute right-0 hidden mr-20 rounded-sm lg:group-hover:flex lg:group-hover:items-center">
                <div className="relative flex items-center p-2 leading-none text-black capitalize bg-white rounded-sm">
                  {name}
                </div>
                <div className="absolute border-l-8 border-r-0 border-solid border-l-white border-y-transparent border-y-4 -right-2" />
              </div>
              {icon}
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
