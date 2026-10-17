import { cn } from "@/lib/utils";

const sizes = { sm: "size-4 border-2", md: "size-6 border-2", lg: "size-10 border-[3px]" } as const;

export function Spinner({
  size = "md",
  className,
  label = "Loading",
}: {
  size?: keyof typeof sizes;
  className?: string;
  label?: string;
}) {
  return (
    <span role="status" className={cn("inline-flex", className)}>
      <span
        aria-hidden
        className={cn("animate-spin rounded-full border-primary border-t-transparent", sizes[size])}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}
