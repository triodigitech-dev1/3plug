# Sales returns & refunds: Implementation Components

## Context
- Plug: Business Operations
- Module: Sales & Revenue Operations
- Route base: operations/sales-and-revenue-operations/sales-returns-and-refunds

## Screen-to-Component Matrix
1. Dashboard (`operations/sales-and-revenue-operations/sales-returns-and-refunds/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/sales-and-revenue-operations/sales-returns-and-refunds/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/sales-and-revenue-operations/sales-returns-and-refunds/create`, `operations/sales-and-revenue-operations/sales-returns-and-refunds/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/sales-and-revenue-operations/sales-returns-and-refunds/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/sales-and-revenue-operations/sales-returns-and-refunds/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/sales-and-revenue-operations/sales-returns-and-refunds/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/sales-and-revenue-operations/sales-returns-and-refunds/analytics`)
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
