# Graph Report - utosbuddy  (2026-10-17)

## Corpus Check
- 52 files · ~5,612 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 5, .example 1, .css 1)

## Summary
- 225 nodes · 366 edges · 20 communities (15 shown, 5 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `90133c1f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

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
1. `cn()` - 34 edges
2. `compilerOptions` - 17 edges
3. `LoginPage()` - 11 edges
4. `Button()` - 11 edges
5. `Container()` - 10 edges
6. `next` - 10 edges
7. `DashboardShell()` - 9 edges
8. `SignupForm()` - 8 edges
9. `Input()` - 8 edges
10. `scripts` - 8 edges

## Surprising Connections (you probably didn't know these)
- `grill-me skill (cursor)` --semantically_similar_to--> `grilling skill`  [INFERRED] [semantically similar]
  .cursor/skills/grill-me/SKILL.md → .agents/skills/grill-with-docs/SKILL.md
- `grill-me skill (cursor)` --semantically_similar_to--> `grill-me skill (agents)`  [INFERRED] [semantically similar]
  .cursor/skills/grill-me/SKILL.md → .agents/skills/grill-me/SKILL.md
- `HomePage()` --calls--> `Container()`  [EXTRACTED]
  app/page.tsx → components/layout/container.tsx
- `Skeleton()` --calls--> `cn()`  [EXTRACTED]
  components/ui/skeleton.tsx → lib/utils.ts
- `Textarea()` --calls--> `cn()`  [EXTRACTED]
  components/ui/textarea.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Security architecture layers** — architecture_middleware, architecture_auth, architecture_zod_validation, architecture_env_validation [EXTRACTED 1.00]
- **Grilling interview skill family** — _agents_skills_grill_me_skill_grill_me, _agents_skills_grill_with_docs_skill_grill_with_docs, _cursor_skills_grill_me_skill_grill_me, _agents_skills_grill_with_docs_skill_grilling_skill [INFERRED 0.85]

## Communities (20 total, 5 thin omitted)

### Community 0 - "Package Manifest & Media Hook"
Cohesion: 0.08
Nodes (25): engines, node, name, private, scripts, build, dev, format (+17 more)

### Community 1 - "Login Page & Form UI"
Cohesion: 0.29
Nodes (15): LoginPage(), metadata, metadata, SignupPage(), SignupForm(), Card(), CardContent(), CardDescription() (+7 more)

### Community 2 - "App Shell & Error Pages"
Cohesion: 0.25
Nodes (9): AuthLayout(), ErrorBoundary(), NotFound(), Container(), ContainerProps, sizes, Button(), ButtonProps (+1 more)

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
Cohesion: 0.20
Nodes (8): fontSans, metadata, RootLayout(), viewport, HomePage(), Providers(), env, SiteConfig

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
Cohesion: 0.13
Nodes (14): DashboardLayout(), DashboardShell(), items, SidebarNav(), Avatar(), AvatarProps, Dropdown(), DropdownContext (+6 more)

### Community 11 - "Prettier Config"
Cohesion: 0.25
Nodes (7): plugins, printWidth, semi, singleQuote, tailwindFunctions, tailwindStylesheet, trailingComma

### Community 12 - "Shared Domain Types"
Cohesion: 0.33
Nodes (5): Centavos, ID, ISODateString, Paginated, UserRole

### Community 13 - "Loading Spinner"
Cohesion: 0.14
Nodes (11): Loading(), Badge(), BadgeProps, badgeVariants, Skeleton(), sizes, Spinner(), Textarea() (+3 more)

### Community 14 - "Badge Component"
Cohesion: 0.22
Nodes (4): metadata, metadata, nextConfig, next

## Knowledge Gaps
- **23 isolated node(s):** `react-dom`, `@tailwindcss/postcss`, `@types/node`, `@types/react`, `@types/react-dom` (+18 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 120 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Badge Component` to `Package Manifest & Media Hook`, `Login Page & Form UI`, `App Shell & Error Pages`, `Root Layout & Providers`, `npm Scripts`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **What connects `react-dom`, `@tailwindcss/postcss`, `@types/node` to the rest of the system?**
  _23 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package Manifest & Media Hook` be split into smaller, more focused modules?**
  _Cohesion score 0.07977207977207977 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `Login Page & Form UI` to `App Shell & Error Pages`, `npm Scripts`, `Loading Spinner`, `Root Layout & Providers`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Dev Dependencies` to `Package Manifest & Media Hook`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Should `npm Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.12681159420289856 - nodes in this community are weakly interconnected._