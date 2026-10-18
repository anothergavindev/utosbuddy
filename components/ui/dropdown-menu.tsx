"use client";

import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type DropdownContextValue = { close: () => void };

const DropdownContext = createContext<DropdownContextValue | null>(null);

type DropdownProps = {
  triggerLabel: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function Dropdown({ triggerLabel, trigger, children, className }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const close = useCallback(() => setOpen(false), []);
  const menu = useMemo(() => ({ close }), [close]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <DropdownContext.Provider value={menu}>
      <div ref={rootRef} className={cn("relative", className)}>
        <button
          type="button"
          className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={triggerLabel}
          onClick={() => setOpen((value) => !value)}
        >
          {trigger}
        </button>
        {open ? (
          <div
            id={menuId}
            role="menu"
            className="absolute top-full right-0 z-50 mt-2 min-w-44 rounded-lg border bg-card py-1 shadow-sm"
          >
            {children}
          </div>
        ) : null}
      </div>
    </DropdownContext.Provider>
  );
}

type DropdownItemProps = {
  href: string;
  children: React.ReactNode;
};

export function DropdownItem({ href, children }: DropdownItemProps) {
  const menu = useContext(DropdownContext);

  if (!menu) {
    throw new Error("DropdownItem must be rendered inside Dropdown.");
  }

  return (
    <Link href={href} role="menuitem" className="block px-3 py-2 text-sm hover:bg-muted" onClick={menu.close}>
      {children}
    </Link>
  );
}
