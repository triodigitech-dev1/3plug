# Copyright registration records: Implementation Components

## Context
- Plug: Administration
- Module: Media & Creative Industries
- Route base: administration/media-and-creative-industries/copyright-registration-records

## Screen-to-Component Matrix
1. Dashboard (`administration/media-and-creative-industries/copyright-registration-records/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/media-and-creative-industries/copyright-registration-records/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/media-and-creative-industries/copyright-registration-records/create`, `administration/media-and-creative-industries/copyright-registration-records/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/media-and-creative-industries/copyright-registration-records/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/media-and-creative-industries/copyright-registration-records/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/media-and-creative-industries/copyright-registration-records/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/media-and-creative-industries/copyright-registration-records/analytics`)
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
