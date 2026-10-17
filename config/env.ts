/**
 * Typed access to environment variables.
 * Public (browser-safe) values must be prefixed NEXT_PUBLIC_ and referenced literally
 * (process.env.NEXT_PUBLIC_X) so Next.js can inline them at build time.
 * Add server-only secrets to a separate `env.server.ts` guarded with `import "server-only"`.
 */
export const env = {
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
} as const;
