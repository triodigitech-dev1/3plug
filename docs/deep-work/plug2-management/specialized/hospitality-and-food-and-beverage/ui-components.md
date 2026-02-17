# Hospitality & Food & Beverage: Component Requirements

## Context
- Plug: Management
- Module route: management/hospitality-and-food-and-beverage

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
- Table turnover rate analysis -> `submodules/table-turnover-rate-analysis-components.md`
- Food cost percentage tracking -> `submodules/food-cost-percentage-tracking-components.md`
- Occupancy rate analysis (hotels) -> `submodules/occupancy-rate-analysis-hotels-components.md`
- RevPAR monitoring -> `submodules/revpar-monitoring-components.md`
- Menu performance engineering -> `submodules/menu-performance-engineering-components.md`
- Guest satisfaction scoring -> `submodules/guest-satisfaction-scoring-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
