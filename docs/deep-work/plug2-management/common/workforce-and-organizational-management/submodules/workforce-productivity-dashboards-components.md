# Workforce productivity dashboards: Implementation Components

## Context
- Plug: Management
- Module: Workforce & Organizational Management
- Route base: management/workforce-and-organizational-management/workforce-productivity-dashboards

## Screen-to-Component Matrix
1. Dashboard (`management/workforce-and-organizational-management/workforce-productivity-dashboards/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/workforce-and-organizational-management/workforce-productivity-dashboards/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/workforce-and-organizational-management/workforce-productivity-dashboards/create`, `management/workforce-and-organizational-management/workforce-productivity-dashboards/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/workforce-and-organizational-management/workforce-productivity-dashboards/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/workforce-and-organizational-management/workforce-productivity-dashboards/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/workforce-and-organizational-management/workforce-productivity-dashboards/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/workforce-and-organizational-management/workforce-productivity-dashboards/analytics`)
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
