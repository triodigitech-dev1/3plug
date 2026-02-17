# Medical inventory control: Implementation Components

## Context
- Plug: Business Operations
- Module: Healthcare & Medical
- Route base: operations/healthcare-and-medical/medical-inventory-control

## Screen-to-Component Matrix
1. Dashboard (`operations/healthcare-and-medical/medical-inventory-control/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/healthcare-and-medical/medical-inventory-control/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/healthcare-and-medical/medical-inventory-control/create`, `operations/healthcare-and-medical/medical-inventory-control/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/healthcare-and-medical/medical-inventory-control/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/healthcare-and-medical/medical-inventory-control/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/healthcare-and-medical/medical-inventory-control/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/healthcare-and-medical/medical-inventory-control/analytics`)
- TrendChartPanel
- VarianceCards
- AnomalyFlagList

## Shared Utility Components Needed
- LoadingSkeleton
- EmptyState
- ErrorState + Retry
- OfflineSyncIndicator
- Toast and AlertBanner

## Accessibility Checklist
- Keyboard path for all actions
- Focus management after modal/drawer close
- Descriptive labels for all form controls
- Readable text and adequate spacing
