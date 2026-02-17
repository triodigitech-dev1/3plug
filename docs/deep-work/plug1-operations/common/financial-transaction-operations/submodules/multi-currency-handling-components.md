# Multi-currency handling: Implementation Components

## Context
- Plug: Business Operations
- Module: Financial Transaction Operations
- Route base: operations/financial-transaction-operations/multi-currency-handling

## Screen-to-Component Matrix
1. Dashboard (`operations/financial-transaction-operations/multi-currency-handling/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/financial-transaction-operations/multi-currency-handling/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/financial-transaction-operations/multi-currency-handling/create`, `operations/financial-transaction-operations/multi-currency-handling/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/financial-transaction-operations/multi-currency-handling/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/financial-transaction-operations/multi-currency-handling/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/financial-transaction-operations/multi-currency-handling/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/financial-transaction-operations/multi-currency-handling/analytics`)
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
