# Management: Dashboard and Page Map (Expanded)

## Scope
Expanded explanation of dashboards and pages for Management prior to data/workflow design.

## Main Dashboard
- Route: management/dashboard
- Purpose: macro control and role-based visibility.

### Dashboard Zones
1. Status strip: active branch/session/connectivity/approvals
2. KPI board: Revenue and margin performance; Strategic KPI attainment; Risk and compliance posture; Resource and workforce effectiveness
3. Action hub: start/resume/escalate/export
4. Alerts center: failures/blocked workflows/compliance warnings
5. Navigator: common modules + specialized modules + recents

## Plug-Level Shared Pages
- management/dashboard
- management/activity-feed
- management/approvals
- management/alerts
- management/reports-hub
- management/analytics-hub

## Page Standards
- Header with context and role-safe actions
- Filters: date, branch, owner, status
- States: loading, empty, error, offline
- Security: RBAC and auditable transitions

## API Draft
- GET /api/v1/management/dashboard/summary
- GET /api/v1/management/dashboard/alerts
- GET /api/v1/management/dashboard/trends
