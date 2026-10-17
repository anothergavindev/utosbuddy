import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & { size?: "sm" | "md" | "lg" };

const sizes = { sm: "max-w-2xl", md: "max-w-4xl", lg: "max-w-6xl" } as const;

/** Centered page-width wrapper with consistent mobile gutters. */
export function Container({ className, size = "lg", ...props }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-4 sm:px-6", sizes[size], className)} {...props} />;
}
