# Loyalty programs: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Customer Operations
- Route base: operations/customer-operations/loyalty-programs

## Submodule Dashboard
- Route: operations/customer-operations/loyalty-programs/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/customer-operations/loyalty-programs/list
- operations/customer-operations/loyalty-programs/create
- operations/customer-operations/loyalty-programs/detail/:id
- operations/customer-operations/loyalty-programs/edit/:id
- operations/customer-operations/loyalty-programs/submit/:id
- operations/customer-operations/loyalty-programs/approvals
- operations/customer-operations/loyalty-programs/reports
- operations/customer-operations/loyalty-programs/analytics

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
