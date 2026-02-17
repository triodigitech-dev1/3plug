# Project margin monitoring: Implementation Components

## Context
- Plug: Management
- Module: Professional Services
- Route base: management/professional-services/project-margin-monitoring

## Screen-to-Component Matrix
1. Dashboard (`management/professional-services/project-margin-monitoring/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/professional-services/project-margin-monitoring/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/professional-services/project-margin-monitoring/create`, `management/professional-services/project-margin-monitoring/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/professional-services/project-margin-monitoring/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/professional-services/project-margin-monitoring/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/professional-services/project-margin-monitoring/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/professional-services/project-margin-monitoring/analytics`)
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
