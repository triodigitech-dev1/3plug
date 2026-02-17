# Operational efficiency metrics: Implementation Components

## Context
- Plug: Business Operations
- Module: Reporting & Operational Analytics
- Route base: operations/reporting-and-operational-analytics/operational-efficiency-metrics

## Screen-to-Component Matrix
1. Dashboard (`operations/reporting-and-operational-analytics/operational-efficiency-metrics/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/reporting-and-operational-analytics/operational-efficiency-metrics/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/reporting-and-operational-analytics/operational-efficiency-metrics/create`, `operations/reporting-and-operational-analytics/operational-efficiency-metrics/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/reporting-and-operational-analytics/operational-efficiency-metrics/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/reporting-and-operational-analytics/operational-efficiency-metrics/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/reporting-and-operational-analytics/operational-efficiency-metrics/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/reporting-and-operational-analytics/operational-efficiency-metrics/analytics`)
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
