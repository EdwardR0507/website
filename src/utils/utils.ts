import { rawBadgeVariants } from "@/components/atoms";

export const getBadgeVariantByType = (type: string) => {
  const variantMap: Record<string, keyof typeof rawBadgeVariants> = {
    Personal: "default",
    "Open Source": "purple",
    College: "yellow",
    Work: "green",
  };
  return variantMap[type] ?? "default";
};
