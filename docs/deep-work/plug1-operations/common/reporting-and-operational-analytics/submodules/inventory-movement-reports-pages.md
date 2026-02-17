# Inventory movement reports: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Reporting & Operational Analytics
- Route base: operations/reporting-and-operational-analytics/inventory-movement-reports

## Submodule Dashboard
- Route: operations/reporting-and-operational-analytics/inventory-movement-reports/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/reporting-and-operational-analytics/inventory-movement-reports/list
- operations/reporting-and-operational-analytics/inventory-movement-reports/create
- operations/reporting-and-operational-analytics/inventory-movement-reports/detail/:id
- operations/reporting-and-operational-analytics/inventory-movement-reports/edit/:id
- operations/reporting-and-operational-analytics/inventory-movement-reports/submit/:id
- operations/reporting-and-operational-analytics/inventory-movement-reports/approvals
- operations/reporting-and-operational-analytics/inventory-movement-reports/reports
- operations/reporting-and-operational-analytics/inventory-movement-reports/analytics

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
