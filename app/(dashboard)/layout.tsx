import { Dashboard } from "@/components/layout/dashboard";
import { siteConfig } from "@/config/site";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Dashboard name={siteConfig.name}>{children}</Dashboard>;
}
