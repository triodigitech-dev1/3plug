# Physical stock reconciliation: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Inventory & Stock Operations
- Route base: operations/inventory-and-stock-operations/physical-stock-reconciliation

## Submodule Dashboard
- Route: operations/inventory-and-stock-operations/physical-stock-reconciliation/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/inventory-and-stock-operations/physical-stock-reconciliation/list
- operations/inventory-and-stock-operations/physical-stock-reconciliation/create
- operations/inventory-and-stock-operations/physical-stock-reconciliation/detail/:id
- operations/inventory-and-stock-operations/physical-stock-reconciliation/edit/:id
- operations/inventory-and-stock-operations/physical-stock-reconciliation/submit/:id
- operations/inventory-and-stock-operations/physical-stock-reconciliation/approvals
- operations/inventory-and-stock-operations/physical-stock-reconciliation/reports
- operations/inventory-and-stock-operations/physical-stock-reconciliation/analytics

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
