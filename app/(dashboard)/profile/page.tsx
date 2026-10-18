import type { Metadata } from "next";

export const metadata: Metadata = { title: "My profile" };

export default function ProfilePage() {
  return <h1 className="text-2xl font-semibold tracking-tight">My profile</h1>;
}
