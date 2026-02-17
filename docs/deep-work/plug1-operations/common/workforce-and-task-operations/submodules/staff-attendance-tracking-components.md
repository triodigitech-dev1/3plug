# Staff attendance tracking: Implementation Components

## Context
- Plug: Business Operations
- Module: Workforce & Task Operations
- Route base: operations/workforce-and-task-operations/staff-attendance-tracking

## Screen-to-Component Matrix
1. Dashboard (`operations/workforce-and-task-operations/staff-attendance-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/workforce-and-task-operations/staff-attendance-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/workforce-and-task-operations/staff-attendance-tracking/create`, `operations/workforce-and-task-operations/staff-attendance-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/workforce-and-task-operations/staff-attendance-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/workforce-and-task-operations/staff-attendance-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/workforce-and-task-operations/staff-attendance-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/workforce-and-task-operations/staff-attendance-tracking/analytics`)
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
