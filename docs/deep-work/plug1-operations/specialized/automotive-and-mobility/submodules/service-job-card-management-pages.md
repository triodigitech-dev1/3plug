# Service job card management: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Automotive & Mobility
- Route base: operations/automotive-and-mobility/service-job-card-management

## Submodule Dashboard
- Route: operations/automotive-and-mobility/service-job-card-management/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/automotive-and-mobility/service-job-card-management/list
- operations/automotive-and-mobility/service-job-card-management/create
- operations/automotive-and-mobility/service-job-card-management/detail/:id
- operations/automotive-and-mobility/service-job-card-management/edit/:id
- operations/automotive-and-mobility/service-job-card-management/submit/:id
- operations/automotive-and-mobility/service-job-card-management/approvals
- operations/automotive-and-mobility/service-job-card-management/reports
- operations/automotive-and-mobility/service-job-card-management/analytics

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
