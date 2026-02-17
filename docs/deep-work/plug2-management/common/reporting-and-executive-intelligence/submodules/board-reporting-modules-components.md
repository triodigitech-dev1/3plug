# Board reporting modules: Implementation Components

## Context
- Plug: Management
- Module: Reporting & Executive Intelligence
- Route base: management/reporting-and-executive-intelligence/board-reporting-modules

## Screen-to-Component Matrix
1. Dashboard (`management/reporting-and-executive-intelligence/board-reporting-modules/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/reporting-and-executive-intelligence/board-reporting-modules/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/reporting-and-executive-intelligence/board-reporting-modules/create`, `management/reporting-and-executive-intelligence/board-reporting-modules/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/reporting-and-executive-intelligence/board-reporting-modules/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/reporting-and-executive-intelligence/board-reporting-modules/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/reporting-and-executive-intelligence/board-reporting-modules/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/reporting-and-executive-intelligence/board-reporting-modules/analytics`)
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
