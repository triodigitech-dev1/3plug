# Finance & Membership Organizations: Component Requirements

## Context
- Plug: Management
- Module route: management/finance-and-membership-organizations

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
- Loan portfolio performance tracking -> `submodules/loan-portfolio-performance-tracking-components.md`
- Contribution growth analysis -> `submodules/contribution-growth-analysis-components.md`
- Default rate monitoring -> `submodules/default-rate-monitoring-components.md`
- Member retention tracking -> `submodules/member-retention-tracking-components.md`
- Dividend sustainability analysis -> `submodules/dividend-sustainability-analysis-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
