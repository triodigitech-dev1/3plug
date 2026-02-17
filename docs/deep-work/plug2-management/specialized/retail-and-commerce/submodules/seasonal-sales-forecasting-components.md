# Seasonal sales forecasting: Implementation Components

## Context
- Plug: Management
- Module: Retail & Commerce
- Route base: management/retail-and-commerce/seasonal-sales-forecasting

## Screen-to-Component Matrix
1. Dashboard (`management/retail-and-commerce/seasonal-sales-forecasting/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/retail-and-commerce/seasonal-sales-forecasting/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/retail-and-commerce/seasonal-sales-forecasting/create`, `management/retail-and-commerce/seasonal-sales-forecasting/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/retail-and-commerce/seasonal-sales-forecasting/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/retail-and-commerce/seasonal-sales-forecasting/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/retail-and-commerce/seasonal-sales-forecasting/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/retail-and-commerce/seasonal-sales-forecasting/analytics`)
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
