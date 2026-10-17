# UtosBuddy

> May utos? May buddy!

The web frontend for UtosBuddy, a Philippine on-demand services marketplace.

**Stack:** Next.js (App Router) · React · TypeScript (strict) · Tailwind CSS v4 · ESLint · Prettier

## Getting started

Requires Node.js 20.9+ (see `.nvmrc`).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command                | What it does                        |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start the dev server                |
| `npm run build`        | Production build                    |
| `npm run start`        | Serve the production build          |
| `npm run lint`         | ESLint                              |
| `npm run typecheck`    | TypeScript check, no emit           |
| `npm run format`       | Format everything with Prettier     |

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the folder structure and conventions.
