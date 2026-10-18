import type { Metadata } from "next";

export const metadata: Metadata = { title: "Home" };

export default function DashboardHomePage() {
  return <h1 className="text-2xl font-semibold tracking-tight">Home</h1>;
}
