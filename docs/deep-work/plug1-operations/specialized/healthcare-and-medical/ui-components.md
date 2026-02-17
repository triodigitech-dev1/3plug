# Healthcare & Medical: Component Requirements

## Context
- Plug: Business Operations
- Module route: operations/healthcare-and-medical

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
- Patient registration (non-clinical ops) -> `submodules/patient-registration-non-clinical-ops-components.md`
- Pharmacy dispensing tracking -> `submodules/pharmacy-dispensing-tracking-components.md`
- Lab test billing -> `submodules/lab-test-billing-components.md`
- Medical inventory control -> `submodules/medical-inventory-control-components.md`
- Appointment scheduling -> `submodules/appointment-scheduling-components.md`
- Prescription tracking -> `submodules/prescription-tracking-components.md`
- Insurance claim billing workflows -> `submodules/insurance-claim-billing-workflows-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
