// components/ui/Badge.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border-2 border-foreground px-3 py-1 text-xs font-black uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground brutal-shadow-sm",
        secondary: "bg-secondary text-secondary-foreground brutal-shadow-sm",
        destructive: "bg-destructive text-destructive-foreground brutal-shadow-sm",
        outline: "bg-background text-foreground brutal-shadow-sm",
        cloud: "bg-blue-500 text-white brutal-shadow-sm",
        ai: "bg-purple-500 text-white brutal-shadow-sm",
        database: "bg-green-500 text-white brutal-shadow-sm",
        analytics: "bg-orange-500 text-white brutal-shadow-sm",
        "dev-tools": "bg-cyan-500 text-white brutal-shadow-sm",
        email: "bg-pink-500 text-white brutal-shadow-sm",
        design: "bg-yellow-500 text-black brutal-shadow-sm",
        other: "bg-gray-500 text-white brutal-shadow-sm",
        featured: "bg-primary text-primary-foreground brutal-shadow-sm animate-pulse",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
