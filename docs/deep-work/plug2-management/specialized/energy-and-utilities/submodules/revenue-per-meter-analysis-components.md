# Revenue per meter analysis: Implementation Components

## Context
- Plug: Management
- Module: Energy & Utilities
- Route base: management/energy-and-utilities/revenue-per-meter-analysis

## Screen-to-Component Matrix
1. Dashboard (`management/energy-and-utilities/revenue-per-meter-analysis/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/energy-and-utilities/revenue-per-meter-analysis/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/energy-and-utilities/revenue-per-meter-analysis/create`, `management/energy-and-utilities/revenue-per-meter-analysis/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/energy-and-utilities/revenue-per-meter-analysis/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/energy-and-utilities/revenue-per-meter-analysis/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/energy-and-utilities/revenue-per-meter-analysis/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/energy-and-utilities/revenue-per-meter-analysis/analytics`)
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
