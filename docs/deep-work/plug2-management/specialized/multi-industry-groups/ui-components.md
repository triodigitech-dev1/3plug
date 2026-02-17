# Multi-Industry Groups: Component Requirements

## Context
- Plug: Management
- Module route: management/multi-industry-groups

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
- Cross-subsidiary performance comparison -> `submodules/cross-subsidiary-performance-comparison-components.md`
- Intercompany margin analysis -> `submodules/intercompany-margin-analysis-components.md`
- Consolidated profitability tracking -> `submodules/consolidated-profitability-tracking-components.md`
- Shared services efficiency analysis -> `submodules/shared-services-efficiency-analysis-components.md`
- Group-level strategic dashboards -> `submodules/group-level-strategic-dashboards-components.md`
- Converts operational data into strategic intelligence -> `submodules/converts-operational-data-into-strategic-intelligence-components.md`
- Enables executive decision-making -> `submodules/enables-executive-decision-making-components.md`
- Provides performance transparency -> `submodules/provides-performance-transparency-components.md`
- Supports risk-aware growth -> `submodules/supports-risk-aware-growth-components.md`
- Integrates seamlessly with Operations and Administration plugs -> `submodules/integrates-seamlessly-with-operations-and-administration-plugs-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
