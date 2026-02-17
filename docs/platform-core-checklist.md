# platform-core-checklist.md
## 3PlugPOS — Platform Core Checklist (Backend + Deployment Foundation)

Purpose:
This checklist defines the **Platform Core** that must be built before (and alongside) the 3 Plugs.
It is the backend/deployment foundation required for:
- Offline-first on-prem operation
- Security-first posture
- Audit/forensics readiness
- Upgrade safety
- Analytics baseline
- Future extensibility (industry modules + later sync + later mobile)

Rule:
No plug feature is considered complete if it bypasses platform core requirements
(e.g., no RBAC, no audit logging, no migrations).

---

# STATUS LEGEND
[ ] Not Started  
[~] In Progress  
[✓] Implemented  
[✓✓] Implemented + Tested  
[✓✓✓] Fully Validated (Security + Audit + Backup/Restore + Docs Complete)

---

# 1) PLATFORM BOOTSTRAP & APP LIFECYCLE

## 1.1 Service Startup & Shutdown
- [ ] Configuration loader (env/files)
- [ ] Service start/stop hooks
- [ ] Graceful shutdown (drain requests, close DB)
- [ ] Health status reporting (boot status, readiness)

## 1.2 First-Run Setup Wizard (Backend Support)
- [ ] Create business instance
- [ ] Create initial admin user
- [ ] Initialize baseline settings (currency, taxes, numbering)
- [ ] Seed minimal role templates
- [ ] Verify storage paths (logs, backups)

---

# 2) AUTHENTICATION

## 2.1 User Authentication
- [ ] Local username/password auth
- [ ] Password hashing policy (strong hash + salt)
- [ ] Password complexity rules
- [ ] Password reset flow (admin-driven for on-prem)
- [ ] Account lockout policy
- [ ] Session/token issue and renewal

## 2.2 Session Management
- [ ] Session expiration rules
- [ ] Concurrent session limits (configurable)
- [ ] Logout + token invalidation
- [ ] Session/device fingerprint capture
- [ ] Idle timeout (optional)

## 2.3 Optional MFA (Phase 1-ready even if off by default)
- [ ] MFA framework hooks
- [ ] Role-based MFA requirement toggle
- [ ] Recovery codes (optional)

---

# 3) RBAC & PERMISSIONS (AUTHORIZATION)

## 3.1 Role System
- [ ] Role creation & editing
- [ ] Assign roles to users
- [ ] Disable/enable users
- [ ] Role templates (cashier, manager, accountant, auditor, admin)

## 3.2 Permission Model (Granularity)
- [ ] Plug-level access control (Ops/Mgmt/Admin)
- [ ] Module-level access control
- [ ] Submodule-level access control
- [ ] Action-level permissions (refund, void, price edit, stock adjust)
- [ ] Field-level permissions (sensitive fields)

## 3.3 Enforcement Layer
- [ ] Server-side permission guards on every endpoint
- [ ] Deny-by-default policy
- [ ] Permission audit logs (denials, escalation attempts)
- [ ] Test suite for RBAC coverage

---

# 4) MODULE REGISTRY & FEATURE TOGGLES

## 4.1 Module Registry
- [ ] Register modules/submodules
- [ ] Enable/disable modules per business
- [ ] Version tracking per module
- [ ] Dependency rules (module depends on core/other module)

## 4.2 Feature Flags / Toggles
- [ ] Toggle system (config + admin UI hook)
- [ ] Safe default settings
- [ ] Industry-module activation hooks (for later releases)

---

# 5) VALIDATION FRAMEWORK (SERVER-SIDE)

- [ ] Request validation framework (schemas)
- [ ] Standard error format
- [ ] Cross-field validation support
- [ ] Standard numeric precision checks (money/qty)
- [ ] Consistent status transition validation helpers

---

# 6) AUDIT LOGGING (BUSINESS EVENTS) — FORENSICS-GRADE

## 6.1 Audit Log Storage
- [ ] Append-only audit table(s)
- [ ] Required metadata fields:
  - actor, time, device, module, entity, action, before/after, reason, approvals
- [ ] Reason codes mandatory for sensitive actions
- [ ] Audit retrieval APIs (filters by date/user/entity/action)

## 6.2 Tamper Evidence
- [ ] Hash chain implementation (per business DB)
- [ ] Hash verification tool/endpoint
- [ ] Detection and alert on tamper attempt (if possible)

## 6.3 Audit UI Support (Backend Capabilities)
- [ ] Pagination and query performance
- [ ] Export of audit logs (CSV/PDF)
- [ ] Audit integrity report (hash continuity)

---

# 7) SYSTEM LOGGING (TECHNICAL)

- [ ] Structured logs (JSON recommended)
- [ ] Log levels (debug/info/warn/error)
- [ ] Request correlation ID
- [ ] Error capture and stack trace handling
- [ ] Log rotation
- [ ] Log retention policy (configurable)
- [ ] Support bundle export (logs + version info)

---

# 8) SECURITY LOGGING & DETECTION

- [ ] Login attempts logging
- [ ] Account lockout events
- [ ] Permission denial logging
- [ ] Privilege changes logging
- [ ] Sensitive export/download action logging
- [ ] Suspicious behavior flags (high refunds, voids, after-hours edits)
- [ ] Incident notes log (manual admin notes)

---

# 9) DATABASE LAYER & MIGRATIONS

## 9.1 DB Connection & Transactions
- [ ] Connection pool setup
- [ ] Transaction wrapper utilities
- [ ] Retry policy for transient failures
- [ ] DB health check

## 9.2 Migrations Framework
- [ ] Schema version tracking table
- [ ] Migration runner
- [ ] Migration validation (dry-run checks where possible)
- [ ] Migration failure handling
- [ ] Backward compatibility policy notes

## 9.3 Data Integrity Protections
- [ ] Constraints (FKs, uniqueness, checks)
- [ ] Soft-delete policy (where needed)
- [ ] Closed-period protection hooks (future admin)

---

# 10) BACKUP, RESTORE, AND VERIFICATION

## 10.1 Backup Engine
- [ ] Full DB backup schedule (daily)
- [ ] Optional frequent snapshots (hourly critical)
- [ ] Backup storage path management
- [ ] Backup naming/versioning convention
- [ ] Compression (optional)
- [ ] Encryption of backups (recommended)

## 10.2 Backup Verification
- [ ] Automated integrity verification
- [ ] Backup status dashboard endpoint
- [ ] Alerts on backup failure

## 10.3 Restore Engine
- [ ] Guided restore workflow (admin)
- [ ] Restore verification checks
- [ ] Rollback procedure doc hooks

---

# 11) REPORTING & ANALYTICS BASELINE (PLATFORM LEVEL)

- [ ] Reporting framework (query builder or report registry)
- [ ] Standard filters (date range, branch, user)
- [ ] Export framework (CSV/PDF)
- [ ] Analytics refresh scheduler (jobs)
- [ ] KPI registry framework (Mgmt plug extends later)
- [ ] Performance guardrails (timeouts, caching, indexes)

---

# 12) JOB SCHEDULER / BACKGROUND TASKS

- [ ] Job scheduler subsystem
- [ ] Scheduled backups
- [ ] Scheduled analytics refresh
- [ ] Cleanup jobs (old logs, temp files)
- [ ] Job retries with backoff
- [ ] Job monitoring endpoints (status, history)
- [ ] Dead-letter handling (failed jobs captured)

---

# 13) CONFIGURATION MANAGEMENT

- [ ] Config file format + env overrides
- [ ] Secure secret storage policy
- [ ] Business settings store (currency, tax, numbering)
- [ ] Environment profiles (dev/test/prod)
- [ ] Config validation at startup

---

# 14) API GOVERNANCE

- [ ] API versioning (e.g., /api/v1)
- [ ] Consistent response envelope
- [ ] Pagination standard
- [ ] Error codes standard
- [ ] Rate limiting (optional on-prem)
- [ ] CORS policy (for hosted mode)

---

# 15) DESKTOP APP INTEGRATION SUPPORT (BACKEND-SIDE)

- [ ] Localhost binding defaults
- [ ] LAN binding option (multi-PC)
- [ ] Auto-discovery support (optional later)
- [ ] WebSocket support (live updates)
- [ ] Printer/device integration hooks (future)

---

# 16) INSTALLER + UPDATE WORKFLOW (ON-PREM PRIORITY)

## 16.1 Installer Requirements
- [ ] Installs backend service
- [ ] Installs PostgreSQL or ensures DB dependency
- [ ] Installs desktop app
- [ ] Configures service auto-start
- [ ] Creates required directories (logs/backups)
- [ ] Adds firewall rules (if LAN mode)
- [ ] Runs first-run initialization

## 16.2 Update Workflow
- [ ] Update package format defined
- [ ] Backup-before-upgrade enforced
- [ ] Migration runs automatically
- [ ] Post-upgrade health checks
- [ ] Rollback plan (restore backup)
- [ ] Version display and history

## 16.3 Diagnostics & Support Export
- [ ] One-click support bundle export:
  - logs, version, backup status, DB status, basic metrics

---

# 17) DOCUMENTATION REQUIREMENTS (PLATFORM CORE)

- [ ] PLATFORM_CORE.md
- [ ] SECURITY.md
- [ ] AUDIT_LOGGING.md
- [ ] BACKUP_RESTORE.md
- [ ] UPGRADES_MIGRATIONS.md
- [ ] INSTALLER_GUIDE.md
- [ ] RUNBOOKS (common failure scenarios)

---

# 18) PLATFORM CORE DONE DEFINITION

Platform core is considered COMPLETE only when:
- [ ] Auth + RBAC fully enforced
- [ ] Audit logging + tamper evidence operational
- [ ] Migrations stable and tested
- [ ] Backup/restore verified in simulation
- [ ] Installer + update workflow proven end-to-end
- [ ] Logs/export support bundle works
- [ ] Docs and runbooks exist

Only then should plug-level implementation scale aggressively.

---