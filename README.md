# mini-notion

Mini Notion clone: workspace, nested pages, block editor, full-text search,
realtime collaboration and an AI chat that answers from your notes.

## Stack
Next.js (TypeScript) · Postgres · Tailwind · pnpm workspaces

## Layout
| Path | Purpose |
|---|---|
| `apps/web` | Next.js frontend |
| `apps/api` | Backend: auth, REST API |
| `packages/shared` | **Single source of truth for the API contract** (types + zod schemas) |
| `packages/db` | Postgres schema and migrations |
| `packages/realtime` | WebSocket / collaboration |
| `packages/ai` | AI chat, embeddings, search |
| `tests/unit`, `tests/e2e` | Unit tests and Playwright e2e |
| `docs` | Architecture notes and guides |

## Workflow
- One branch per module: `feat/backend`, `feat/frontend`, `feat/realtime-ai`, `feat/tests-ci`, `feat/docs`.
- Open a PR into `main`. Do not push directly to `main`.
- Changes to `packages/shared` must be announced first: every other module depends on it.

## Getting started
```bash
pnpm install
pnpm build
pnpm test
```
