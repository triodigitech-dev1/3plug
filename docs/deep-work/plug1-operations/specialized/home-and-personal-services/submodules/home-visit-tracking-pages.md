# Home visit tracking: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Home & Personal Services
- Route base: operations/home-and-personal-services/home-visit-tracking

## Submodule Dashboard
- Route: operations/home-and-personal-services/home-visit-tracking/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/home-and-personal-services/home-visit-tracking/list
- operations/home-and-personal-services/home-visit-tracking/create
- operations/home-and-personal-services/home-visit-tracking/detail/:id
- operations/home-and-personal-services/home-visit-tracking/edit/:id
- operations/home-and-personal-services/home-visit-tracking/submit/:id
- operations/home-and-personal-services/home-visit-tracking/approvals
- operations/home-and-personal-services/home-visit-tracking/reports
- operations/home-and-personal-services/home-visit-tracking/analytics

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
