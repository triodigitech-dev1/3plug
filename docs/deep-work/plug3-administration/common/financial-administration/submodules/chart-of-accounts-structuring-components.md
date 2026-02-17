# Chart of accounts structuring: Implementation Components

## Context
- Plug: Administration
- Module: Financial Administration
- Route base: administration/financial-administration/chart-of-accounts-structuring

## Screen-to-Component Matrix
1. Dashboard (`administration/financial-administration/chart-of-accounts-structuring/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/financial-administration/chart-of-accounts-structuring/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/financial-administration/chart-of-accounts-structuring/create`, `administration/financial-administration/chart-of-accounts-structuring/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/financial-administration/chart-of-accounts-structuring/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/financial-administration/chart-of-accounts-structuring/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/financial-administration/chart-of-accounts-structuring/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/financial-administration/chart-of-accounts-structuring/analytics`)
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
