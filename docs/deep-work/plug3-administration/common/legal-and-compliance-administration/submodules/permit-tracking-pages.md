# Permit tracking: Detailed Page Blueprint (Expanded)

## Context
- Plug: Administration
- Module: Legal & Compliance Administration
- Route base: administration/legal-and-compliance-administration/permit-tracking

## Submodule Dashboard
- Route: administration/legal-and-compliance-administration/permit-tracking/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- administration/legal-and-compliance-administration/permit-tracking/list
- administration/legal-and-compliance-administration/permit-tracking/create
- administration/legal-and-compliance-administration/permit-tracking/detail/:id
- administration/legal-and-compliance-administration/permit-tracking/edit/:id
- administration/legal-and-compliance-administration/permit-tracking/submit/:id
- administration/legal-and-compliance-administration/permit-tracking/approvals
- administration/legal-and-compliance-administration/permit-tracking/reports
- administration/legal-and-compliance-administration/permit-tracking/analytics

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
