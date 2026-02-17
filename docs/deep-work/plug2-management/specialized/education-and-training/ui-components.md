# Education & Training: Component Requirements

## Context
- Plug: Management
- Module route: management/education-and-training

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
- Enrollment trend forecasting -> `submodules/enrollment-trend-forecasting-components.md`
- Fee collection rate analysis -> `submodules/fee-collection-rate-analysis-components.md`
- Course profitability evaluation -> `submodules/course-profitability-evaluation-components.md`
- Attendance performance tracking -> `submodules/attendance-performance-tracking-components.md`
- Program expansion feasibility analysis -> `submodules/program-expansion-feasibility-analysis-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
