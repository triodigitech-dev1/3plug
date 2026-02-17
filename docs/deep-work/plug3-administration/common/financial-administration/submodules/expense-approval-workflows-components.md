# Expense approval workflows: Implementation Components

## Context
- Plug: Administration
- Module: Financial Administration
- Route base: administration/financial-administration/expense-approval-workflows

## Screen-to-Component Matrix
1. Dashboard (`administration/financial-administration/expense-approval-workflows/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/financial-administration/expense-approval-workflows/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/financial-administration/expense-approval-workflows/create`, `administration/financial-administration/expense-approval-workflows/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/financial-administration/expense-approval-workflows/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/financial-administration/expense-approval-workflows/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/financial-administration/expense-approval-workflows/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/financial-administration/expense-approval-workflows/analytics`)
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
