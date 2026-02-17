# Automotive & Mobility: Component Requirements

## Context
- Plug: Management
- Module route: management/automotive-and-mobility

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
- Service revenue per vehicle analysis -> `submodules/service-revenue-per-vehicle-analysis-components.md`
- Fleet performance dashboards -> `submodules/fleet-performance-dashboards-components.md`
- Rental utilization rate monitoring -> `submodules/rental-utilization-rate-monitoring-components.md`
- Parts margin analysis -> `submodules/parts-margin-analysis-components.md`
- Maintenance cost tracking -> `submodules/maintenance-cost-tracking-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
