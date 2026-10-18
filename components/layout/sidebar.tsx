"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/config/nav";
import { cn } from "@/lib/utils";

type SidebarProps = {
  name: string;
  onNavigate?: () => void;
  className?: string;
};

export function Sidebar({ name, onNavigate, className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={cn("flex w-56 shrink-0 flex-col border-r bg-card", className)}>
      <p className="px-6 py-4 text-sm font-semibold">{name}</p>
      <nav aria-label="Main" className="flex flex-col gap-1 p-3">
        {sidebarLinks.map((link) => {
          const current = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={current ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium",
                current ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted",
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
