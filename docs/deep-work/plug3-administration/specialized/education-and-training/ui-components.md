# Education & Training: Component Requirements

## Context
- Plug: Administration
- Module route: administration/education-and-training

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
- Accreditation documentation -> `submodules/accreditation-documentation-components.md`
- Curriculum approval records -> `submodules/curriculum-approval-records-components.md`
- Staff certification tracking -> `submodules/staff-certification-tracking-components.md`
- Student records protection compliance -> `submodules/student-records-protection-compliance-components.md`
- Education authority reporting documentation -> `submodules/education-authority-reporting-documentation-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
