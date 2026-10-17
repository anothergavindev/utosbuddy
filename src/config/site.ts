import { env } from "@/config/env";

export const siteConfig = {
  name: "UtosBuddy",
  tagline: "May utos? May buddy!",
  description:
    "Find trusted local Buddies for errands, repairs, moving, cleaning and everyday tasks across the Philippines.",
  url: env.NEXT_PUBLIC_APP_URL,
  locale: "en_PH",
} as const;

export type SiteConfig = typeof siteConfig;
