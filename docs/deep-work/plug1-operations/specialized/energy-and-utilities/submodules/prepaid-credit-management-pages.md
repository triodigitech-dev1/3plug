# Prepaid credit management: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Energy & Utilities
- Route base: operations/energy-and-utilities/prepaid-credit-management

## Submodule Dashboard
- Route: operations/energy-and-utilities/prepaid-credit-management/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/energy-and-utilities/prepaid-credit-management/list
- operations/energy-and-utilities/prepaid-credit-management/create
- operations/energy-and-utilities/prepaid-credit-management/detail/:id
- operations/energy-and-utilities/prepaid-credit-management/edit/:id
- operations/energy-and-utilities/prepaid-credit-management/submit/:id
- operations/energy-and-utilities/prepaid-credit-management/approvals
- operations/energy-and-utilities/prepaid-credit-management/reports
- operations/energy-and-utilities/prepaid-credit-management/analytics

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
