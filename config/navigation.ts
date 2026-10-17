import { routes } from "@/lib/routes";

export type NavItem = { label: string; href: string };

// Fill in as screens are built; components read from here rather than hardcoding links.
export const mainNav: NavItem[] = [{ label: "Home", href: routes.home }];
