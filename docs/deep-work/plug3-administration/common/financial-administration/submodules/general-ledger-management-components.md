# General ledger management: Implementation Components

## Context
- Plug: Administration
- Module: Financial Administration
- Route base: administration/financial-administration/general-ledger-management

## Screen-to-Component Matrix
1. Dashboard (`administration/financial-administration/general-ledger-management/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/financial-administration/general-ledger-management/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/financial-administration/general-ledger-management/create`, `administration/financial-administration/general-ledger-management/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/financial-administration/general-ledger-management/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/financial-administration/general-ledger-management/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/financial-administration/general-ledger-management/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/financial-administration/general-ledger-management/analytics`)
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
