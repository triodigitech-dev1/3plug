# build-flow.md

## 3PlugPOS Development Build Flow

This is the execution flow for starting and scaling actual development.

## 1) Source of Truth Order

Use docs in this priority when making decisions:

1. `docs/core-product-shape.md` (architecture constraints)
2. `docs/backend-blueprint-checklist.md` (backend implementation baseline)
3. `docs/platform-core-checklist.md` (platform core done-gates)
4. `docs/blueprint.md` (plug sequencing and phase order)
5. `docs/helper-dev-blueprint.md` (helper/enforcement rules)
6. `docs/plug1.bizoperations.md`, `docs/plug2.management.md`, `docs/plug3.administration.md` (plug scope)
7. `docs/docs-blueprint.md` (documentation requirements during delivery)

## 2) Ground Rules Before Coding

1. Offline-first, on-prem, single-tenant by default.
2. Build Platform Core first, then plug features.
3. No endpoint ships without validation, RBAC, and audit coverage.
4. Use standard user DB runtime credentials in `.env`; reserve superuser for setup/migrations only.
5. Track progress directly in `docs/platform-core-checklist.md` and `docs/backend-blueprint-checklist.md`.

## 3) Phase A: Platform Core (Start Here)

Goal: deliver backend/deployment foundation before plug expansion.

### Step A1: Bootstrap + Config + Health
- Build app bootstrap, config loader, readiness/liveness endpoints.
- References:
  - `docs/backend-blueprint-checklist.md` (Sections 4.1, 4.13)
  - `docs/platform-core-checklist.md` (Section 1, 13)

### Step A2: Auth + Sessions + RBAC
- Implement local auth, session/token lifecycle, roles, permissions, deny-by-default guards.
- References:
  - `docs/backend-blueprint-checklist.md` (Sections 4.2, 4.3)
  - `docs/platform-core-checklist.md` (Sections 2, 3)

### Step A3: Validation + API Governance
- Add schema validation middleware, standard error envelope, API versioning baseline (`/api/v1`).
- References:
  - `docs/backend-blueprint-checklist.md` (Sections 4.5, 4.14)
  - `docs/platform-core-checklist.md` (Sections 5, 14)

### Step A4: Audit + System/Security Logging
- Implement append-only audit events, hash-chain integrity checks, structured logs, security event logging.
- References:
  - `docs/backend-blueprint-checklist.md` (Sections 4.6, 4.7, 4.8)
  - `docs/platform-core-checklist.md` (Sections 6, 7, 8)
  - `docs/helper-dev-blueprint.md` (Audit and logging helper rules)

### Step A5: DB Layer + Migrations + Backup/Restore
- Build DB access layer, migration runner, backup/restore workflows and verification.
- References:
  - `docs/backend-blueprint-checklist.md` (Sections 4.9, 4.10, 4.17)
  - `docs/platform-core-checklist.md` (Sections 9, 10, 16)

### Step A6: Jobs + Reporting/Analytics Baseline
- Add scheduler, analytics refresh jobs, report/export framework.
- References:
  - `docs/backend-blueprint-checklist.md` (Sections 4.11, 4.12)
  - `docs/platform-core-checklist.md` (Sections 11, 12)

### Step A7: Module Registry + Feature Toggles + Diagnostics
- Implement module registry, enable/disable logic, support bundle export.
- References:
  - `docs/backend-blueprint-checklist.md` (Sections 4.4, 4.17)
  - `docs/platform-core-checklist.md` (Sections 4, 16.3, 18)

Gate to exit Phase A:
- Platform core must satisfy `docs/platform-core-checklist.md` Section 18.

## 4) Phase B: Plug 1 (Operations) - Shared First

Goal: complete shared Operations before any industry specialization.

1. Implement shared operations modules in Stage 1A order.
2. Enforce helper usage and audit wrappers in all write paths.
3. Add tests for auth/RBAC/audit/validation/migration impacts.

References:
- `docs/blueprint.md` (Phase 1, Stage 1A/1B)
- `docs/plug1.bizoperations.md`
- `docs/helper-dev-blueprint.md`

Gate:
- Shared Operations stable before Stage 1B.

## 5) Phase C: Plug 2 (Management)

1. Build shared management capabilities (Stage 2A).
2. Then implement industry-specific management (Stage 2B) in fixed order.

References:
- `docs/blueprint.md` (Phase 2)
- `docs/plug2.management.md`
- `docs/helper-dev-blueprint.md`

## 6) Phase D: Plug 3 (Administration)

1. Build shared administration capabilities (Stage 3A).
2. Then implement industry-specific administration (Stage 3B) in fixed order.

References:
- `docs/blueprint.md` (Phase 3)
- `docs/plug3.administration.md`
- `docs/helper-dev-blueprint.md`

## 7) Documentation and Release Discipline (All Phases)

For every feature set:
1. Update module/backend/security docs.
2. Update runbooks and release notes.
3. Verify backup + migration + audit test gates before merge.

References:
- `docs/docs-blueprint.md`
- `docs/platform-core-checklist.md` (Section 17)

## 8) Mobile Phase (Later)

Start only after desktop core + all three plugs are stable.

References:
- `docs/blueprint.md` (Phase 4)

## 9) Immediate Next Task (Recommended)

Start implementation with:
1. `backend/core/config`
2. `backend/core/bootstrap` (startup + graceful shutdown)
3. `backend/core/health` (`/health`, `/ready`)
4. DB connection utility in `backend/core` using `.env`

Then mark completed items in:
- `docs/platform-core-checklist.md` Section 1 and 13
- `docs/backend-blueprint-checklist.md` Section 4.1 and 4.13
