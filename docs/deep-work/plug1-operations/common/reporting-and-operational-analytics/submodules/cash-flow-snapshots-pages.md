# Cash flow snapshots: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Reporting & Operational Analytics
- Route base: operations/reporting-and-operational-analytics/cash-flow-snapshots

## Submodule Dashboard
- Route: operations/reporting-and-operational-analytics/cash-flow-snapshots/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/reporting-and-operational-analytics/cash-flow-snapshots/list
- operations/reporting-and-operational-analytics/cash-flow-snapshots/create
- operations/reporting-and-operational-analytics/cash-flow-snapshots/detail/:id
- operations/reporting-and-operational-analytics/cash-flow-snapshots/edit/:id
- operations/reporting-and-operational-analytics/cash-flow-snapshots/submit/:id
- operations/reporting-and-operational-analytics/cash-flow-snapshots/approvals
- operations/reporting-and-operational-analytics/cash-flow-snapshots/reports
- operations/reporting-and-operational-analytics/cash-flow-snapshots/analytics

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
