# Mobile technician dispatch: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Home & Personal Services
- Route base: operations/home-and-personal-services/mobile-technician-dispatch

## Submodule Dashboard
- Route: operations/home-and-personal-services/mobile-technician-dispatch/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/home-and-personal-services/mobile-technician-dispatch/list
- operations/home-and-personal-services/mobile-technician-dispatch/create
- operations/home-and-personal-services/mobile-technician-dispatch/detail/:id
- operations/home-and-personal-services/mobile-technician-dispatch/edit/:id
- operations/home-and-personal-services/mobile-technician-dispatch/submit/:id
- operations/home-and-personal-services/mobile-technician-dispatch/approvals
- operations/home-and-personal-services/mobile-technician-dispatch/reports
- operations/home-and-personal-services/mobile-technician-dispatch/analytics

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
