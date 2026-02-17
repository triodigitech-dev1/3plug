# Site inspection logs: Detailed Page Blueprint (Expanded)

## Context
- Plug: Administration
- Module: Mining & Extractives
- Route base: administration/mining-and-extractives/site-inspection-logs

## Submodule Dashboard
- Route: administration/mining-and-extractives/site-inspection-logs/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- administration/mining-and-extractives/site-inspection-logs/list
- administration/mining-and-extractives/site-inspection-logs/create
- administration/mining-and-extractives/site-inspection-logs/detail/:id
- administration/mining-and-extractives/site-inspection-logs/edit/:id
- administration/mining-and-extractives/site-inspection-logs/submit/:id
- administration/mining-and-extractives/site-inspection-logs/approvals
- administration/mining-and-extractives/site-inspection-logs/reports
- administration/mining-and-extractives/site-inspection-logs/analytics

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
