import React from "react";
import Link, { LinkProps } from "next/link";
import { Locale, i18n } from "@/i18n-config";

interface CustomLinkProps extends LinkProps {
  lang: Locale;
  children: React.ReactNode;
  [key: string]: any;
}

export const CustomLink = ({ lang, href, ...props }: CustomLinkProps) => {
  const isDefaultLocale = lang === i18n.defaultLocale;
  const path = isDefaultLocale ? href : `/${lang}${href}`;

  return <Link href={path} {...props} />;
};
