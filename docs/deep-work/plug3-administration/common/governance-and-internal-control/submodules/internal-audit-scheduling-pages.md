# Internal audit scheduling: Detailed Page Blueprint (Expanded)

## Context
- Plug: Administration
- Module: Governance & Internal Control
- Route base: administration/governance-and-internal-control/internal-audit-scheduling

## Submodule Dashboard
- Route: administration/governance-and-internal-control/internal-audit-scheduling/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- administration/governance-and-internal-control/internal-audit-scheduling/list
- administration/governance-and-internal-control/internal-audit-scheduling/create
- administration/governance-and-internal-control/internal-audit-scheduling/detail/:id
- administration/governance-and-internal-control/internal-audit-scheduling/edit/:id
- administration/governance-and-internal-control/internal-audit-scheduling/submit/:id
- administration/governance-and-internal-control/internal-audit-scheduling/approvals
- administration/governance-and-internal-control/internal-audit-scheduling/reports
- administration/governance-and-internal-control/internal-audit-scheduling/analytics

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
