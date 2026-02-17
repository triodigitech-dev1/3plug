# Operational productivity monitoring: Implementation Components

## Context
- Plug: Business Operations
- Module: Workforce & Task Operations
- Route base: operations/workforce-and-task-operations/operational-productivity-monitoring

## Screen-to-Component Matrix
1. Dashboard (`operations/workforce-and-task-operations/operational-productivity-monitoring/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/workforce-and-task-operations/operational-productivity-monitoring/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/workforce-and-task-operations/operational-productivity-monitoring/create`, `operations/workforce-and-task-operations/operational-productivity-monitoring/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/workforce-and-task-operations/operational-productivity-monitoring/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/workforce-and-task-operations/operational-productivity-monitoring/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/workforce-and-task-operations/operational-productivity-monitoring/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/workforce-and-task-operations/operational-productivity-monitoring/analytics`)
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
