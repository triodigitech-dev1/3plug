# After-sales service tracking: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Customer Operations
- Route base: operations/customer-operations/after-sales-service-tracking

## Submodule Dashboard
- Route: operations/customer-operations/after-sales-service-tracking/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/customer-operations/after-sales-service-tracking/list
- operations/customer-operations/after-sales-service-tracking/create
- operations/customer-operations/after-sales-service-tracking/detail/:id
- operations/customer-operations/after-sales-service-tracking/edit/:id
- operations/customer-operations/after-sales-service-tracking/submit/:id
- operations/customer-operations/after-sales-service-tracking/approvals
- operations/customer-operations/after-sales-service-tracking/reports
- operations/customer-operations/after-sales-service-tracking/analytics

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
