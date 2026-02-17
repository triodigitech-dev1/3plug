# Mining & Extractives: Component Requirements

## Context
- Plug: Business Operations
- Module route: operations/mining-and-extractives

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
- Equipment usage logging -> `submodules/equipment-usage-logging-components.md`
- Site inventory tracking -> `submodules/site-inventory-tracking-components.md`
- Output volume tracking -> `submodules/output-volume-tracking-components.md`
- Safety compliance logging -> `submodules/safety-compliance-logging-components.md`
- Contractor payment tracking -> `submodules/contractor-payment-tracking-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
