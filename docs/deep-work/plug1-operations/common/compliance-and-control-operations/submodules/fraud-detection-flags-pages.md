# Fraud detection flags: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Compliance & Control Operations
- Route base: operations/compliance-and-control-operations/fraud-detection-flags

## Submodule Dashboard
- Route: operations/compliance-and-control-operations/fraud-detection-flags/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/compliance-and-control-operations/fraud-detection-flags/list
- operations/compliance-and-control-operations/fraud-detection-flags/create
- operations/compliance-and-control-operations/fraud-detection-flags/detail/:id
- operations/compliance-and-control-operations/fraud-detection-flags/edit/:id
- operations/compliance-and-control-operations/fraud-detection-flags/submit/:id
- operations/compliance-and-control-operations/fraud-detection-flags/approvals
- operations/compliance-and-control-operations/fraud-detection-flags/reports
- operations/compliance-and-control-operations/fraud-detection-flags/analytics

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
