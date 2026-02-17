# Home & Personal Services: Component Requirements

## Context
- Plug: Management
- Module route: management/home-and-personal-services

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
- Technician productivity tracking -> `submodules/technician-productivity-tracking-components.md`
- Service profitability analysis -> `submodules/service-profitability-analysis-components.md`
- Repeat customer rate monitoring -> `submodules/repeat-customer-rate-monitoring-components.md`
- Territory performance analysis -> `submodules/territory-performance-analysis-components.md`
- Service subscription retention tracking -> `submodules/service-subscription-retention-tracking-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
