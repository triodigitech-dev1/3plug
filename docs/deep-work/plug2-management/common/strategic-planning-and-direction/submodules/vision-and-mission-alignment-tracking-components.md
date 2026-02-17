# Vision & mission alignment tracking: Implementation Components

## Context
- Plug: Management
- Module: Strategic Planning & Direction
- Route base: management/strategic-planning-and-direction/vision-and-mission-alignment-tracking

## Screen-to-Component Matrix
1. Dashboard (`management/strategic-planning-and-direction/vision-and-mission-alignment-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/strategic-planning-and-direction/vision-and-mission-alignment-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/strategic-planning-and-direction/vision-and-mission-alignment-tracking/create`, `management/strategic-planning-and-direction/vision-and-mission-alignment-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/strategic-planning-and-direction/vision-and-mission-alignment-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/strategic-planning-and-direction/vision-and-mission-alignment-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/strategic-planning-and-direction/vision-and-mission-alignment-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/strategic-planning-and-direction/vision-and-mission-alignment-tracking/analytics`)
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
