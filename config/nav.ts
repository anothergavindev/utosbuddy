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

export const landingLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why", label: "Why Utos Buddy" },
] as const satisfies readonly NavLink[];

/** Placeholder until a helper signup route exists. */
export const becomeHelperLink = {
  href: "#become-a-helper",
  label: "Become a helper",
} as const satisfies NavLink;
