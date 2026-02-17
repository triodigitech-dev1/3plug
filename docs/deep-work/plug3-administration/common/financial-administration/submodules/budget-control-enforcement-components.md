# Budget control enforcement: Implementation Components

## Context
- Plug: Administration
- Module: Financial Administration
- Route base: administration/financial-administration/budget-control-enforcement

## Screen-to-Component Matrix
1. Dashboard (`administration/financial-administration/budget-control-enforcement/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/financial-administration/budget-control-enforcement/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/financial-administration/budget-control-enforcement/create`, `administration/financial-administration/budget-control-enforcement/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/financial-administration/budget-control-enforcement/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/financial-administration/budget-control-enforcement/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/financial-administration/budget-control-enforcement/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/financial-administration/budget-control-enforcement/analytics`)
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
