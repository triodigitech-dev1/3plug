# Cost overrun tracking: Implementation Components

## Context
- Plug: Management
- Module: Construction & Real Estate
- Route base: management/construction-and-real-estate/cost-overrun-tracking

## Screen-to-Component Matrix
1. Dashboard (`management/construction-and-real-estate/cost-overrun-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/construction-and-real-estate/cost-overrun-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/construction-and-real-estate/cost-overrun-tracking/create`, `management/construction-and-real-estate/cost-overrun-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/construction-and-real-estate/cost-overrun-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/construction-and-real-estate/cost-overrun-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/construction-and-real-estate/cost-overrun-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/construction-and-real-estate/cost-overrun-tracking/analytics`)
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
