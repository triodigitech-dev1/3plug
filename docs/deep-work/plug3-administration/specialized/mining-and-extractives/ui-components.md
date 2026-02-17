# Mining & Extractives: Component Requirements

## Context
- Plug: Administration
- Module route: administration/mining-and-extractives

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
- Mining license documentation -> `submodules/mining-license-documentation-components.md`
- Environmental impact assessment records -> `submodules/environmental-impact-assessment-records-components.md`
- Safety compliance documentation -> `submodules/safety-compliance-documentation-components.md`
- Extraction permit tracking -> `submodules/extraction-permit-tracking-components.md`
- Site inspection logs -> `submodules/site-inspection-logs-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
