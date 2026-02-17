# Public Sector & NGOs: Component Requirements

## Context
- Plug: Business Operations
- Module route: operations/public-sector-and-ngos

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
- Grant tracking -> `submodules/grant-tracking-components.md`
- Donor fund tracking -> `submodules/donor-fund-tracking-components.md`
- Program expenditure tracking -> `submodules/program-expenditure-tracking-components.md`
- Community service billing -> `submodules/community-service-billing-components.md`
- Licensing fee collection -> `submodules/licensing-fee-collection-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
