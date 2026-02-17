# Media & Creative Industries: Component Requirements

## Context
- Plug: Business Operations
- Module route: operations/media-and-creative-industries

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
- Advertising slot booking -> `submodules/advertising-slot-booking-components.md`
- Production cost tracking -> `submodules/production-cost-tracking-components.md`
- Talent contract tracking -> `submodules/talent-contract-tracking-components.md`
- Equipment rental scheduling -> `submodules/equipment-rental-scheduling-components.md`
- Content sales tracking -> `submodules/content-sales-tracking-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
