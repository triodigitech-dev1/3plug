# Energy & Utilities: Component Requirements

## Context
- Plug: Management
- Module route: management/energy-and-utilities

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
- Consumption forecasting -> `submodules/consumption-forecasting-components.md`
- Revenue per meter analysis -> `submodules/revenue-per-meter-analysis-components.md`
- Loss detection monitoring -> `submodules/loss-detection-monitoring-components.md`
- Infrastructure performance tracking -> `submodules/infrastructure-performance-tracking-components.md`
- Maintenance cost optimization -> `submodules/maintenance-cost-optimization-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
