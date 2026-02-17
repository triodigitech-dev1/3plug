# Geographic performance mapping: Implementation Components

## Context
- Plug: Management
- Module: Customer & Market Management
- Route base: management/customer-and-market-management/geographic-performance-mapping

## Screen-to-Component Matrix
1. Dashboard (`management/customer-and-market-management/geographic-performance-mapping/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/customer-and-market-management/geographic-performance-mapping/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/customer-and-market-management/geographic-performance-mapping/create`, `management/customer-and-market-management/geographic-performance-mapping/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/customer-and-market-management/geographic-performance-mapping/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/customer-and-market-management/geographic-performance-mapping/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/customer-and-market-management/geographic-performance-mapping/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/customer-and-market-management/geographic-performance-mapping/analytics`)
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
