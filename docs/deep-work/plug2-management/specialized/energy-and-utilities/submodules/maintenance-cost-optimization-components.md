# Maintenance cost optimization: Implementation Components

## Context
- Plug: Management
- Module: Energy & Utilities
- Route base: management/energy-and-utilities/maintenance-cost-optimization

## Screen-to-Component Matrix
1. Dashboard (`management/energy-and-utilities/maintenance-cost-optimization/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/energy-and-utilities/maintenance-cost-optimization/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/energy-and-utilities/maintenance-cost-optimization/create`, `management/energy-and-utilities/maintenance-cost-optimization/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/energy-and-utilities/maintenance-cost-optimization/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/energy-and-utilities/maintenance-cost-optimization/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/energy-and-utilities/maintenance-cost-optimization/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/energy-and-utilities/maintenance-cost-optimization/analytics`)
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
