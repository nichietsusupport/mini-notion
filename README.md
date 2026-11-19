# mini-notion

A Notion-style workspace for **math teachers and Japanese learners**.
Nested pages, block editor, full-text search and realtime collaboration, plus two features Notion does not have:

1. **Step-by-step solution checker**: learners write a math solution line by line in LaTeX; the AI points to the first line that goes wrong and explains why, instead of only grading the final answer.
2. **Vietnamese-Japanese bilingual notes**: paste Japanese text and the page adds furigana, breaks out grammar patterns, and generates spaced-repetition flashcards in place.

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
| `packages/ai` | Solution checker, furigana and grammar analysis, AI chat, search |
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
