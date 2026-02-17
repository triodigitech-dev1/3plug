# Professional Services: Component Requirements

## Context
- Plug: Business Operations
- Module route: operations/professional-services

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
- Project billing -> `submodules/project-billing-components.md`
- Retainer management -> `submodules/retainer-management-components.md`
- Timesheet tracking -> `submodules/timesheet-tracking-components.md`
- Service contract management -> `submodules/service-contract-management-components.md`
- Milestone invoicing -> `submodules/milestone-invoicing-components.md`
- Client billing automation -> `submodules/client-billing-automation-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
