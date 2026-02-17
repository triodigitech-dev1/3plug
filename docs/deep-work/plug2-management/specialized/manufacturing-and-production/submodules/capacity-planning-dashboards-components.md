# Capacity planning dashboards: Implementation Components

## Context
- Plug: Management
- Module: Manufacturing & Production
- Route base: management/manufacturing-and-production/capacity-planning-dashboards

## Screen-to-Component Matrix
1. Dashboard (`management/manufacturing-and-production/capacity-planning-dashboards/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/manufacturing-and-production/capacity-planning-dashboards/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/manufacturing-and-production/capacity-planning-dashboards/create`, `management/manufacturing-and-production/capacity-planning-dashboards/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/manufacturing-and-production/capacity-planning-dashboards/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/manufacturing-and-production/capacity-planning-dashboards/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/manufacturing-and-production/capacity-planning-dashboards/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/manufacturing-and-production/capacity-planning-dashboards/analytics`)
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
