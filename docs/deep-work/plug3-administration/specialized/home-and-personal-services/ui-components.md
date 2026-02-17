# Home & Personal Services: Component Requirements

## Context
- Plug: Administration
- Module route: administration/home-and-personal-services

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
- Service provider licensing -> `submodules/service-provider-licensing-components.md`
- Insurance documentation -> `submodules/insurance-documentation-components.md`
- Customer agreement storage -> `submodules/customer-agreement-storage-components.md`
- Mobile service compliance documentation -> `submodules/mobile-service-compliance-documentation-components.md`
- Safety compliance records -> `submodules/safety-compliance-records-components.md`

## Component Acceptance Criteria
- Supports loading/empty/error/offline states
- Emits auditable action events
- Enforces role-based action visibility
- Works in desktop and tablet layouts
