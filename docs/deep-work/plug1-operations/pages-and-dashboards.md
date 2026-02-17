# Business Operations: Dashboard and Page Map (Expanded)

## Scope
Expanded explanation of dashboards and pages for Business Operations prior to data/workflow design.

## Main Dashboard
- Route: operations/dashboard
- Purpose: macro control and role-based visibility.

### Dashboard Zones
1. Status strip: active branch/session/connectivity/approvals
2. KPI board: Sales and revenue throughput; Inventory and stock health; Approval and exception load; Operational productivity
3. Action hub: start/resume/escalate/export
4. Alerts center: failures/blocked workflows/compliance warnings
5. Navigator: common modules + specialized modules + recents

## Plug-Level Shared Pages
- operations/dashboard
- operations/activity-feed
- operations/approvals
- operations/alerts
- operations/reports-hub
- operations/analytics-hub

## Page Standards
- Header with context and role-safe actions
- Filters: date, branch, owner, status
- States: loading, empty, error, offline
- Security: RBAC and auditable transitions

## API Draft
- GET /api/v1/operations/dashboard/summary
- GET /api/v1/operations/dashboard/alerts
- GET /api/v1/operations/dashboard/trends
