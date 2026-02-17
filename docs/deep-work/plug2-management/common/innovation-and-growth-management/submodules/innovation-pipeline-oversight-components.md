# Innovation pipeline oversight: Implementation Components

## Context
- Plug: Management
- Module: Innovation & Growth Management
- Route base: management/innovation-and-growth-management/innovation-pipeline-oversight

## Screen-to-Component Matrix
1. Dashboard (`management/innovation-and-growth-management/innovation-pipeline-oversight/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/innovation-and-growth-management/innovation-pipeline-oversight/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/innovation-and-growth-management/innovation-pipeline-oversight/create`, `management/innovation-and-growth-management/innovation-pipeline-oversight/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/innovation-and-growth-management/innovation-pipeline-oversight/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/innovation-and-growth-management/innovation-pipeline-oversight/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/innovation-and-growth-management/innovation-pipeline-oversight/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/innovation-and-growth-management/innovation-pipeline-oversight/analytics`)
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
