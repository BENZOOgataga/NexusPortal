# AGENTS.md

Operational rules for coding agents working on SC Companion (Next.js project).

This file defines engineering, architecture, and agent-behavior rules only.

ALL design decisions (visual style, UI behavior, UX tone, typography, spacing,
color usage, motion, iconography, layout philosophy, etc.) are documented ONLY in:

`/docs/DESIGN_GUIDELINES.md`

Agents MUST actively read that file before making ANY UI decision.
Never assume design intent. Never infer style from other projects.
Never replicate past patterns without verifying against the guidelines.

If unsure → search DESIGN_GUIDELINES.md first.
If not found → stop and request clarification instead of guessing.

---

## 0) Source of truth

Priority order:

1. `/docs/ARCHITECTURE.md` → system architecture
2. `/docs/DESIGN_GUIDELINES.md` → ALL design and UX rules
3. Repository code conventions
4. This AGENTS.md

Conflict resolution:

* Architecture overrides AGENTS.md
* DESIGN_GUIDELINES.md overrides ANY UI or styling decision
* AGENTS.md never overrides design documentation

Design rules must never be duplicated here.

---

## 1) Golden Engineering Rules

### GR1 — No hardcoded design values

* No raw colors, spacing, typography, radii, animation timings, shadows.
* Always consume design tokens from the designated token source.
* Missing token → add it to the token system, never inline.

Design meaning comes from DESIGN_GUIDELINES.md, not from this file.

---

### GR2 — Next.js App Router integrity

* `/app` router only.
* Pages Router forbidden unless legacy constraint explicitly stated.
* Server Components by default.
* `"use client"` only when strictly required.

---

### GR3 — Server-first data flow

Preferred hierarchy:

1. Server component fetching
2. Server actions
3. Route handlers (`/app/api/*`)

Avoid client fetch unless unavoidable.

---

### GR4 — Component reuse discipline

* Never duplicate primitives.
* Extract shared components early.
* Pages assemble modules only.

---

### GR5 — Layout consistency

* Root layout defines global shell.
* No per-page layout reinvention.
* Shared navigation and structure live centrally.

---

### GR6 — Performance awareness

* Avoid unnecessary hydration.
* Avoid global client state unless justified.
* Prefer server rendering, caching, streaming.

---

## 2) Target Stack

Unless repository explicitly overrides:

* Next.js latest stable
* React Server Components
* TypeScript strict mode
* Tailwind CSS mapped to design tokens
* CSS variables design tokens
* Radix/shadcn primitives if UI kit required

Design specifics remain exclusively in DESIGN_GUIDELINES.md.

---

## 3) Next.js Conventions

### Routing

* `/app` directory only
* Nested layouts preferred
* Route-local components allowed
* Avoid global dumping of components

Example:

/app/dashboard/page.tsx
/app/dashboard/layout.tsx
/app/dashboard/components/*

---

### Server vs Client Components

Default: Server Component.

Client-only cases:

* Browser APIs
* Interactive forms
* DOM-bound animation

Never convert entire routes to client unnecessarily.

---

### Styling integration

Design tokens must have a single authoritative source.
Typically:

`/src/styles/tokens.css`

Imported once in root layout.

No local token redefinition.

Interpretation of tokens belongs ONLY to DESIGN_GUIDELINES.md.

---

## 4) Recommended Structure

/docs/
DESIGN_GUIDELINES.md
ARCHITECTURE.md

/app/
layout.tsx
page.tsx
api/

/src/components/ui/
/src/components/modules/
/src/styles/
tokens.css
effects.css

/public/placeholders/

---

## 5) Agent Workflow

### Step 1 — Mandatory reading (non-optional)

Before ANY UI work:

* ARCHITECTURE.md
* DESIGN_GUIDELINES.md (complete scan, not partial)
* Existing components/layouts

Skipping this step is considered a failure condition.

---

### Step 2 — Planning

* Define server/client boundaries
* Identify reusable components
* Confirm tokens exist in token source
* Confirm design expectations in DESIGN_GUIDELINES.md

If unclear → do NOT assume.

---

### Step 3 — Implementation order

1. Primitives
2. Modules
3. Routes/pages

---

### Step 4 — Self-check

Engineering:

* No hardcoded tokens
* App Router respected
* Server Components default
* Minimal hydration
* Layout reuse respected

Design compliance:

* Verified against DESIGN_GUIDELINES.md
* No guessed styling
* No inferred UX decisions
* No undocumented visual patterns

---

### Step 5 — Changelog

Always provide:

* What changed
* Where
* Why
* Performance implications if relevant
* Confirmation that design guidelines were checked

---

## 6) Anti-patterns (Immediate rejection)

* Ignoring DESIGN_GUIDELINES.md
* Guessing visual style
* Copying external UI without validation
* Token duplication or inline styling
* Pages Router usage without justification
* Full client rendering by default
* Layout recreation per page

---

## 7) Missing Assets Policy

* Use placeholders (`/public/placeholders/*`)
* Never block development on assets
* Final validation MUST reference DESIGN_GUIDELINES.md
