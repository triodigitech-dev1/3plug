# Scrap & waste tracking: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Manufacturing & Production
- Route base: operations/manufacturing-and-production/scrap-and-waste-tracking

## Submodule Dashboard
- Route: operations/manufacturing-and-production/scrap-and-waste-tracking/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/manufacturing-and-production/scrap-and-waste-tracking/list
- operations/manufacturing-and-production/scrap-and-waste-tracking/create
- operations/manufacturing-and-production/scrap-and-waste-tracking/detail/:id
- operations/manufacturing-and-production/scrap-and-waste-tracking/edit/:id
- operations/manufacturing-and-production/scrap-and-waste-tracking/submit/:id
- operations/manufacturing-and-production/scrap-and-waste-tracking/approvals
- operations/manufacturing-and-production/scrap-and-waste-tracking/reports
- operations/manufacturing-and-production/scrap-and-waste-tracking/analytics

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
