import { Inter, Manrope } from "next/font/google";
import Link from "next/link";

import { becomeHelperLink, landingLinks } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { BrandMarkIcon, ArrowRightIcon } from "@/components/icons";

const fontManrope = Manrope({
  subsets: ["latin"],
  weight: "800",
  display: "swap",
});

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export function Navbar() {
  return (
    <header
      className={cn(
        "box-border border-b border-[#E2E7DF] bg-white min-[960px]:h-24",
        fontInter.className,
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-360 flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4 min-[960px]:grid min-[960px]:grid-cols-[1fr_auto_1fr] min-[960px]:py-0 xl:px-20">
        <Link href="/" className="flex w-fit items-center gap-2.25 justify-self-start">
          <BrandMarkIcon />
          <span
            className={cn(
              fontManrope.className,
              "text-[26px] leading-9 font-extrabold text-[#203B30]",
            )}
          >
            {siteConfig.name}
          </span>
        </Link>

        <nav
          aria-label="Explore"
          className="order-last flex w-full items-center justify-center gap-8 min-[960px]:order-0 min-[960px]:w-auto min-[960px]:justify-self-center"
        >
          {landingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm leading-4.25 font-normal whitespace-nowrap text-[#203B30] hover:text-[#245B42]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6.5 justify-self-end">
          <Link
            href={becomeHelperLink.href}
            className="text-sm leading-4.25 font-semibold whitespace-nowrap text-[#245B42] hover:underline"
          >
            {becomeHelperLink.label}
          </Link>
          <Link
            href="/login"
            className="inline-flex h-12.5 items-center justify-center gap-3 rounded-[12px] bg-[#245B42] px-5.5 text-sm leading-4.25 font-semibold whitespace-nowrap text-white hover:bg-[#1c4a35]"
          >
            Login
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
