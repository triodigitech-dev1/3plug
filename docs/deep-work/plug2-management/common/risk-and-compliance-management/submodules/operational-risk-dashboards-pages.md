# Operational risk dashboards: Detailed Page Blueprint (Expanded)

## Context
- Plug: Management
- Module: Risk & Compliance Management
- Route base: management/risk-and-compliance-management/operational-risk-dashboards

## Submodule Dashboard
- Route: management/risk-and-compliance-management/operational-risk-dashboards/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- management/risk-and-compliance-management/operational-risk-dashboards/list
- management/risk-and-compliance-management/operational-risk-dashboards/create
- management/risk-and-compliance-management/operational-risk-dashboards/detail/:id
- management/risk-and-compliance-management/operational-risk-dashboards/edit/:id
- management/risk-and-compliance-management/operational-risk-dashboards/submit/:id
- management/risk-and-compliance-management/operational-risk-dashboards/approvals
- management/risk-and-compliance-management/operational-risk-dashboards/reports
- management/risk-and-compliance-management/operational-risk-dashboards/analytics

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
