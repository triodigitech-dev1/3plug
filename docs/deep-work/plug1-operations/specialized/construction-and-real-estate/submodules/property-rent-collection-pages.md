# Property rent collection: Detailed Page Blueprint (Expanded)

## Context
- Plug: Business Operations
- Module: Construction & Real Estate
- Route base: operations/construction-and-real-estate/property-rent-collection

## Submodule Dashboard
- Route: operations/construction-and-real-estate/property-rent-collection/dashboard
- Purpose: track health, workload, and control quality.

### Dashboard Sections
- Snapshot KPIs (processed/pending/exceptions/SLA)
- Action panel (new/update/submit/approve)
- Risk panel (validation failures/escalations/retries)

## Page Set
- operations/construction-and-real-estate/property-rent-collection/list
- operations/construction-and-real-estate/property-rent-collection/create
- operations/construction-and-real-estate/property-rent-collection/detail/:id
- operations/construction-and-real-estate/property-rent-collection/edit/:id
- operations/construction-and-real-estate/property-rent-collection/submit/:id
- operations/construction-and-real-estate/property-rent-collection/approvals
- operations/construction-and-real-estate/property-rent-collection/reports
- operations/construction-and-real-estate/property-rent-collection/analytics

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
