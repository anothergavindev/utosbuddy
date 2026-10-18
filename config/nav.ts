export type NavLink = {
  href: string;
  label: string;
};

export const sidebarLinks = [
  { href: "/home", label: "Home" },
] as const satisfies readonly NavLink[];

export const accountLinks = [
  { href: "/profile", label: "My profile" },
  { href: "/login", label: "Logout" },
] satisfies NavLink[];
