# Loan portfolio performance tracking: Detailed Page Blueprint (Expanded)

## Context
- Plug: Management
- Module: Finance & Membership Organizations
- Route base: management/finance-and-membership-organizations/loan-portfolio-performance-tracking

## Submodule Dashboard
- Route: management/finance-and-membership-organizations/loan-portfolio-performance-tracking/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- management/finance-and-membership-organizations/loan-portfolio-performance-tracking/list
- management/finance-and-membership-organizations/loan-portfolio-performance-tracking/create
- management/finance-and-membership-organizations/loan-portfolio-performance-tracking/detail/:id
- management/finance-and-membership-organizations/loan-portfolio-performance-tracking/edit/:id
- management/finance-and-membership-organizations/loan-portfolio-performance-tracking/submit/:id
- management/finance-and-membership-organizations/loan-portfolio-performance-tracking/approvals
- management/finance-and-membership-organizations/loan-portfolio-performance-tracking/reports
- management/finance-and-membership-organizations/loan-portfolio-performance-tracking/analytics

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
