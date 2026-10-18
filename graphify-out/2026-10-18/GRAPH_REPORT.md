# Graph Report - utosbuddy  (2026-10-18)

## Corpus Check
- 128 files · ~34,188 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 5, .example 1, .css 1)

## Summary
- 488 nodes · 563 edges · 91 communities (20 shown, 71 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `90133c1f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Package Manifest & Media Hook
- cn
- app/layout.tsx
- TypeScript Config
- Architecture & Project Rules
- Dev Dependencies
- 5. Re-render Optimization
- PH Locale Formatting
- Grilling Skills Family
- 7. JavaScript Performance
- npm Scripts
- Prettier Config
- Shared Domain Types
- next
- Server Components & Perf
- Caveman Skill
- Auth & Middleware
- Validation (Zod, Env)
- PostCSS Config
- Quick Reference
- 6. Rendering Performance
- 3. Server-Side Performance
- Sections
- React Best Practices
- async-cheap-condition-before-await.md
- Prefer Statically Analyzable Paths
- advanced-effect-event-deps.md
- advanced-event-handler-refs.md
- advanced-init-once.md
- advanced-use-latest.md
- async-api-routes.md
- async-dependencies.md
- async-parallel.md
- async-suspense-boundaries.md
- bundle-barrel-imports.md
- bundle-conditional.md
- bundle-defer-third-party.md
- bundle-dynamic-imports.md
- bundle-preload.md
- client-event-listeners.md
- client-localstorage-schema.md
- client-passive-event-listeners.md
- client-swr-dedup.md
- js-batch-dom-css.md
- js-cache-function-results.md
- js-cache-property-access.md
- js-cache-storage.md
- js-combine-iterations.md
- js-early-exit.md
- js-flatmap-filter.md
- js-hoist-regexp.md
- js-index-maps.md
- js-length-check-first.md
- js-min-max-loop.md
- js-request-idle-callback.md
- js-set-map-lookups.md
- js-tosorted-immutable.md
- rendering-activity.md
- rendering-animate-svg-wrapper.md
- rendering-conditional-render.md
- rendering-content-visibility.md
- rendering-hoist-jsx.md
- rendering-hydration-no-flicker.md
- rendering-hydration-suppress-warning.md
- rendering-resource-hints.md
- rendering-script-defer-async.md
- rendering-svg-precision.md
- rendering-usetransition-loading.md
- rerender-defer-reads.md
- rerender-dependencies.md
- rerender-derived-state.md
- rerender-derived-state-no-effect.md
- rerender-functional-setstate.md
- rerender-lazy-state-init.md
- rerender-memo.md
- rerender-memo-with-default-value.md
- rerender-move-effect-to-event.md
- rerender-simple-expression-in-memo.md
- rerender-split-combined-hooks.md
- rerender-transitions.md
- rerender-use-deferred-value.md
- rerender-use-ref-transient-values.md
- server-after-nonblocking.md
- server-auth-actions.md
- server-cache-lru.md
- server-dedup-props.md
- server-parallel-fetching.md
- server-parallel-nested-fetching.md
- server-serialization.md
- _template.md

## God Nodes (most connected - your core abstractions)
1. `cn()` - 34 edges
2. `compilerOptions` - 17 edges
3. `5. Re-render Optimization` - 16 edges
4. `7. JavaScript Performance` - 15 edges
5. `React Best Practices` - 12 edges
6. `6. Rendering Performance` - 12 edges
7. `LoginPage()` - 11 edges
8. `Dashboard()` - 11 edges
9. `Button()` - 11 edges
10. `3. Server-Side Performance` - 11 edges

## Surprising Connections (you probably didn't know these)
- `3.3 Avoid Shared Module State for Request Data` --references--> `Dashboard()`  [INFERRED]
  .claude/skills/vercel-react-best-practices/AGENTS.md → components/layout/dashboard.tsx
- `Avoid Shared Module State for Request Data` --references--> `Dashboard()`  [INFERRED]
  .claude/skills/vercel-react-best-practices/rules/server-no-shared-module-state.md → components/layout/dashboard.tsx
- `5.4 Don't Define Components Inside Components` --references--> `Avatar()`  [INFERRED]
  .claude/skills/vercel-react-best-practices/AGENTS.md → components/ui/avatar.tsx
- `Don't Define Components Inside Components` --references--> `Avatar()`  [INFERRED]
  .claude/skills/vercel-react-best-practices/rules/rerender-no-inline-components.md → components/ui/avatar.tsx
- `grill-me skill (cursor)` --semantically_similar_to--> `grilling skill`  [INFERRED] [semantically similar]
  .cursor/skills/grill-me/SKILL.md → .agents/skills/grill-with-docs/SKILL.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Security architecture layers** — architecture_middleware, architecture_auth, architecture_zod_validation, architecture_env_validation [EXTRACTED 1.00]
- **Grilling interview skill family** — _agents_skills_grill_me_skill_grill_me, _agents_skills_grill_with_docs_skill_grill_with_docs, _cursor_skills_grill_me_skill_grill_me, _agents_skills_grill_with_docs_skill_grilling_skill [INFERRED 0.85]

## Communities (91 total, 71 thin omitted)

### Community 0 - "Package Manifest & Media Hook"
Cohesion: 0.06
Nodes (35): dependencies, class-variance-authority, clsx, lucide-react, next, react, react-dom, tailwind-merge (+27 more)

### Community 1 - "cn"
Cohesion: 0.13
Nodes (28): LoginPage(), metadata, metadata, SignupPage(), SignupForm(), Loading(), NotFound(), Badge() (+20 more)

### Community 2 - "app/layout.tsx"
Cohesion: 0.12
Nodes (14): AuthLayout(), DashboardLayout(), ErrorBoundary(), fontSans, metadata, RootLayout(), viewport, HomePage() (+6 more)

### Community 3 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 4 - "Architecture & Project Rules"
Cohesion: 0.17
Nodes (11): graphify skill trigger, Architecture document, GitHub Actions CI/CD pipeline to Vercel, Root-layout directory structure (app/, components/, lib/, hooks/), Error boundaries and observability (error.tsx, not-found.tsx, Sentry), Playwright E2E testing, Route Groups (auth), (dashboard), Tech Stack (Next.js, TypeScript strict, Tailwind + Shadcn) (+3 more)

### Community 5 - "Dev Dependencies"
Cohesion: 0.17
Nodes (12): devDependencies, eslint, eslint-config-next, eslint-config-prettier, prettier, prettier-plugin-tailwindcss, tailwindcss, @tailwindcss/postcss (+4 more)

### Community 6 - "5. Re-render Optimization"
Cohesion: 0.13
Nodes (15): 5.10 Subscribe to Derived State, 5.11 Use Functional setState Updates, 5.12 Use Lazy State Initialization, 5.13 Use Transitions for Non-Urgent Updates, 5.14 Use useDeferredValue for Expensive Derived Renders, 5.15 Use useRef for Transient Values, 5.1 Calculate Derived State During Rendering, 5.2 Defer State Reads to Usage Point (+7 more)

### Community 7 - "PH Locale Formatting"
Cohesion: 0.27
Nodes (5): APP_LOCALE, APP_TIME_ZONE, CURRENCY, pesoFormatter, pesoWholeFormatter

### Community 8 - "Grilling Skills Family"
Cohesion: 0.29
Nodes (7): Grill Me OpenAI agent interface, grill-me skill (agents), Grill with Docs OpenAI agent interface, domain-modeling skill (ADRs and glossary), grill-with-docs skill, grilling skill, grill-me skill (cursor)

### Community 9 - "7. JavaScript Performance"
Cohesion: 0.13
Nodes (15): 7.10 Hoist RegExp Creation, 7.11 Use flatMap to Map and Filter in One Pass, 7.12 Use Loop for Min/Max Instead of Sort, 7.13 Use Set/Map for O(1) Lookups, 7.14 Use toSorted() Instead of sort() for Immutability, 7.1 Avoid Layout Thrashing, 7.2 Build Index Maps for Repeated Lookups, 7.3 Cache Property Access in Loops (+7 more)

### Community 10 - "npm Scripts"
Cohesion: 0.08
Nodes (22): 3.3 Avoid Shared Module State for Request Data, 5.4 Don't Define Components Inside Components, Don't Define Components Inside Components, Hoist Static I/O to Module Level, Avoid Shared Module State for Request Data, Dashboard(), DashboardProps, accountLinks (+14 more)

### Community 11 - "Prettier Config"
Cohesion: 0.25
Nodes (7): plugins, printWidth, semi, singleQuote, tailwindFunctions, tailwindStylesheet, trailingComma

### Community 12 - "Shared Domain Types"
Cohesion: 0.33
Nodes (5): Centavos, ID, ISODateString, Paginated, UserRole

### Community 14 - "next"
Cohesion: 0.22
Nodes (4): metadata, metadata, nextConfig, next

### Community 20 - "Quick Reference"
Cohesion: 0.13
Nodes (14): 1. Eliminating Waterfalls (CRITICAL), 2. Bundle Size Optimization (CRITICAL), 3. Server-Side Performance (HIGH), 4. Client-Side Data Fetching (MEDIUM-HIGH), 5. Re-render Optimization (MEDIUM), 6. Rendering Performance (MEDIUM), 7. JavaScript Performance (LOW-MEDIUM), 8. Advanced Patterns (LOW) (+6 more)

### Community 21 - "6. Rendering Performance"
Cohesion: 0.05
Nodes (40): 1.1 Check Cheap Conditions Before Async Flags, 1.2 Defer Await Until Needed, 1.3 Dependency-Based Parallelization, 1.4 Prevent Waterfall Chains in API Routes, 1.5 Promise.all() for Independent Operations, 1.6 Strategic Suspense Boundaries, 1. Eliminating Waterfalls, 2.1 Avoid Barrel File Imports (+32 more)

### Community 22 - "3. Server-Side Performance"
Cohesion: 0.20
Nodes (9): 3.10 Use after() for Non-Blocking Operations, 3.1 Authenticate Server Actions Like API Routes, 3.2 Avoid Duplicate Serialization in RSC Props, 3.4 Cross-Request LRU Caching, 3.5 Hoist Static I/O to Module Level, 3.6 Minimize Serialization at RSC Boundaries, 3.7 Parallel Data Fetching with Component Composition, 3.8 Parallel Nested Data Fetching (+1 more)

### Community 23 - "Sections"
Cohesion: 0.20
Nodes (9): 1. Eliminating Waterfalls (async), 2. Bundle Size Optimization (bundle), 3. Server-Side Performance (server), 4. Client-Side Data Fetching (client), 5. Re-render Optimization (rerender), 6. Rendering Performance (rendering), 7. JavaScript Performance (js), 8. Advanced Patterns (advanced) (+1 more)

### Community 26 - "React Best Practices"
Cohesion: 0.33
Nodes (5): Creating a New Rule, Getting Started, React Best Practices, Rule File Structure, Structure

### Community 31 - "Prefer Statically Analyzable Paths"
Cohesion: 0.50
Nodes (3): File-System Paths, Import Paths, Prefer Statically Analyzable Paths

## Knowledge Gaps
- **23 isolated node(s):** `react-dom`, `@tailwindcss/postcss`, `@types/node`, `@types/react`, `@types/react-dom` (+18 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 358 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **71 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `React Best Practices` connect `6. Rendering Performance` to `7. JavaScript Performance`, `3. Server-Side Performance`, `5. Re-render Optimization`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **What connects `react-dom`, `@tailwindcss/postcss`, `@types/node` to the rest of the system?**
  _23 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package Manifest & Media Hook` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Why does `5. Re-render Optimization` connect `5. Re-render Optimization` to `npm Scripts`, `6. Rendering Performance`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.13107822410147993 - nodes in this community are weakly interconnected._
- **Why does `Avatar()` connect `npm Scripts` to `cn`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._
- **Should `app/layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._