# Equipment usage logging: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Mining & Extractives
- Route base: operations/mining-and-extractives/equipment-usage-logging

## Submodule Dashboard
- Route: operations/mining-and-extractives/equipment-usage-logging/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/mining-and-extractives/equipment-usage-logging/list
- operations/mining-and-extractives/equipment-usage-logging/create
- operations/mining-and-extractives/equipment-usage-logging/detail/:id
- operations/mining-and-extractives/equipment-usage-logging/edit/:id
- operations/mining-and-extractives/equipment-usage-logging/submit/:id
- operations/mining-and-extractives/equipment-usage-logging/approvals
- operations/mining-and-extractives/equipment-usage-logging/reports
- operations/mining-and-extractives/equipment-usage-logging/analytics

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
