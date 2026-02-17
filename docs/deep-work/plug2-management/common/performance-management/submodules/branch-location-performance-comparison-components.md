# Branch/location performance comparison: Implementation Components

## Context
- Plug: Management
- Module: Performance Management
- Route base: management/performance-management/branch-location-performance-comparison

## Screen-to-Component Matrix
1. Dashboard (`management/performance-management/branch-location-performance-comparison/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/performance-management/branch-location-performance-comparison/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/performance-management/branch-location-performance-comparison/create`, `management/performance-management/branch-location-performance-comparison/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/performance-management/branch-location-performance-comparison/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/performance-management/branch-location-performance-comparison/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/performance-management/branch-location-performance-comparison/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/performance-management/branch-location-performance-comparison/analytics`)
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
