# Contractor performance analysis: Implementation Components

## Context
- Plug: Management
- Module: Mining & Extractives
- Route base: management/mining-and-extractives/contractor-performance-analysis

## Screen-to-Component Matrix
1. Dashboard (`management/mining-and-extractives/contractor-performance-analysis/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/mining-and-extractives/contractor-performance-analysis/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/mining-and-extractives/contractor-performance-analysis/create`, `management/mining-and-extractives/contractor-performance-analysis/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/mining-and-extractives/contractor-performance-analysis/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/mining-and-extractives/contractor-performance-analysis/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/mining-and-extractives/contractor-performance-analysis/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/mining-and-extractives/contractor-performance-analysis/analytics`)
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
