# Healthcare & Medical: Component Requirements

## Context
- Plug: Management
- Module route: management/healthcare-and-medical

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
- Patient volume forecasting -> `submodules/patient-volume-forecasting-components.md`
- Service profitability analysis -> `submodules/service-profitability-analysis-components.md`
- Pharmacy margin analysis -> `submodules/pharmacy-margin-analysis-components.md`
- Insurance reimbursement performance -> `submodules/insurance-reimbursement-performance-components.md`
- Resource capacity planning -> `submodules/resource-capacity-planning-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
