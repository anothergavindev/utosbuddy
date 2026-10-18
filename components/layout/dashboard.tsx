"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { accountLinks } from "@/config/nav";
import { Sidebar } from "@/components/layout/sidebar";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dropdown, DropdownItem } from "@/components/ui/dropdown-menu";

type DashboardProps = {
  name: string;
  children: React.ReactNode;
};

export function Dashboard({ name, children }: DashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!sidebarOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSidebarOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-dvh bg-background">
      <Sidebar name={name} className="hidden md:flex" />

      {sidebarOpen ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-foreground/40"
            aria-label="Close sidebar"
            onClick={() => setSidebarOpen(false)}
          />
          <Sidebar
            name={name}
            className="relative h-full"
            onNavigate={() => setSidebarOpen(false)}
          />
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center gap-2 border-b bg-card px-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open sidebar"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </Button>
          <Dropdown className="ml-auto" triggerLabel="Account menu" trigger={<Avatar alt="" />}>
            {accountLinks.map((link) => (
              <DropdownItem key={link.href} href={link.href}>
                {link.label}
              </DropdownItem>
            ))}
          </Dropdown>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
