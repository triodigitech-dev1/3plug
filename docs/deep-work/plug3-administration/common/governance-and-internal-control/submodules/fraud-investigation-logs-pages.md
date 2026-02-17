# Fraud investigation logs: Detailed Page Blueprint (Expanded)

## Context
- Plug: Administration
- Module: Governance & Internal Control
- Route base: administration/governance-and-internal-control/fraud-investigation-logs

## Submodule Dashboard
- Route: administration/governance-and-internal-control/fraud-investigation-logs/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- administration/governance-and-internal-control/fraud-investigation-logs/list
- administration/governance-and-internal-control/fraud-investigation-logs/create
- administration/governance-and-internal-control/fraud-investigation-logs/detail/:id
- administration/governance-and-internal-control/fraud-investigation-logs/edit/:id
- administration/governance-and-internal-control/fraud-investigation-logs/submit/:id
- administration/governance-and-internal-control/fraud-investigation-logs/approvals
- administration/governance-and-internal-control/fraud-investigation-logs/reports
- administration/governance-and-internal-control/fraud-investigation-logs/analytics

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
