# CLAUDE.md — Agent Instructions

## Project Overview

Nexus Portal is an internal command interface for a Star Citizen organization.
It must feel like a classified Nexus Horizon operational terminal — not a gaming site, not a SaaS dashboard.

Read `docs/agents/CONTEXT.md` for the full product vision before starting any task.

## Key Reference Documents

| Document | Purpose |
|----------|---------|
| `docs/agents/CONTEXT.md` | Product vision, tone, and structural philosophy |
| `docs/agents/TECHNICAL.md` | Stack, architecture, data model, authorization patterns |
| `docs/agents/FEATURES.md` | Full feature specifications |
| `docs/agents/DESIGN_GUIDELINES.md` | Visual identity, color palette, typography, components |

Always consult these documents before making design or architectural decisions.

## Additional Required Rules

- For every new sentence or word added in code/content, add a corresponding translation key.
- Before adding a new translation key, verify the key or equivalent existing text key does not already exist.
- Before making changes, inspect markdown context files, including at minimum:
  - design guidelines markdown files
  - `SKILL.md`
  - `technical.md` / `TECHNICAL.md`

## Coding Principles

### Architecture

- Follow the monorepo layout defined in TECHNICAL.md exactly
- Every server action must call `assertCan(...)` before executing — no exceptions
- Never trust client-provided org, squad, or grade IDs — always verify membership server-side
- All inputs validated with Zod at the server boundary
- Audit log entries must be written after every sensitive action

### Design

- Every UI decision must comply with DESIGN_GUIDELINES.md
- Dark theme only — no white or light backgrounds, ever
- Use only the defined color palette: gold (`#c9a84c`), cyan (`#35b6ec`), dark backgrounds
- Typography stack: Orbitron (headings only), Exo 2 (body), Share Tech Mono (labels/code/UI)
- shadcn/ui is used as a structural primitive only — fully restyle every component to match the design system; default shadcn appearance is never acceptable
- Border radius: maximum `8px` for panels, `4px` for buttons/inputs, `0px` for terminal elements

### Tone

- All user-facing copy must be formal, in-universe, and technically precise
- Dates: Nexus Horizon format (`2951-03-14` for data, `30 NOV 2951` for display)
- Error messages carry codes: `ERR_4421`, `SYNC_FAILED`, `AUTH_DENIED`
- Loading states: "SYNCHRONISATION EN COURS", not "Chargement..."
- No emojis anywhere in the interface — use custom SVG pictograms where symbolic reactions are needed
- No casual language, no modern internet tone, no outside-universe references

## What to Never Do

- Never add UI-only authorization checks without server-side enforcement
- Never commit `.env` files or secrets
- Never use colors, fonts, or radii not defined in DESIGN_GUIDELINES.md
- Never bypass the permission system — permissions are the backbone of the platform
- Never design UI that resembles a gaming guild site, social platform, or generic SaaS dashboard
- Never add features or abstractions beyond what is specified in FEATURES.md without explicit instruction
