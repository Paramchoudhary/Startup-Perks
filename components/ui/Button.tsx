// components/ui/Button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-black uppercase tracking-wide transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 border-4 border-foreground",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground brutal-shadow brutal-hover",
        destructive:
          "bg-destructive text-destructive-foreground brutal-shadow brutal-hover",
        outline:
          "bg-background text-foreground brutal-shadow brutal-hover hover:bg-muted",
        secondary:
          "bg-secondary text-secondary-foreground brutal-shadow brutal-hover",
        ghost:
          "border-transparent hover:bg-muted hover:border-foreground brutal-shadow-sm",
        link: "border-transparent underline-offset-4 hover:underline text-primary font-bold",
        accent:
          "bg-accent text-accent-foreground brutal-shadow brutal-hover",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
