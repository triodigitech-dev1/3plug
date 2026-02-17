# Safety performance metrics: Implementation Components

## Context
- Plug: Management
- Module: Mining & Extractives
- Route base: management/mining-and-extractives/safety-performance-metrics

## Screen-to-Component Matrix
1. Dashboard (`management/mining-and-extractives/safety-performance-metrics/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/mining-and-extractives/safety-performance-metrics/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/mining-and-extractives/safety-performance-metrics/create`, `management/mining-and-extractives/safety-performance-metrics/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/mining-and-extractives/safety-performance-metrics/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/mining-and-extractives/safety-performance-metrics/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/mining-and-extractives/safety-performance-metrics/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/mining-and-extractives/safety-performance-metrics/analytics`)
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
