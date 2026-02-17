# Supplier invoice capture: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Procurement & Supplier Operations
- Route base: operations/procurement-and-supplier-operations/supplier-invoice-capture

## Submodule Dashboard
- Route: operations/procurement-and-supplier-operations/supplier-invoice-capture/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/procurement-and-supplier-operations/supplier-invoice-capture/list
- operations/procurement-and-supplier-operations/supplier-invoice-capture/create
- operations/procurement-and-supplier-operations/supplier-invoice-capture/detail/:id
- operations/procurement-and-supplier-operations/supplier-invoice-capture/edit/:id
- operations/procurement-and-supplier-operations/supplier-invoice-capture/submit/:id
- operations/procurement-and-supplier-operations/supplier-invoice-capture/approvals
- operations/procurement-and-supplier-operations/supplier-invoice-capture/reports
- operations/procurement-and-supplier-operations/supplier-invoice-capture/analytics

## Reporting Explained
- Daily operational summary
- Branch/user performance
- Exception and audit report

## Analytics Explained
- Throughput and cycle-time trends
- Error/failure trend
- Forecast and anomaly markers

## UX + Accessibility
- Clear hierarchy and status cues
- Large action targets
- Keyboard-friendly paths

## Security + Audit
- RBAC on all writes
- Approval for sensitive transitions
- Immutable audit records
