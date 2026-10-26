import { User } from "lucide-react";

import { cn } from "@/lib/utils";

type AvatarProps = {
  src?: string;
  alt: string;
  className?: string;
};

export function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <span
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground",
        className,
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="size-full object-cover" />
      ) : (
        <>
          <User aria-hidden className="size-4" />
          {alt ? <span className="sr-only">{alt}</span> : null}
        </>
      )}
    </span>
  );
}
