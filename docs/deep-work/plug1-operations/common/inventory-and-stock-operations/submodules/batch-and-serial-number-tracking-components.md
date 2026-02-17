# Batch & serial number tracking: Implementation Components

## Context
- Plug: Business Operations
- Module: Inventory & Stock Operations
- Route base: operations/inventory-and-stock-operations/batch-and-serial-number-tracking

## Screen-to-Component Matrix
1. Dashboard (`operations/inventory-and-stock-operations/batch-and-serial-number-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/inventory-and-stock-operations/batch-and-serial-number-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/inventory-and-stock-operations/batch-and-serial-number-tracking/create`, `operations/inventory-and-stock-operations/batch-and-serial-number-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/inventory-and-stock-operations/batch-and-serial-number-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/inventory-and-stock-operations/batch-and-serial-number-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/inventory-and-stock-operations/batch-and-serial-number-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/inventory-and-stock-operations/batch-and-serial-number-tracking/analytics`)
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
