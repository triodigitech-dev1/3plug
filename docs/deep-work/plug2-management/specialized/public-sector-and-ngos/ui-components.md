# Public Sector & NGOs: Component Requirements

## Context
- Plug: Management
- Module route: management/public-sector-and-ngos

## Required Module Components
1. Dashboard composition
- ModuleKpiBoard
- ModuleActionCluster
- ModuleExceptionsPanel
- ModuleActivityFeed

2. Workspace composition
- ModuleFilterToolbar
- ModuleDataTable
- ModuleDetailPanel
- ModuleStateBadgeSet

3. Approval and control composition
- ApprovalQueueTable
- ApprovalDecisionDialog
- EscalationPathWidget

4. Reporting and analytics composition
- ModuleReportHub
- ModuleAnalyticsBoard
- ExportActionsPanel

## Submodule-to-Component Mapping
- Program impact performance analysis -> `submodules/program-impact-performance-analysis-components.md`
- Budget utilization monitoring -> `submodules/budget-utilization-monitoring-components.md`
- Grant effectiveness tracking -> `submodules/grant-effectiveness-tracking-components.md`
- Service delivery performance dashboards -> `submodules/service-delivery-performance-dashboards-components.md`
- Public accountability reporting -> `submodules/public-accountability-reporting-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
