# Construction & Real Estate: Component Requirements

## Context
- Plug: Management
- Module route: management/construction-and-real-estate

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
- Project profitability analysis -> `submodules/project-profitability-analysis-components.md`
- Cost overrun tracking -> `submodules/cost-overrun-tracking-components.md`
- Property occupancy analysis -> `submodules/property-occupancy-analysis-components.md`
- Lease yield monitoring -> `submodules/lease-yield-monitoring-components.md`
- Asset utilization analysis -> `submodules/asset-utilization-analysis-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
