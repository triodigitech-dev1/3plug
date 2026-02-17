# Multi-currency handling: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Financial Transaction Operations
- Route base: operations/financial-transaction-operations/multi-currency-handling

## Submodule Dashboard
- Route: operations/financial-transaction-operations/multi-currency-handling/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/financial-transaction-operations/multi-currency-handling/list
- operations/financial-transaction-operations/multi-currency-handling/create
- operations/financial-transaction-operations/multi-currency-handling/detail/:id
- operations/financial-transaction-operations/multi-currency-handling/edit/:id
- operations/financial-transaction-operations/multi-currency-handling/submit/:id
- operations/financial-transaction-operations/multi-currency-handling/approvals
- operations/financial-transaction-operations/multi-currency-handling/reports
- operations/financial-transaction-operations/multi-currency-handling/analytics

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
