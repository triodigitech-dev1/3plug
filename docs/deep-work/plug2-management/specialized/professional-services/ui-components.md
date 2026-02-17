# Professional Services: Component Requirements

## Context
- Plug: Management
- Module route: management/professional-services

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
- Billable hours efficiency -> `submodules/billable-hours-efficiency-components.md`
- Client profitability analysis -> `submodules/client-profitability-analysis-components.md`
- Retainer stability analysis -> `submodules/retainer-stability-analysis-components.md`
- Project margin monitoring -> `submodules/project-margin-monitoring-components.md`
- Consultant productivity dashboards -> `submodules/consultant-productivity-dashboards-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
