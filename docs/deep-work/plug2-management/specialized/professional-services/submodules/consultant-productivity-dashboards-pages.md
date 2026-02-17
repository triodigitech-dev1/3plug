# Consultant productivity dashboards: Detailed Page Blueprint (Expanded)

## Context
- Plug: Management
- Module: Professional Services
- Route base: management/professional-services/consultant-productivity-dashboards

## Submodule Dashboard
- Route: management/professional-services/consultant-productivity-dashboards/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- management/professional-services/consultant-productivity-dashboards/list
- management/professional-services/consultant-productivity-dashboards/create
- management/professional-services/consultant-productivity-dashboards/detail/:id
- management/professional-services/consultant-productivity-dashboards/edit/:id
- management/professional-services/consultant-productivity-dashboards/submit/:id
- management/professional-services/consultant-productivity-dashboards/approvals
- management/professional-services/consultant-productivity-dashboards/reports
- management/professional-services/consultant-productivity-dashboards/analytics

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
