# Mining & Extractives: Component Requirements

## Context
- Plug: Management
- Module route: management/mining-and-extractives

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
- Output yield monitoring -> `submodules/output-yield-monitoring-components.md`
- Equipment efficiency tracking -> `submodules/equipment-efficiency-tracking-components.md`
- Extraction cost analysis -> `submodules/extraction-cost-analysis-components.md`
- Safety performance metrics -> `submodules/safety-performance-metrics-components.md`
- Contractor performance analysis -> `submodules/contractor-performance-analysis-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
