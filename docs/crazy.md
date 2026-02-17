# 3Plug POS — “Real System” Blueprint (POS + ERP Operations Platform)

This document is a practical blueprint you can use to build 3Plug POS like real-world systems (ERPNext/Odoo/Sage-class) instead of “dummy CRUD apps”. It focuses on **modules, master data, workflows, accounting integrity, auditability, offline-first sync**, and the UI that supports it.

> References used for grounding:
> - ERPNext module set (Accounts, Procurement, Sales, CRM, Stock, Manufacturing, Projects, POS). :contentReference[oaicite:0]{index=0}
> - Odoo POS features (sessions, refunds, cash management, pricing features, hardware integrations) and “works even if temporarily offline”. :contentReference[oaicite:1]{index=1}
> - Sage definition of ERP covering accounting/payroll/inventory/MRP/HR/CRM. :contentReference[oaicite:2]{index=2}
> - POS core: payment processing is central; POS tracks transactions for reporting. :contentReference[oaicite:3]{index=3}
> - ERPNext accounting primitives: Chart of Accounts + Journal Entry (double-entry). :contentReference[oaicite:4]{index=4}
> - ERPNext POS offline concept exists historically and in some deployments (offline invoices stored locally & synced later). :contentReference[oaicite:5]{index=5}

---

## 1) What “Real” Means in POS/ERP

A real POS/ERP system is not “screens + tables”. It is:
- **Master data** (products, customers, taxes, chart of accounts, price rules)
- **Transactions** with lifecycle states (draft → submitted → posted → paid → reconciled)
- **Ledgers** that must balance (double-entry accounting) :contentReference[oaicite:6]{index=6}
- **Stock integrity** (every movement must be traceable)
- **Audit trail** (who did what, when, from which terminal)
- **Multi-branch / multi-warehouse / multi-currency** (even if you ship later)
- **Role-based access** and approval workflows (discount approvals, refunds, voids)
- **Offline-first** with conflict handling and reliable sync (especially for POS) :contentReference[oaicite:7]{index=7}

---

## 2) Core Modules (Minimum “ERPNext-Class” Set)

### A) POS (Front Counter)
Capabilities you must cover:
- Product browse/search, barcode scan
- Cart, discounts, taxes, rounding
- Payments (cash/card/mobile money), split payments
- Receipt printing & reprint, returns/refunds
- Shifts/sessions: open, cash-in/out, close, X/Z reports
- Offline transactions + queued sync :contentReference[oaicite:8]{index=8}

### B) Sales (Back Office)
- Quotations (optional), Sales Orders
- Delivery/Fulfillment (for non-instant sales)
- Sales Invoices (POS generates these too)
- Credit notes / returns / adjustments
- Customer AR (accounts receivable)

### C) Procurement (Buying)
- Supplier onboarding
- Requests / Purchase Orders
- Goods Receipt (GRN)
- Supplier Bills (AP)
- Supplier payments

### D) Stock / Inventory
- Items (SKUs), units, variants
- Warehouses & bins
- Stock ledger (every movement: receipt, sale, transfer, adjustment)
- Reorder rules, stock counts, batch/serial, expiry (optional)
- Transfers: branch-to-branch, warehouse-to-warehouse

### E) Accounting (General Ledger)
- Chart of Accounts (tree) :contentReference[oaicite:9]{index=9}
- Journals / Journal Entries (debits = credits) :contentReference[oaicite:10]{index=10}
- AR/AP, bank/cash accounts, reconciliation
- Tax control accounts
- Period closing & audit locking

### F) Administration
- Users, Roles, Permissions matrix
- Device/Terminal management
- Branches, registers, warehouses
- Number series (invoice numbering per branch)
- Audit logs, activity feed

> These are exactly the kinds of functional areas you see highlighted by ERP suites like ERPNext and Sage. :contentReference[oaicite:11]{index=11}

---

## 3) The Golden Rule: Every Business Event Must “Post” to Ledgers

### POS Sale (Cash example)
When a POS invoice is finalized:
- Stock decreases (Cost of Goods Sold recognized)
- Revenue recognized
- Tax recorded
- Cash increases
- If customer credit sale → Receivable increases instead of Cash

This is why POS payment processing and transaction tracking are core. :contentReference[oaicite:12]{index=12}

### Refund
- Reverse revenue + tax
- Stock increases (if item returned to inventory)
- Cash decreases (or create a store credit liability)

### Stock Receipt (GRN)
- Stock increases
- “Goods Received Not Invoiced” or interim account may be used
- Later, Supplier Bill moves it to Payables

**Design implication:** your backend must enforce posting rules and never allow “half-posted” states.

---

## 4) Master Data Model (Tables/Entities You Need Early)

### Organization & Structure
- Company (future-proof)
- Branch / Outlet
- Warehouse (per branch)
- POS Terminal / Register
- Number Series / Document Naming rules

### People
- User
- Role
- Permission Policy
- Customer
- Supplier
- Employee (optional)

### Product & Pricing
- Item (SKU)
- Item Group / Category
- UOM (unit of measure)
- Price List
- Price Rule (discounts, promos)
- Tax Template / Tax Group

### Finance
- Chart of Accounts
- Payment Method (Cash, Card, Mobile Money, Bank Transfer)
- Bank Account / Cash Drawer Account
- Fiscal Position (optional; for tax mapping)

### Operational
- Stock Ledger Entry
- Batch / Serial (optional)
- Stock Count
- Reorder Rule

---

## 5) Transaction Documents + State Machines (Non-Negotiable)

Each document should have:
- `status` (Draft → Submitted/Posted → Cancelled)
- `posting_date`, `posting_time`
- immutable `doc_no` once posted
- `created_by`, `approved_by`, `cancelled_by`, timestamps
- links to related docs (traceability)

### Key Documents
- POS Invoice
- Payment Entry
- POS Session (shift)
- Sales Invoice / Credit Note
- Purchase Order
- Goods Receipt (GRN)
- Purchase Invoice
- Stock Transfer
- Stock Adjustment
- Journal Entry :contentReference[oaicite:13]{index=13}

---

## 6) POS Session Model (How “Serious” Systems Do It)

A POS session (shift) is:
- one register + one cashier + time window
- opening float
- cash movements (cash in/out)
- sales totals by payment type
- expected cash vs counted cash
- close action produces a session report

Odoo explicitly structures POS around sessions, cash register management, refunds, closing, analytics. :contentReference[oaicite:14]{index=14}

---

## 7) Offline-First POS: Rules That Avoid Pain

Offline POS is not “just cache”. You need:
1. **Local store** for: items, prices, taxes, customers (lite), current session, and queued invoices
2. **Deterministic IDs** (UUIDs) generated offline
3. **Append-only event log** of actions (sale posted, payment recorded, refund issued)
4. **Sync engine**:
   - push local events
   - server validates + posts ledgers
   - server returns authoritative document numbers + posting results
5. **Conflict policy**:
   - price changes mid-offline: honor local at time-of-sale (keep a snapshot)
   - stock conflicts: allow sale but flag negative stock + notify manager OR enforce offline stock constraints by cached levels (your choice)

ERP ecosystems discuss offline POS behavior as “create invoices offline, saved locally, sync later” and historically used local storage for offline capability. :contentReference[oaicite:15]{index=15}  
Odoo documentation also emphasizes POS can work “temporarily offline”. :contentReference[oaicite:16]{index=16}

---

## 8) Security & Controls (Stops Fraud / Mistakes)

### Role permissions
- Cashier: sell, take payments, open/close session
- Supervisor: approve discounts > X%, approve refunds, void posted invoices
- Accountant: journal entries, reconciliation, period close
- Admin: manage users/roles/devices

### Required controls
- Discount approval flow (threshold-based)
- Refund approval + reason codes
- Price override logging
- Void/cancel requires supervisor + audit note
- End-of-day locking: prevent backdated edits after closing

### Audit log
- Immutable `audit_log` table: actor, action, object_type, object_id, before/after hashes

---

## 9) Reporting That Matters (Build These Early)

### POS Ops
- Sales by hour/day/branch/register/cashier
- Payment method breakdown
- Refund rate
- Discount analysis
- Session variance (expected vs counted)

### Inventory
- Stock on hand by warehouse
- Stock valuation (FIFO/weighted avg later)
- Slow-moving items
- Reorder suggestions

### Finance
- Sales summary (revenue/tax)
- Cashbook
- AR aging, AP aging
- Trial balance, P&L, Balance Sheet (later)

---

## 10) UI Screens to Implement (Realistic Roadmap)

### POS (Front)
- POS Dashboard (session status)
- Product grid + search + barcode input
- Cart + customer selection
- Checkout modal (split payments)
- Receipt view + reprint
- Returns/refunds flow
- Cash in/out dialog
- Close shift wizard

### Back Office
- Products (items, categories, prices)
- Inventory (stock ledger, transfers, adjustments, stock count)
- Customers & suppliers
- Sales invoices & credit notes
- Purchases (PO, GRN, supplier invoices)
- Accounting (CoA tree, journal entry, ledgers) :contentReference[oaicite:17]{index=17}
- Reports dashboard
- Users/roles/devices

---

## 11) Implementation Principles (So Codex Builds the Right Stuff)

**Non-negotiables for generated code:**
- Every “Post” action is transactional (DB transaction):
  - write doc
  - write stock ledger
  - write GL entries
  - update balances
  - commit or rollback
- Never let UI directly mutate posted documents (only corrections via reversing docs)
- Document numbering is server-authoritative (offline uses temporary IDs → server assigns final numbers)
- Always support multi-branch from day 1 (even if you run 1 branch now)
- Treat reporting as first-class: design tables with queryability

**Backend patterns to enforce:**
- Service layer: `post_pos_invoice()`, `post_stock_transfer()`, `post_journal_entry()`
- Domain validation: taxes, price rules, permissions
- Event sourcing (optional) or at least append-only ledger tables

---

## 12) MVP Scope (What to Build First)

Phase 1 (Must-have):
- POS sale + payment + receipt
- Sessions (open/close + cash count)
- Items + simple pricing + taxes
- Stock decrement on sale
- Basic GL posting for sales + cash
- Offline queue + sync (minimal)

Phase 2:
- Purchasing + GRN + supplier invoices
- Stock transfers + stock count
- AR/AP basics
- Refunds with approvals
- Reports

Phase 3:
- Manufacturing / projects / HR (only if needed)
- Advanced pricing, loyalty, promotions
- Reconciliation, period close, audit exports

---

## 13) Glossary (Consistency for Developers + Codex)

- **Document**: business transaction record (Invoice, GRN, Journal Entry)
- **Posting**: writing irreversible ledger effects (GL + Stock)
- **Ledger**: append-only accounting/stock movement records
- **Session/Shift**: cashier/register operational window
- **Offline Queue**: locally stored events awaiting server validation

---

## 14) “Done” Definition (So You Don’t Drift)

A feature is not “done” unless:
- It has UI + API + DB + posting logic
- It is permission controlled
- It produces correct ledger entries
- It is auditable (logs + immutable history)
- It can be reported (queryable summaries)

---

