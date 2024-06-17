"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navbarItems } from "./navbar-items";
import { Locale, i18n } from "@/i18n-config";
import { CustomLink } from "../custom-link";
import { getDictionary } from "@/lib/lang/get-dictionary";

interface NavbarProps {
  lang: Locale;
  dictionary: Awaited<ReturnType<typeof getDictionary>>["COMMON"]["NAVIGATION"];
}

export const Navbar = ({ dictionary, lang }: NavbarProps) => {
  const pathName = usePathname();

  const pathNameSplit = pathName.split("/");
  if (i18n.locales.includes(pathNameSplit[1] as Locale))
    pathNameSplit.splice(1, 1);

  const newPath = pathNameSplit.join("/") || "/";

  return (
    <div className="fixed bottom-0 z-20 flex flex-col items-center w-full mt-auto lg:justify-center h-max lg:top-1/4 lg:right-10 lg:w-16 lg:max-w-lg lg:h-screen">
      <div className="flex items-center justify-around w-full px-4 py-3 lg:py-8 lg:flex-col lg:justify-center gap-y-10 lg:px-4 lg:h-max bg-black/10 dark:bg-white/10 backdrop-blur-sm lg:rounded-full">
        {navbarItems(dictionary).map(({ name, path, icon }) => (
          <CustomLink
            key={name}
            lang={lang}
            href={path}
            aria-label={`${name} page`}
            className={cn("group transition-all duration-300", {
              "current-icon-page": path === newPath,
            })}
          >
            <div className="absolute right-0 hidden mr-20 rounded-sm lg:group-hover:flex lg:group-hover:items-center">
              <div className="relative flex items-center p-2 leading-none text-white dark:text-black capitalize bg-black dark:bg-white rounded-sm">
                {name}
              </div>
              <div className="absolute border-l-8 border-r-0 border-solid border-l-black dark:border-l-white border-y-transparent border-y-4 -right-2" />
            </div>
            {icon}
          </CustomLink>
        ))}
      </div>
    </div>
  );
};
