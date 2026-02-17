# Construction & Real Estate: Component Requirements

## Context
- Plug: Business Operations
- Module route: operations/construction-and-real-estate

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
- Project cost tracking -> `submodules/project-cost-tracking-components.md`
- Site material tracking -> `submodules/site-material-tracking-components.md`
- Equipment allocation -> `submodules/equipment-allocation-components.md`
- Contractor billing -> `submodules/contractor-billing-components.md`
- Property rent collection -> `submodules/property-rent-collection-components.md`
- Lease tracking -> `submodules/lease-tracking-components.md`
- Facility maintenance scheduling -> `submodules/facility-maintenance-scheduling-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
