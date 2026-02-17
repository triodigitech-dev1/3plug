# Market demand forecasting: Implementation Components

## Context
- Plug: Management
- Module: Customer & Market Management
- Route base: management/customer-and-market-management/market-demand-forecasting

## Screen-to-Component Matrix
1. Dashboard (`management/customer-and-market-management/market-demand-forecasting/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/customer-and-market-management/market-demand-forecasting/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/customer-and-market-management/market-demand-forecasting/create`, `management/customer-and-market-management/market-demand-forecasting/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/customer-and-market-management/market-demand-forecasting/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/customer-and-market-management/market-demand-forecasting/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/customer-and-market-management/market-demand-forecasting/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/customer-and-market-management/market-demand-forecasting/analytics`)
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
