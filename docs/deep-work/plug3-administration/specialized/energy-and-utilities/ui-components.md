# Energy & Utilities: Component Requirements

## Context
- Plug: Administration
- Module route: administration/energy-and-utilities

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
- Utility regulatory compliance -> `submodules/utility-regulatory-compliance-components.md`
- Meter certification records -> `submodules/meter-certification-records-components.md`
- Environmental reporting -> `submodules/environmental-reporting-components.md`
- Energy licensing documentation -> `submodules/energy-licensing-documentation-components.md`
- Infrastructure inspection logs -> `submodules/infrastructure-inspection-logs-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
