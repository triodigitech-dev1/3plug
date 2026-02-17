# Supply chain performance metrics: Implementation Components

## Context
- Plug: Management
- Module: Operations Oversight
- Route base: management/operations-oversight/supply-chain-performance-metrics

## Screen-to-Component Matrix
1. Dashboard (`management/operations-oversight/supply-chain-performance-metrics/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/operations-oversight/supply-chain-performance-metrics/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/operations-oversight/supply-chain-performance-metrics/create`, `management/operations-oversight/supply-chain-performance-metrics/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/operations-oversight/supply-chain-performance-metrics/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/operations-oversight/supply-chain-performance-metrics/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/operations-oversight/supply-chain-performance-metrics/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/operations-oversight/supply-chain-performance-metrics/analytics`)
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
