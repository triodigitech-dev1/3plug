# Administration: Dashboard and Page Map (Expanded)

## Scope
Expanded explanation of dashboards and pages for Administration prior to data/workflow design.

## Main Dashboard
- Route: administration/dashboard
- Purpose: macro control and role-based visibility.

### Dashboard Zones
1. Status strip: active branch/session/connectivity/approvals
2. KPI board: Compliance and governance status; Financial administration integrity; Approval backlog and resolution pace; Records and control health
3. Action hub: start/resume/escalate/export
4. Alerts center: failures/blocked workflows/compliance warnings
5. Navigator: common modules + specialized modules + recents

## Plug-Level Shared Pages
- administration/dashboard
- administration/activity-feed
- administration/approvals
- administration/alerts
- administration/reports-hub
- administration/analytics-hub

## Page Standards
- Header with context and role-safe actions
- Filters: date, branch, owner, status
- States: loading, empty, error, offline
- Security: RBAC and auditable transitions

## API Draft
- GET /api/v1/administration/dashboard/summary
- GET /api/v1/administration/dashboard/alerts
- GET /api/v1/administration/dashboard/trends
