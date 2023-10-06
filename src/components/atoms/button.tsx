import React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const rawButtonVariants = {
  default:
    "bg-blue-500 text-white hover:bg-blue-600 hover:text-white transition-all",
  destructive:
    "bg-red-500 text-white hover:bg-red-600 hover:text-white transition-all",
  outline:
    "bg-transparent text-white hover:bg-blue-500 hover:text-white transition-all border-2 border-blue-500",
  dark: "bg-black text-white hover:bg-black/90 hover:text-white transition-all",
};

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: rawButtonVariants,
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild, children, className, variant, size, ...props }: ButtonProps,
    ref
  ) => {
    if (asChild) {
      if (!React.isValidElement(children)) {
        throw new Error(
          "Button: Invalid child. Button asChild only accepts a valid React element as child."
        );
      }
      return React.cloneElement(children as React.ReactElement, {
        className: cn(buttonVariants({ variant, size, className })),
        ...props,
        ref,
      });
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
