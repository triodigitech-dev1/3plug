# Project margin monitoring: Detailed Page Blueprint (Expanded)

## Context
- Plug: Management
- Module: Professional Services
- Route base: management/professional-services/project-margin-monitoring

## Submodule Dashboard
- Route: management/professional-services/project-margin-monitoring/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- management/professional-services/project-margin-monitoring/list
- management/professional-services/project-margin-monitoring/create
- management/professional-services/project-margin-monitoring/detail/:id
- management/professional-services/project-margin-monitoring/edit/:id
- management/professional-services/project-margin-monitoring/submit/:id
- management/professional-services/project-margin-monitoring/approvals
- management/professional-services/project-margin-monitoring/reports
- management/professional-services/project-margin-monitoring/analytics

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
