# Price comparison tracking: Implementation Components

## Context
- Plug: Business Operations
- Module: Procurement & Supplier Operations
- Route base: operations/procurement-and-supplier-operations/price-comparison-tracking

## Screen-to-Component Matrix
1. Dashboard (`operations/procurement-and-supplier-operations/price-comparison-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/procurement-and-supplier-operations/price-comparison-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/procurement-and-supplier-operations/price-comparison-tracking/create`, `operations/procurement-and-supplier-operations/price-comparison-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/procurement-and-supplier-operations/price-comparison-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/procurement-and-supplier-operations/price-comparison-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/procurement-and-supplier-operations/price-comparison-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/procurement-and-supplier-operations/price-comparison-tracking/analytics`)
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
