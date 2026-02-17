# core-productshape.md
## 3PlugPOS — Core Product Shape (Engineering-First, Offline-First, On-Prem)

This document converts the 3PlugPOS requirements into an engineering-focused **core product shape**: deployment model, modular structure, database strategy, synchronization, security, logging/forensics, backup, and analytics.

---

# 1) Product Identity (Engineering Definition)

**3PlugPOS** is an **offline-first, on-premise downloadable business system** built on a modular 3-plug architecture:

- **Operations Plug** (execution)
- **Management Plug** (oversight & intelligence)
- **Administration Plug** (control, compliance & records)

Key principles:
- **Not SaaS** (no shared multi-tenant platform operated by vendor)
- **Single-tenant per business** (each business owns its deployment and database)
- **Offline/local-first** (LAN operation is primary)
- **Online is optional** (primarily for remote access and synchronization)
- **Security + backup first** (on-prem hardening as default posture)
- **Forensics-grade logging** (auditability by design)
- **Analytics/BI is mandatory** (built-in reporting and decision intelligence)
- **External integrations are deferred** (post several releases, after user base)

---

# 2) Deployment Model

## 2.1 Default Mode: On-Prem, Offline-First
- Installed locally at the business site.
- Runs on:
  - A local server machine (recommended), or
  - A single PC acting as server for small shops.
- Clients connect via LAN/Wi-Fi:
  - POS terminals
  - Admin/management desktops
  - Tablets/mobile devices on local network

Offline-first requirements:
- Full operation without internet
- Local authentication (with secure policies)
- Local reporting + dashboards
- Local backup available at all times

## 2.2 Optional Mode: Hosted (Still Not SaaS)
- Deployed on a customer-owned VPS/hosted server for remote access.
- Still:
  - Single customer per deployment
  - Customer owns data + keys
- Online access enables:
  - Remote management
  - Multi-branch consolidation sync

---

# 3) Tenancy & Database Strategy

## 3.1 Per-Business Data Ownership
- Each business installation has **its own database**.
- No shared database across different businesses.

## 3.2 Branch/Chain Strategy (Recommended)
To prioritize offline continuity for chains:

### Option A (Preferred): Branch DB + Central Consolidation
- Each branch has a local DB and runs independently.
- A central DB exists at HQ (or customer-hosted).
- Branches sync data to HQ when connectivity exists.

Benefits:
- Branch remains fully operational offline
- Sync downtime does not stop sales
- Scales to many branches with controlled risk

### Option B: Central DB Only (Less Offline-Friendly)
- Branch terminals depend on central connectivity.
- Not preferred unless stable networking is guaranteed.

---

# 4) Modular Architecture (Plugs + Submodules)

## 4.1 Platform Core (Always Present)
The platform core is shared infrastructure:
- Authentication & authorization (RBAC)
- Configuration & settings
- Audit logging (tamper-evident)
- Backup & restore subsystem
- Reporting & analytics engine
- Sync engine (optional activation)
- System monitoring & diagnostics
- Module registry (enable/disable)

## 4.2 Plugs (Major Modules)
- Operations Plug
- Management Plug
- Administration Plug

## 4.3 Submodules (Isolation + Abstraction)
- Each plug contains multiple submodules (e.g., Sales, Inventory, Payroll).
- Submodules must be designed for:
  - Data isolation (ownership boundaries)
  - Permission isolation (access control)
  - Abstraction (stable APIs between modules)
  - Progressive activation (install/enable only what is needed)

Recommended practical isolation approach:
- Single database per business
- Module-owned tables and strict service/API boundaries
- Optional schema separation per module if needed later

---

# 5) Synchronization (Offline-First Sync Engine)

Sync exists to support:
- Multi-branch consolidation
- Remote access use cases
- Disaster recovery support (optional encrypted offsite backups)

## 5.1 Sync Model
Recommended approach: **Event-Log + Materialized State**
- Important actions produce immutable events (append-only).
- Operational tables remain fast (materialized current state).
- Sync transmits events, not raw table dumps.

This improves:
- Reliability on unstable connections
- Conflict resolution ability
- Audit/forensics reconstruction

## 5.2 Core Sync Requirements
- Offline queueing with retry
- Encryption in transit
- Integrity verification
- Conflict resolution policies (defined per data type)
- Branch identity + global IDs (UUID strategy)
- Partial sync support (only required modules/data)

Note:
- External integrations (banks, third-party ERPs, etc.) are postponed to later releases.
- Internal sync is part of the core architecture.

---

# 6) Security Model (On-Prem First)

Security is treated as a primary requirement, not an add-on.

## 6.1 Identity & Access Control
- Role-based access control (RBAC)
- Least privilege policies
- Separation of duties:
  - cashier vs manager vs accountant vs auditor
- Optional multi-factor authentication (MFA/2FA)
- Account lockouts and password policies
- Device/session management

## 6.2 Data Protection
- Encryption at rest (DB-level or disk-level)
- TLS on all connections (even LAN)
- Secure storage of secrets/keys
- Optional key rotation policy

## 6.3 Hardening & Monitoring
- Secure defaults on installation
- Disable unsafe ports/services
- Admin access restrictions
- Security event monitoring and alerts

---

# 7) Backup & Recovery (Priority Feature)

Backups must work even when offline.

## 7.1 Backup Requirements
- Automated scheduled backups (daily)
- Optional frequent snapshots for critical modules (hourly)
- Versioned backups (retain history)
- Backup verification (integrity checks)
- Restore workflow (guided restore)
- Disaster recovery documentation built in

## 7.2 Offsite Backup (Optional)
When internet exists, allow:
- Encrypted backups to customer-owned storage (cloud or remote server)
- Never vendor-owned SaaS storage by default

---

# 8) Logging, Audits, and Forensics (Built-In)

Logging must support:
- Accounting audits
- Fraud investigations
- Operational accountability
- Compliance requirements

## 8.1 Audit Logging (Business-Level)
Capture:
- who did what
- when
- on which device
- before/after values
- approvals & overrides
- reason codes (mandatory for sensitive actions)

Examples:
- voided receipts
- refunds
- price edits
- stock adjustments
- payroll edits
- manual journal entries

## 8.2 System Logging (Technical)
Capture:
- errors and crashes
- DB failures
- sync failures
- backup failures
- performance anomalies

## 8.3 Security Logging (Forensics)
Capture:
- authentication attempts and failures
- permission denials
- privilege escalations
- export/download actions
- suspicious patterns (anomaly flags)

## 8.4 Tamper Evidence
Recommended:
- append-only logs with hashing (hash chains)
- optional digital signatures for log integrity

---

# 9) Analytics & BI (Mandatory)

Analytics must function in offline/local mode.

## 9.1 Reporting Levels
- Operational reporting (fast reports from transactional data)
- Management dashboards (KPIs, performance, trends)
- Administrative reporting (tax, payroll, compliance, audit reports)

## 9.2 Analytics Architecture
Recommended:
- Local analytics tables (warehouse-like structures)
- Scheduled refresh jobs (offline-capable)
- Dashboard builder + export (CSV/PDF)
- Alerts and thresholds (local notifications)

## 9.3 Chain Analytics
- Branch dashboards operate locally
- Consolidated dashboards update after sync to HQ

---

# 10) Engineering Deliverables Implied by This Shape

From these requirements, 3PlugPOS must produce:

1. Technical Architecture Specification
2. Data Model Specification (core entities + IDs + audit schema)
3. Sync Engine Specification (events + conflict rules + transport security)
4. Security & Hardening Specification
5. Backup/Restore Specification (with verification)
6. Audit/Forensics Specification (log formats + retention)
7. Analytics/BI Specification (KPIs + storage + dashboards)
8. Installer + Update + Migration Plan (offline-safe)

---

# 11) Summary

3PlugPOS is a **downloadable, on-prem, offline-first** modular business platform with:

- Single-tenant database per business
- Optional chain consolidation via sync
- Strong security, backup, and recovery as defaults
- Forensics-grade auditability across finance and operations
- Built-in analytics/BI required from the beginning
- External integrations deferred to later releases

This defines the **core engineering product shape** required to move from concept to buildable system.