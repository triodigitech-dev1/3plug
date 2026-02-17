# Automotive & Mobility: Component Requirements

## Context
- Plug: Business Operations
- Module route: operations/automotive-and-mobility

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
- Service job card management -> `submodules/service-job-card-management-components.md`
- Spare parts tracking -> `submodules/spare-parts-tracking-components.md`
- Vehicle service history -> `submodules/vehicle-service-history-components.md`
- Fleet maintenance scheduling -> `submodules/fleet-maintenance-scheduling-components.md`
- Rental booking management -> `submodules/rental-booking-management-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
