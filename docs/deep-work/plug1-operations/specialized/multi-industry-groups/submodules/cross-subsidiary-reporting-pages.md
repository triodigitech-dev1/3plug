# Cross-subsidiary reporting: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Multi-Industry Groups
- Route base: operations/multi-industry-groups/cross-subsidiary-reporting

## Submodule Dashboard
- Route: operations/multi-industry-groups/cross-subsidiary-reporting/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/multi-industry-groups/cross-subsidiary-reporting/list
- operations/multi-industry-groups/cross-subsidiary-reporting/create
- operations/multi-industry-groups/cross-subsidiary-reporting/detail/:id
- operations/multi-industry-groups/cross-subsidiary-reporting/edit/:id
- operations/multi-industry-groups/cross-subsidiary-reporting/submit/:id
- operations/multi-industry-groups/cross-subsidiary-reporting/approvals
- operations/multi-industry-groups/cross-subsidiary-reporting/reports
- operations/multi-industry-groups/cross-subsidiary-reporting/analytics

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
