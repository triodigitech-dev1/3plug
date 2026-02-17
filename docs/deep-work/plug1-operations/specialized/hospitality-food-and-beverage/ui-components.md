# Hospitality, Food & Beverage: Component Requirements

## Context
- Plug: Business Operations
- Module route: operations/hospitality-food-and-beverage

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
- Table management -> `submodules/table-management-components.md`
- Kitchen order ticket (KOT) system -> `submodules/kitchen-order-ticket-kot-system-components.md`
- Recipe & ingredient tracking -> `submodules/recipe-and-ingredient-tracking-components.md`
- Food cost analysis -> `submodules/food-cost-analysis-components.md`
- Reservation management -> `submodules/reservation-management-components.md`
- Room booking (for hotels) -> `submodules/room-booking-for-hotels-components.md`
- Housekeeping task tracking -> `submodules/housekeeping-task-tracking-components.md`
- Bar tab management -> `submodules/bar-tab-management-components.md`
- Event catering workflow management -> `submodules/event-catering-workflow-management-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
