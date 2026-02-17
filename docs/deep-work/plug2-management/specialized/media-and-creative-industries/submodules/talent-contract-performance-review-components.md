# Talent contract performance review: Implementation Components

## Context
- Plug: Management
- Module: Media & Creative Industries
- Route base: management/media-and-creative-industries/talent-contract-performance-review

## Screen-to-Component Matrix
1. Dashboard (`management/media-and-creative-industries/talent-contract-performance-review/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/media-and-creative-industries/talent-contract-performance-review/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/media-and-creative-industries/talent-contract-performance-review/create`, `management/media-and-creative-industries/talent-contract-performance-review/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/media-and-creative-industries/talent-contract-performance-review/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/media-and-creative-industries/talent-contract-performance-review/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/media-and-creative-industries/talent-contract-performance-review/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/media-and-creative-industries/talent-contract-performance-review/analytics`)
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
