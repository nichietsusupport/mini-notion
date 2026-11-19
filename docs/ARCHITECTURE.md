# Architecture

```
apps/web  ──►  apps/api  ──►  packages/db (Postgres)
   │              │
   └── packages/realtime   packages/ai
          all share  packages/shared  (API contract)
```

## Rules
1. `packages/shared` defines every request and response shape. Change it first, then the consumers.
2. One branch per module, PR into `main`, CI must pass.
3. Write an ADR in `docs/adr/` for each major technical decision.
