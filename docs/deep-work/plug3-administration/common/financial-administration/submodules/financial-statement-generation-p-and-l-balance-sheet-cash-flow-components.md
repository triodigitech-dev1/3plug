# Financial statement generation (P&L, Balance Sheet, Cash Flow): Implementation Components

## Context
- Plug: Administration
- Module: Financial Administration
- Route base: administration/financial-administration/financial-statement-generation-p-and-l-balance-sheet-cash-flow

## Screen-to-Component Matrix
1. Dashboard (`administration/financial-administration/financial-statement-generation-p-and-l-balance-sheet-cash-flow/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/financial-administration/financial-statement-generation-p-and-l-balance-sheet-cash-flow/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/financial-administration/financial-statement-generation-p-and-l-balance-sheet-cash-flow/create`, `administration/financial-administration/financial-statement-generation-p-and-l-balance-sheet-cash-flow/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/financial-administration/financial-statement-generation-p-and-l-balance-sheet-cash-flow/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/financial-administration/financial-statement-generation-p-and-l-balance-sheet-cash-flow/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/financial-administration/financial-statement-generation-p-and-l-balance-sheet-cash-flow/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/financial-administration/financial-statement-generation-p-and-l-balance-sheet-cash-flow/analytics`)
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
