# Advertising slot booking: Implementation Components

## Context
- Plug: Business Operations
- Module: Media & Creative Industries
- Route base: operations/media-and-creative-industries/advertising-slot-booking

## Screen-to-Component Matrix
1. Dashboard (`operations/media-and-creative-industries/advertising-slot-booking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/media-and-creative-industries/advertising-slot-booking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/media-and-creative-industries/advertising-slot-booking/create`, `operations/media-and-creative-industries/advertising-slot-booking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/media-and-creative-industries/advertising-slot-booking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/media-and-creative-industries/advertising-slot-booking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/media-and-creative-industries/advertising-slot-booking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/media-and-creative-industries/advertising-slot-booking/analytics`)
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
