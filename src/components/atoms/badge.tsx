import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const rawBadgeVariants = {
  default:
    "bg-blue-100 shadow-lg shadow-blue-400/20 dark:bg-blue-200 text-blue-500 dark:text-blue-800",
  green:
    "bg-green-100 shadow-lg shadow-green-400/20 dark:bg-green-200 text-green-500 dark:text-green-800",
  yellow:
    "bg-yellow-100 shadow-lg shadow-yellow-400/20 dark:bg-yellow-200 text-yellow-500 dark:text-yellow-800",
  purple:
    "bg-purple-100 shadow-lg shadow-purple-400/20 dark:bg-purple-200 text-purple-500 dark:text-purple-800",
};

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-xxs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: rawBadgeVariants,
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  text: string;
}

export const Badge = ({ text, className, variant, ...props }: BadgeProps) => {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {text}
    </span>
  );
};
