# Architecture

This document outlines the architectural standards, design patterns, directory structure, and technical stack for our Next.js application. It serves as the single source of truth for engineering teams to ensure consistency, scalability, security, and performance.

---

## 1. Tech Stack & Core Dependencies

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | React framework for server-side rendering, static site generation, and routing. |
| **Language** | TypeScript (Strict Mode) | Static type safety and enhanced developer ergonomics. |
| **Styling** | Tailwind CSS + Shadcn UI | Utility-first CSS framework coupled with accessible, unstyled component primitives. |
| **State Management** | *TBD* | Currently relying on React built-in state (`useState`, `useContext`, `useReducer`). |
| **Data Validation** | Zod | Runtime schema validation for API requests, environment variables, and forms. |
| **Database / ORM** | PostgreSQL + Prisma | Owned by the separate `utosbuddy-api` service. |
| **Authentication** | `utosbuddy-api` session cookie | Email and password accounts. HTTP-only, Secure, SameSite=Strict signed cookie. Roles: customer, buddy, admin. |
| **Testing** | Playwright | End-to-end (E2E) browser testing and integration flows. |
| **CI/CD & Hosting** | GitHub Actions & Vercel | Automated testing, linting, continuous integration, and serverless hosting. |

---

## 2. Project Directory Structure

We adhere to the Next.js App Router paradigm, enforcing a clean layout where components, utility functions, and tests are logically structured.

Accounts, sessions, and PostgreSQL live in the sibling API repository `utosbuddy-api`. The `app/api` folder in this web app is not that service.

```text
├── .github/workflows/          # GitHub Actions pipelines (lint, test, build, deploy)
├── app/                        # Next.js App Router root
│   ├── (auth)/                 # Route group for authentication flows (login, signup)
│   ├── (dashboard)/            # Route group for the signed-in app shell
│   │   ├── home/page.tsx       # Home at /home (not / — that URL is the public landing)
│   │   ├── profile/page.tsx    # Profile at /profile
│   │   ├── settings/           # Settings page and sub-routes
│   │   └── layout.tsx          # Sidebar and header
│   ├── api/                    # API Route Handlers
│   │   └── v1/                 # Versioned API endpoints
│   ├── favicon.ico             # Global favicon
│   ├── globals.css             # Tailwind base directives and global theme variables
│   ├── layout.tsx              # Root layout wrapping providers, fonts, and metadata
│   └── page.tsx                # Public landing page
├── components/                 # Shared UI components across features
│   ├── ui/                     # Shadcn UI primitives (Button, Dialog, Input, etc.)
│   ├── providers/              # Context providers (Theme, Auth)
│   └── layout/                 # Structural components (Navbar, Footer, Sidebar)
├── config/                     # Static app values, not components
│   ├── env.ts                  # Typed public environment variables
│   ├── nav.ts                  # Sidebar and account links
│   └── site.ts                 # Site name, tagline, and URL
├── hooks/                      # Custom React hooks (use-debounce, use-media-query)
├── lib/                        # Utility functions and shared helpers
│   ├── utils.ts                # Helper functions (e.g., cn() for tailwind classes)
│   └── validators/             # Shared Zod schemas
├── e2e/                        # Playwright end-to-end tests and fixtures
├── public/                     # Static assets (images, fonts, SVGs)
├── types/                      # Global TypeScript type definitions and interfaces
├── .env.example                # Template for required environment variables
├── .env.production             # Production environment configuration reference
├── next.config.mjs             # Next.js compiler and runtime configuration
├── package.json                # Project dependencies and build scripts
├── playwright.config.ts        # Playwright test configuration
├── tailwind.config.ts          # Tailwind styling customization
└── tsconfig.json               # TypeScript strict configuration
```

**File naming:** React component files use PascalCase, matching their main export (`components/ui/Button.tsx`, `app/(auth)/signup/SignupForm.tsx`). Next.js route files (`page.tsx`, `layout.tsx`, `error.tsx`, `loading.tsx`, `not-found.tsx`), hooks, `lib/`, and `config/` use lowercase or kebab-case.

---

## 3. Routing & Navigation Architecture

* **App Router (`app/`)**: Leverage React Server Components (RSC) by default. Client components (`use client`) are strictly isolated to leaves of the component tree that require browser APIs or interactive state.
* **Route Groups (`(folder)`)**: Use parentheses to organize routes logically without altering the URL path structure (e.g., separating marketing pages from authenticated app dashboards).
* **Parallel & Intercepting Routes**: Utilize parallel routes (`@folder`) for complex dashboard layouts and intercepting routes (`(.)folder`) for modal workflows (e.g., photo details viewable inline or via direct URL).
* **Middleware (`middleware.ts`)**: Positioned at the root to handle global edge concerns:
  * Security header injection (CSP, HSTS, X-Frame-Options).
  * Session token validation and geo-routing.
  * Rate-limiting triggers for sensitive API endpoints.

---

## 4. Data Fetching & State Management

### Data Fetching Strategy
* **Server Components**: Fetch data directly inside RSCs using native `fetch` with granular caching and revalidation strategies (`revalidateTag`, `revalidatePath`, or dynamic fetch).
* **Client Components**: Handle async client interaction via standard React hooks and Server Actions.

### State Management Strategy
* **Built-in React State**: Currently utilizing standard React state management (`useState`, `useReducer`, and React Context) for local UI concerns. Additional external state management tools will be evaluated as complex global state needs arise.

---

## 5. Security Architecture

* **Authentication & Authorization**:
  * Accounts live in `utosbuddy-api` (Express), not in Next.js route handlers or Auth.js. The web app origin is allowed through CORS with credentials.
  * Passwords are hashed with Argon2id. The hash is never logged or returned.
  * The session cookie is a signed user id: HTTP-only, Secure, SameSite=Strict. It does not contain the password.
  * Roles are `customer` (signup default), `buddy`, and `admin`.
* **Data Validation & Sanitization**:
  * Every incoming request (Server Action payloads, Route Handler bodies, URL query parameters) must be validated using Zod schemas at runtime.
* **Environment Variables**:
  * Validated at build time using `@t3-oss/env-nextjs` or Zod schemas to guarantee required production keys are never undefined.
  * Secrets are injected via Vercel / GitHub Secrets managers.

---

## 6. Error Handling & Observability

* **Error Boundaries**: Implement `error.tsx` at strategic layout levels to gracefully catch rendering errors and offer fallback UIs with a "Try Again" recovery option.
* **Global Not Found**: Custom `not-found.tsx` handling for unmatched routes.
* **Logging & Monitoring**:
  * Integrated with Sentry (or equivalent APM) for real-time error tracking and performance monitoring.
  * Structured JSON logging in production for server-side execution logs.

---

## 7. Testing Strategy

* **End-to-End (E2E) & Integration Testing (Playwright)**:
  * Primary focus on Playwright for end-to-end user workflows (authentication, form submissions, navigation).
  * Cross-browser testing and web view checks configured in `playwright.config.ts`.
  * Runs automatically in CI workflows against preview deployments prior to merges.

---

## 8. Performance, Optimization & CI/CD

* **Core Web Vitals Targets**:
  * **LCP (Largest Contentful Paint)**: $< 2.5\text{s}$ achieved through streaming SSR, skeletal loaders, and priority image loading (`priority` prop on `next/image`).
  * **FID / INP (Interaction to Next Paint)**: $< 200\text{ms}$ by keeping client-side JavaScript bundles minimal and offloading heavy computations.
  * **CLS (Cumulative Layout Shift)**: $0$ by enforcing explicit dimensions on images, dynamic wrappers, and font display swaps (`font-display: swap`).
* **GitHub Actions CI/CD Pipeline**:
  1. **Linting & Formatting**: ESLint and Prettier checks.
  2. **Type Checking**: `tsc --noEmit` to verify TypeScript compliance.
  3. **E2E Testing**: Run Playwright suite.
  4. **Build Verification**: Run `next build` to verify production compilation.
  5. **Deployment**: Automatic deployment to Vercel Staging on PR creation, and Production release on merge to `main`.