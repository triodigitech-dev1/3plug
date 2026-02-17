# Energy & Utilities: Component Requirements

## Context
- Plug: Business Operations
- Module route: operations/energy-and-utilities

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
- Utility billing cycles -> `submodules/utility-billing-cycles-components.md`
- Meter reading logging -> `submodules/meter-reading-logging-components.md`
- Service installation tracking -> `submodules/service-installation-tracking-components.md`
- Equipment maintenance tracking -> `submodules/equipment-maintenance-tracking-components.md`
- Prepaid credit management -> `submodules/prepaid-credit-management-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
