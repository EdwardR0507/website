import { rawBadgeVariants } from "@/components/atoms";
import enTranslate from "../lib/data/en.json";
import esTranslate from "../lib/data/es.json";

export const getBadgeVariantByType = (type: string) => {
  const variantMap: Record<string, keyof typeof rawBadgeVariants> = {
    Personal: "default",
    "Open Source": "purple",
    College: "yellow",
    Work: "green",
  };
  return variantMap[type] ?? "default";
};

export const getValidLocale = (locale: string | undefined) => {
  if (!locale) return "es";
  return locale.includes("en") ? "en" : "es";
};

export const getI18N = (locale: string | undefined) => {
  if (!locale) return esTranslate;
  const validLocale = getValidLocale(locale);
  return validLocale === "en" ? enTranslate : esTranslate;
};
