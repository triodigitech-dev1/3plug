# Customer Operations: Component Requirements

## Context
- Plug: Business Operations
- Module route: operations/customer-operations

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
- Customer database management -> `submodules/customer-database-management-components.md`
- Loyalty programs -> `submodules/loyalty-programs-components.md`
- Customer segmentation -> `submodules/customer-segmentation-components.md`
- Customer credit tracking -> `submodules/customer-credit-tracking-components.md`
- Complaint logging -> `submodules/complaint-logging-components.md`
- After-sales service tracking -> `submodules/after-sales-service-tracking-components.md`
- Warranty tracking -> `submodules/warranty-tracking-components.md`
- CRM-lite interactions -> `submodules/crm-lite-interactions-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
