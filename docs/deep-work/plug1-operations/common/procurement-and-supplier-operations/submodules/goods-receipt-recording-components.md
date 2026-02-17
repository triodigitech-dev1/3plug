# Goods receipt recording: Implementation Components

## Context
- Plug: Business Operations
- Module: Procurement & Supplier Operations
- Route base: operations/procurement-and-supplier-operations/goods-receipt-recording

## Screen-to-Component Matrix
1. Dashboard (`operations/procurement-and-supplier-operations/goods-receipt-recording/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/procurement-and-supplier-operations/goods-receipt-recording/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/procurement-and-supplier-operations/goods-receipt-recording/create`, `operations/procurement-and-supplier-operations/goods-receipt-recording/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/procurement-and-supplier-operations/goods-receipt-recording/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/procurement-and-supplier-operations/goods-receipt-recording/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/procurement-and-supplier-operations/goods-receipt-recording/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/procurement-and-supplier-operations/goods-receipt-recording/analytics`)
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
