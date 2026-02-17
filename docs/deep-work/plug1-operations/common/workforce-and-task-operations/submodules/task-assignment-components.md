# Task assignment: Implementation Components

## Context
- Plug: Business Operations
- Module: Workforce & Task Operations
- Route base: operations/workforce-and-task-operations/task-assignment

## Screen-to-Component Matrix
1. Dashboard (`operations/workforce-and-task-operations/task-assignment/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/workforce-and-task-operations/task-assignment/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/workforce-and-task-operations/task-assignment/create`, `operations/workforce-and-task-operations/task-assignment/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/workforce-and-task-operations/task-assignment/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/workforce-and-task-operations/task-assignment/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/workforce-and-task-operations/task-assignment/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/workforce-and-task-operations/task-assignment/analytics`)
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
