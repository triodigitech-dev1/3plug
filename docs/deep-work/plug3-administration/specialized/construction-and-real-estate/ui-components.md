# Construction & Real Estate: Component Requirements

## Context
- Plug: Administration
- Module route: administration/construction-and-real-estate

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
- Building permits documentation -> `submodules/building-permits-documentation-components.md`
- Contractor license verification -> `submodules/contractor-license-verification-components.md`
- Site compliance reports -> `submodules/site-compliance-reports-components.md`
- Safety compliance documentation -> `submodules/safety-compliance-documentation-components.md`
- Property title documentation -> `submodules/property-title-documentation-components.md`
- Lease & tenancy contract management -> `submodules/lease-and-tenancy-contract-management-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
