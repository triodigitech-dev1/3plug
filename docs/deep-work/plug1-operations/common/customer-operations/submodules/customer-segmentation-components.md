# Customer segmentation: Implementation Components

## Context
- Plug: Business Operations
- Module: Customer Operations
- Route base: operations/customer-operations/customer-segmentation

## Screen-to-Component Matrix
1. Dashboard (`operations/customer-operations/customer-segmentation/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/customer-operations/customer-segmentation/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/customer-operations/customer-segmentation/create`, `operations/customer-operations/customer-segmentation/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/customer-operations/customer-segmentation/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/customer-operations/customer-segmentation/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/customer-operations/customer-segmentation/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/customer-operations/customer-segmentation/analytics`)
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
