# Audience growth tracking: Implementation Components

## Context
- Plug: Management
- Module: Media & Creative Industries
- Route base: management/media-and-creative-industries/audience-growth-tracking

## Screen-to-Component Matrix
1. Dashboard (`management/media-and-creative-industries/audience-growth-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/media-and-creative-industries/audience-growth-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/media-and-creative-industries/audience-growth-tracking/create`, `management/media-and-creative-industries/audience-growth-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/media-and-creative-industries/audience-growth-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/media-and-creative-industries/audience-growth-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/media-and-creative-industries/audience-growth-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/media-and-creative-industries/audience-growth-tracking/analytics`)
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
