# Education & Training: Component Requirements

## Context
- Plug: Business Operations
- Module route: operations/education-and-training

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
- Student enrollment billing -> `submodules/student-enrollment-billing-components.md`
- Fee collection management -> `submodules/fee-collection-management-components.md`
- Course package sales -> `submodules/course-package-sales-components.md`
- Attendance tracking -> `submodules/attendance-tracking-components.md`
- Uniform & bookstore sales -> `submodules/uniform-and-bookstore-sales-components.md`
- Hostel billing operations -> `submodules/hostel-billing-operations-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
