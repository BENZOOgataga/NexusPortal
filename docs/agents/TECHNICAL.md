# TECHNICAL.md

## Goals

* Run locally and in CI using Docker only
* Keep a clean separation between app, data, and infrastructure
* Enforce server-side authorization
* Stay modular so new internal modules can be added without rewriting the core

## Runtime and stack

### Core

* Node.js 20 LTS
* TypeScript
* Next.js (App Router)
* Tailwind CSS
* shadcn/ui (structural primitives only — all components must be fully restyled to match DESIGN_GUIDELINES.md; default shadcn appearance is never acceptable)
* Zod (validation)

### Data

* PostgreSQL
* Prisma (schema, migrations, typed queries)

### Auth and authorization

* Authentication: NextAuth (Auth.js) or equivalent
* Authorization: RBAC with scoped permissions

  * Org scope
  * Squad scope
* Server-side enforcement only

  * UI hides actions, but backend must block them too

### Observability

* Structured logs (JSON)
* Request correlation id
* Optional later: Sentry frontend and backend

## Docker requirements

### Must work with

* `docker compose up` for local development
* `docker compose up --build` for a clean rebuild
* No local installs required beyond Docker and Docker Compose

### Services

* `web`: Next.js application
* `db`: PostgreSQL
* Optional later

  * `redis`: caching, rate-limit, jobs
  * `worker`: background tasks if needed

## Repository structure

Recommended layout:

```
/
  apps/
    web/                      Next.js app
      src/
        app/                  App Router routes
        components/           Shared UI components
        lib/                  Helpers (auth, db, policies, logging)
        server/               Server-only modules (actions, services)
        styles/               Tailwind and global styles
      public/
      next.config.*
      package.json
  packages/
    db/                       Prisma schema, migrations, db client
      prisma/
        schema.prisma
        migrations/
      src/
        client.ts
      package.json
    shared/                   Shared types, constants, utilities
      src/
      package.json
  docs/
    agents/                   Agent guidance files
  docker/
    postgres/                 Init scripts if needed
  docker-compose.yml
  .env.example
  README.md
```

If the repo is smaller, collapsing to `/src` is acceptable, but keep the separation between:

* UI components
* server-only services
* auth and policy layer
* database access

## Configuration

### Environment variables

Provide a `.env.example` with all required variables, no secrets.

Typical keys:

* `DATABASE_URL=postgresql://user:pass@db:5432/nexus`
* `AUTH_SECRET=...`
* `AUTH_URL=http://localhost:3000`

Never commit `.env`.

## Data model expectations

Minimum entities to support authority and traceability:

* User
* Member profile
* Org
* Squad
* Grade
* Permission
* Membership links

  * Member to org with grade
  * Member to squad with role and delegated permissions if needed
* Audit log

  * actor id
  * action type
  * target type and id
  * metadata
  * timestamp

Keep permissions explicit and queryable.
Avoid boolean flags scattered across tables.

## Authorization pattern

### Policy first

Implement a single policy layer used everywhere.

Example shape:

* `can(user, "resource.action", context) -> boolean`
* `assertCan(...)` throws a typed error

Rules:

* Every server action must call `assertCan`
* Pages that fetch protected data must filter by policy, not by UI logic
* Audit log records sensitive actions after successful authorization

## API and server actions

Preferred approach in Next.js:

* Server Actions for form-driven operations
* Route Handlers for API endpoints that need external access

Rules:

* Validate all inputs with Zod
* Use typed errors, map to consistent UI status codes
* Never trust client-provided org, squad, grade ids without checking membership

## Docker compose baseline

Expected at repo root: `docker-compose.yml` with at least:

* `db` (Postgres)

  * volume for persistence
  * healthcheck
* `web`

  * depends_on db with health condition
  * ports 3000:3000
  * mounts for live reload in dev
  * uses `DATABASE_URL` pointing to `db`

## Development workflow

* `docker compose up` starts everything
* Migrations run via a container command, not host tooling

  * Example: `docker compose exec web pnpm db:migrate`
* Seed is optional but recommended for initial admin account and sample org structure

## CI expectations

* Build image
* Run typecheck and lint
* Run unit tests if present
* Run a minimal integration check with Postgres
* Fail on Prisma schema drift

## Non goals

* No microservices split early
* No complex event-driven architecture unless a real need appears
* No client-side only security
