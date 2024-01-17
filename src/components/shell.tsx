import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const shellVariants = cva("", {
  variants: {
    variant: {
      default: "",
      features: "",
      mainShell: " bg-black bg-opacity-40 relative text-[20px]",
      centered: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ShellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shellVariants> {
  as?: React.ElementType;
}

function Shell({ className, as: Comp = "div", variant, ...props }: ShellProps) {
  return (
    <Comp className={cn(shellVariants({ variant }), className)} {...props} />
  );
}

export { Shell, shellVariants };
