# Benchmark comparison (internal & external): Implementation Components

## Context
- Plug: Management
- Module: Performance Management
- Route base: management/performance-management/benchmark-comparison-internal-and-external

## Screen-to-Component Matrix
1. Dashboard (`management/performance-management/benchmark-comparison-internal-and-external/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/performance-management/benchmark-comparison-internal-and-external/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/performance-management/benchmark-comparison-internal-and-external/create`, `management/performance-management/benchmark-comparison-internal-and-external/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/performance-management/benchmark-comparison-internal-and-external/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/performance-management/benchmark-comparison-internal-and-external/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/performance-management/benchmark-comparison-internal-and-external/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/performance-management/benchmark-comparison-internal-and-external/analytics`)
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
