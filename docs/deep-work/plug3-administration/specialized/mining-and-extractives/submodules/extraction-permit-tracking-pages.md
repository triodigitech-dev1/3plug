# Extraction permit tracking: Detailed Page Blueprint (Expanded)

## Context
- Plug: Administration
- Module: Mining & Extractives
- Route base: administration/mining-and-extractives/extraction-permit-tracking

## Submodule Dashboard
- Route: administration/mining-and-extractives/extraction-permit-tracking/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- administration/mining-and-extractives/extraction-permit-tracking/list
- administration/mining-and-extractives/extraction-permit-tracking/create
- administration/mining-and-extractives/extraction-permit-tracking/detail/:id
- administration/mining-and-extractives/extraction-permit-tracking/edit/:id
- administration/mining-and-extractives/extraction-permit-tracking/submit/:id
- administration/mining-and-extractives/extraction-permit-tracking/approvals
- administration/mining-and-extractives/extraction-permit-tracking/reports
- administration/mining-and-extractives/extraction-permit-tracking/analytics

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
