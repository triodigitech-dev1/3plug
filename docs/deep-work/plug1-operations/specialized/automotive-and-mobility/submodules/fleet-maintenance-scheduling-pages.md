# Fleet maintenance scheduling: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Automotive & Mobility
- Route base: operations/automotive-and-mobility/fleet-maintenance-scheduling

## Submodule Dashboard
- Route: operations/automotive-and-mobility/fleet-maintenance-scheduling/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/automotive-and-mobility/fleet-maintenance-scheduling/list
- operations/automotive-and-mobility/fleet-maintenance-scheduling/create
- operations/automotive-and-mobility/fleet-maintenance-scheduling/detail/:id
- operations/automotive-and-mobility/fleet-maintenance-scheduling/edit/:id
- operations/automotive-and-mobility/fleet-maintenance-scheduling/submit/:id
- operations/automotive-and-mobility/fleet-maintenance-scheduling/approvals
- operations/automotive-and-mobility/fleet-maintenance-scheduling/reports
- operations/automotive-and-mobility/fleet-maintenance-scheduling/analytics

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
