"use client";

/**
 * App-wide client providers (data fetching, toasts, auth session, analytics…).
 * Kept as one component so the root layout stays a Server Component.
 * Empty for now — add providers here as they are chosen.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
