# Graph Report - utosbuddy  (2026-10-17)

## Corpus Check
- Corpus is ~4,570 words - fits in a single context window. You may not need a graph.

## Summary
- 193 nodes · 275 edges · 20 communities (15 shown, 5 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 52,570 input · 0 output

## Community Hubs (Navigation)
- Package Manifest & Media Hook
- Login Page & Form UI
- App Shell & Error Pages
- TypeScript Config
- Architecture & Project Rules
- Dev Dependencies
- Root Layout & Providers
- PH Locale Formatting
- Grilling Skills Family
- Runtime Dependencies
- npm Scripts
- Prettier Config
- Shared Domain Types
- Loading Spinner
- Badge Component
- Server Components & Perf
- Caveman Skill
- Auth & Middleware
- Validation (Zod, Env)
- PostCSS Config

## God Nodes (most connected - your core abstractions)
1. `cn()` - 28 edges
2. `compilerOptions` - 17 edges
3. `LoginPage()` - 10 edges
4. `Container()` - 10 edges
5. `scripts` - 8 edges
6. `Button()` - 7 edges
7. `Input()` - 6 edges
8. `PasswordInput()` - 5 edges
9. `next` - 5 edges
10. `buttonVariants` - 4 edges

## Surprising Connections (you probably didn't know these)
- `grill-me skill (cursor)` --semantically_similar_to--> `grill-me skill (agents)`  [INFERRED] [semantically similar]
  .cursor/skills/grill-me/SKILL.md → .agents/skills/grill-me/SKILL.md
- `grill-me skill (cursor)` --semantically_similar_to--> `grilling skill`  [INFERRED] [semantically similar]
  .cursor/skills/grill-me/SKILL.md → .agents/skills/grill-with-docs/SKILL.md
- `AuthLayout()` --calls--> `Container()`  [EXTRACTED]
  app/(auth)/layout.tsx → components/layout/container.tsx
- `LoginPage()` --calls--> `Button()`  [EXTRACTED]
  app/(auth)/login/page.tsx → components/ui/button.tsx
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  app/layout.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Grilling interview skill family** — _agents_skills_grill_me_skill_grill_me, _agents_skills_grill_with_docs_skill_grill_with_docs, _cursor_skills_grill_me_skill_grill_me, _agents_skills_grill_with_docs_skill_grilling_skill [INFERRED 0.85]
- **Security architecture layers** — architecture_middleware, architecture_auth, architecture_zod_validation, architecture_env_validation [EXTRACTED 1.00]

## Communities (20 total, 5 thin omitted)

### Community 0 - "Package Manifest & Media Hook"
Cohesion: 0.09
Nodes (21): engines, node, name, private, version, clsx, eslint, eslint-config-next (+13 more)

### Community 1 - "Login Page & Form UI"
Cohesion: 0.26
Nodes (14): LoginPage(), metadata, Card(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle() (+6 more)

### Community 2 - "App Shell & Error Pages"
Cohesion: 0.17
Nodes (12): AuthLayout(), ErrorBoundary(), NotFound(), HomePage(), Container(), ContainerProps, sizes, Button() (+4 more)

### Community 3 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 4 - "Architecture & Project Rules"
Cohesion: 0.17
Nodes (11): graphify skill trigger, Architecture document, GitHub Actions CI/CD pipeline to Vercel, Root-layout directory structure (app/, components/, lib/, hooks/), Error boundaries and observability (error.tsx, not-found.tsx, Sentry), Playwright E2E testing, Route Groups (auth), (dashboard), Tech Stack (Next.js, TypeScript strict, Tailwind + Shadcn) (+3 more)

### Community 5 - "Dev Dependencies"
Cohesion: 0.17
Nodes (12): devDependencies, eslint, eslint-config-next, eslint-config-prettier, prettier, prettier-plugin-tailwindcss, tailwindcss, @tailwindcss/postcss (+4 more)

### Community 6 - "Root Layout & Providers"
Cohesion: 0.22
Nodes (7): fontSans, metadata, RootLayout(), viewport, Providers(), nextConfig, next

### Community 7 - "PH Locale Formatting"
Cohesion: 0.27
Nodes (5): APP_LOCALE, APP_TIME_ZONE, CURRENCY, pesoFormatter, pesoWholeFormatter

### Community 8 - "Grilling Skills Family"
Cohesion: 0.29
Nodes (7): Grill Me OpenAI agent interface, grill-me skill (agents), Grill with Docs OpenAI agent interface, domain-modeling skill (ADRs and glossary), grill-with-docs skill, grilling skill, grill-me skill (cursor)

### Community 9 - "Runtime Dependencies"
Cohesion: 0.25
Nodes (8): dependencies, class-variance-authority, clsx, lucide-react, next, react, react-dom, tailwind-merge

### Community 10 - "npm Scripts"
Cohesion: 0.25
Nodes (8): scripts, build, dev, format, format:check, lint, start, typecheck

### Community 11 - "Prettier Config"
Cohesion: 0.25
Nodes (7): plugins, printWidth, semi, singleQuote, tailwindFunctions, tailwindStylesheet, trailingComma

### Community 12 - "Shared Domain Types"
Cohesion: 0.33
Nodes (5): Centavos, ID, ISODateString, Paginated, UserRole

### Community 13 - "Loading Spinner"
Cohesion: 0.60
Nodes (3): Loading(), sizes, Spinner()

### Community 14 - "Badge Component"
Cohesion: 0.50
Nodes (4): Badge(), BadgeProps, badgeVariants, class-variance-authority

## Knowledge Gaps
- **23 isolated node(s):** `react-dom`, `@tailwindcss/postcss`, `@types/node`, `@types/react`, `@types/react-dom` (+18 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 105 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Root Layout & Providers` to `Package Manifest & Media Hook`, `Login Page & Form UI`, `App Shell & Error Pages`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **What connects `react-dom`, `@tailwindcss/postcss`, `@types/node` to the rest of the system?**
  _23 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package Manifest & Media Hook` be split into smaller, more focused modules?**
  _Cohesion score 0.08666666666666667 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `Login Page & Form UI` to `App Shell & Error Pages`, `Loading Spinner`, `Root Layout & Providers`, `Badge Component`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Dev Dependencies` to `Package Manifest & Media Hook`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._