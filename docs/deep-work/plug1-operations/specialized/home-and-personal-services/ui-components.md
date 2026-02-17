# Home & Personal Services: Component Requirements

## Context
- Plug: Business Operations
- Module route: operations/home-and-personal-services

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
- Service appointment scheduling -> `submodules/service-appointment-scheduling-components.md`
- Mobile technician dispatch -> `submodules/mobile-technician-dispatch-components.md`
- Service package billing -> `submodules/service-package-billing-components.md`
- Home visit tracking -> `submodules/home-visit-tracking-components.md`
- Subscription-based service billing -> `submodules/subscription-based-service-billing-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
