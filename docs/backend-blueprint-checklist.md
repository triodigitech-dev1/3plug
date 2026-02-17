# backend-blueprint.md
## 3PlugPOS — Backend Blueprint (Core Platform + Deployment Foundation)

This document is the authoritative backend blueprint for 3PlugPOS.
It defines the backend capabilities required to support:

- Offline-first, on-premise deployments
- Single-tenant per business (own DB)
- Desktop-first delivery (Phase 1)
- Progressive industry specialization (later releases)
- Strong audit + forensics readiness
- Backup/restore + upgrade safety
- Analytics/BI baseline
- Mobile readiness (Phase 2) without backend redesign

Scope:
This blueprint covers everything from **Authentication** through **Installer + Update Workflow**, plus the architectural rules that keep the backend manageable over many releases.

---

# 1) BACKEND PRINCIPLES

1. **Offline-first**: backend runs locally; internet is optional.
2. **On-prem security first**: secure defaults, least privilege, auditability.
3. **Single deployable unit** (Modular Monolith): simplest for installers and upgrades.
4. **Core + Plugs + Modules + Submodules**: strict boundaries and ownership.
5. **API is the source of truth**: no business logic in clients.
6. **Audit-first**: every write is logged with forensics-grade metadata.
7. **Upgrade-safe**: backup-before-upgrade + migrations + verification.
8. **Analytics is mandatory**: baseline BI exists from v1.
9. **Industry extensions are plug-ins**: add modules without modifying core logic.
10. **Mobile later**: Phase 2 adds a new client; backend changes must be minimal.

---

# 2) HIGH-LEVEL ARCHITECTURE

## 2.1 Runtime Components (On-Prem)
- Backend Service (Node.js, JavaScript)
- PostgreSQL Database (per business)
- Background Job Runner (inside backend)
- Local File Storage (logs, exports, backups)
- Desktop Clients connect over localhost/LAN

## 2.2 Hosted Mode (Optional, Not SaaS)
- Same backend + DB installed on customer-owned server/VPS
- Same APIs; only deployment topology changes

---

# 3) REFERENCE BACKEND STRUCTURE (MODULAR MONOLITH)

/backend  
│  
├── core/  
│   ├── auth/  
│   ├── rbac/  
│   ├── module-registry/  
│   ├── audit/  
│   ├── logging/  
│   ├── security-events/  
│   ├── validation/  
│   ├── config/  
│   ├── jobs/  
│   ├── reporting/  
│   ├── analytics/  
│   ├── backup-restore/  
│   ├── migrations/  
│   ├── diagnostics/  
│   └── installer-hooks/  
│  
├── plugs/  
│   ├── operations/  
│   ├── management/  
│   └── administration/  
│  
└── shared/ (common utilities, helpers, shared types)

Ownership rule:
- `core/*` provides shared infrastructure services.
- `plugs/*` contains domain logic (modules/submodules).
- Domain modules do not bypass core services (RBAC, audit, validation, etc.).

---

# 4) PLATFORM CORE CAPABILITIES (BUILD FIRST)

This section is the backend backbone. It must exist before scaling plug features.

---

## 4.1 Platform Bootstrap & Lifecycle

### Requirements
- Configuration loader (env + files)
- Service start/stop hooks
- Graceful shutdown (drain requests + close DB)
- Startup checks (DB reachable, storage paths OK)
- Readiness/health status endpoints

### First-run initialization
- Create business instance
- Create initial admin user
- Seed baseline settings (currency, tax, numbering)
- Seed baseline roles and permissions
- Create required directories (logs, backups, exports)

---

## 4.2 Authentication

### Local authentication
- Username/password authentication
- Strong password hashing
- Password complexity rules
- Account lockout policy
- Admin-driven password reset (on-prem suitable)

### Sessions/tokens
- Access token + refresh token (or equivalent session model)
- Token invalidation on logout
- Session expiry policies
- Concurrent session policy (configurable)
- Device/session metadata capture

### Optional MFA hooks (Phase 1-ready)
- MFA framework (even if disabled by default)
- Role-based MFA enforcement toggles
- Recovery process (optional)

---

## 4.3 RBAC & Authorization

### Roles
- Role creation/editing
- User assignment
- Enable/disable user
- Built-in role templates:
  - cashier
  - manager
  - accountant
  - auditor
  - super admin

### Permission granularity
- Plug-level access (Ops/Mgmt/Admin)
- Module access
- Submodule access
- Action-level permissions (refund, void, price edit, stock adjust)
- Field-level permissions for sensitive fields

### Enforcement
- Server-side guards for every endpoint
- Deny-by-default behavior
- Logging of permission denials/escalations
- RBAC automated tests (coverage checks)

---

## 4.4 Module Registry & Feature Toggles

### Module registry
- Register modules/submodules
- Enable/disable modules per business instance
- Module dependency rules
- Module version tracking

### Feature toggles
- Toggle system (config + admin controls)
- Industry enablement flags (future releases)
- Safe defaults always on for audit/security features

---

## 4.5 Validation Framework (Server-Side)

- Request validation with schemas
- Consistent error formatting
- Cross-field validation support
- Numeric precision guards (money, quantities)
- Status transition validation helpers
- Closed-period modification guard hooks (future admin)

---

## 4.6 Audit Logging (Business Events) — Mandatory

### Audit store
- Append-only audit table(s) in Postgres
- Immutable audit record policy
- Required metadata:
  - actor (user + role)
  - timestamp
  - device/workstation
  - module/submodule
  - entity + entity id
  - action name
  - before/after values or diff
  - reason code (mandatory for sensitive actions)
  - approvals references (if any)

### Tamper evidence
- Hash chain support for audit entries
- Verification endpoint/tool
- Tamper detection alerting (as feasible)

### Audit retrieval
- Query endpoints (filters by date, user, entity, action, module)
- Export endpoints (CSV/PDF)
- Integrity report endpoint (hash continuity)

---

## 4.7 System Logging (Technical Logs)

- Structured logs (JSON recommended)
- Log levels (debug/info/warn/error)
- Request correlation IDs
- Exception capture standard
- Log rotation
- Retention policy (configurable)
- Support bundle export:
  - logs + version + config snapshot (safe subset)

---

## 4.8 Security Logging & Detection

- Login attempt logs
- Account lockout logs
- Permission denial logs
- Privilege change logs
- Sensitive export/download logs
- Suspicious pattern flags (refund spikes, void spikes, after-hours edits)
- Incident notes module (manual recording)

---

## 4.9 Database Layer & Migrations

### DB connectivity
- Connection pooling
- Transaction wrapper
- Retry policy for transient failures
- DB health checks

### Constraints & integrity
- FK/unique/check constraints
- Referential integrity enforcement
- Soft-delete policy where needed
- Versioning fields policy (`updated_at`, `version`)

### Migrations
- Schema version table
- Migration runner
- Dry-run checks where possible
- Failure handling rules
- Backward compatibility policy notes
- Migration test harness:
  - upgrade from previous release
  - verify core tables + audit compatibility

---

## 4.10 Backup, Restore, and Verification

### Backup engine
- Scheduled full backups (daily)
- Optional frequent snapshots (hourly critical)
- Backup naming/versioning convention
- Storage path management
- Compression (optional)
- Encryption of backups (recommended)

### Backup verification
- Automated integrity checks
- Backup status endpoints
- Failure alerts/logging

### Restore engine
- Guided restore workflow (admin/IT)
- Post-restore verification checks
- Rollback plan definition:
  - restore backup if migration fails

---

## 4.11 Reporting & Analytics Baseline (Platform Level)

### Reporting framework
- Report registry (define reports centrally)
- Standard filters (date range, branch, user, category)
- Export framework (CSV/PDF)

### Analytics baseline
- KPI registry framework (plug extends)
- Analytics refresh jobs (scheduled)
- Performance guardrails:
  - indexes, caching, query timeouts
- Baseline dashboards support (Mgmt plug consumes)

---

## 4.12 Background Job Scheduler

- Job scheduler subsystem
- Scheduled backups
- Scheduled analytics refresh
- Cleanup jobs (old logs/temp files)
- Retries with backoff
- Job monitoring endpoints (status + history)
- Dead-letter capture (failed jobs tracked)

---

## 4.13 Configuration Management

- Config file format + environment overrides
- Secure secret storage policy
- Business settings store:
  - currency, tax, numbering rules
- Environment profiles (dev/test/prod)
- Config validation at startup

---

## 4.14 API Governance

- API versioning (e.g., `/api/v1`)
- Consistent response envelope
- Pagination standard
- Error codes standard
- Rate limiting (optional on-prem)
- CORS policy for hosted mode
- OpenAPI documentation generation
- WebSocket protocol documentation

---

## 4.15 Desktop Integration Support (Backend)

- Default bind: localhost
- Optional bind: LAN (multi-PC)
- Desktop authentication flow support
- WebSocket support for live updates:
  - POS totals
  - dashboard refresh
  - job status (backup/reporting)
- Printer/device integration hooks (future)

---

## 4.16 Installer Hooks + On-Prem Operational Support (Backend)

Backend must include installer-support hooks:
- First-run initialization endpoints
- Safe directory creation helpers
- Permission checks for file system paths
- DB initialization hooks
- Service readiness signals for desktop UI

---

## 4.17 Installer + Update Workflow (On-Prem Priority)

### Installer requirements
- Installs backend service
- Installs PostgreSQL or ensures DB dependency
- Installs desktop app
- Configures service auto-start
- Creates required directories (logs/backups/exports)
- Adds firewall rules if LAN binding enabled
- Runs first-run initialization

### Update workflow requirements
- Update package format defined
- Backup-before-upgrade enforced
- Migration runs automatically
- Post-upgrade health checks
- Rollback via restore backup
- Version display + version history

### Diagnostics support export
- One-click support bundle export:
  - logs, version, backup status, DB status, job history, safe config snapshot

---

# 5) PLUGS INTEGRATION CONTRACT (BACKEND-LEVEL)

All plug modules must integrate with core systems:

Mandatory per endpoint/action:
- Validation enforced
- RBAC enforced
- Audit event created for every write
- System log entries for failures
- Transaction wrapper for multi-step state changes

No plug module can bypass core services.

---

# 6) FUTURE READINESS HOOKS (PHASE 1, NO FULL IMPLEMENTATION)

Even though sync/integrations come later, Phase 1 must prepare:

- Global unique IDs (UUID)
- Outbox/event log table for future sync
- Version columns for conflict handling
- Audit entries include branch/device metadata
- API versioning policy already active

This avoids architectural rewrites when scaling.

---

# 7) BACKEND “DONE” DEFINITION (PHASE 1 CORE)

Backend core is considered complete when:

- Auth + RBAC fully enforced for all endpoints
- Audit logging is append-only and tamper-evident (hash chain implemented)
- Migrations are stable and tested (upgrade tests pass)
- Backup + restore simulation passes (verified restore)
- Reporting/analytics baseline exists and runs offline
- Job scheduler runs backups and analytics refresh reliably
- Installer + update workflow works end-to-end
- Diagnostics/support bundle export works
- Documentation exists for the above

Only then should plug implementation scale aggressively across shared + 20 industries.

---