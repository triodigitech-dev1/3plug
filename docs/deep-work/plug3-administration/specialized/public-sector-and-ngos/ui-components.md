# Public Sector & NGOs: Component Requirements

## Context
- Plug: Administration
- Module route: administration/public-sector-and-ngos

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
- Grant agreement documentation -> `submodules/grant-agreement-documentation-components.md`
- Donor compliance reporting -> `submodules/donor-compliance-reporting-components.md`
- Impact reporting records -> `submodules/impact-reporting-records-components.md`
- Procurement transparency documentation -> `submodules/procurement-transparency-documentation-components.md`
- Public audit compliance records -> `submodules/public-audit-compliance-records-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
