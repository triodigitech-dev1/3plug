# Maintenance cost tracking: Implementation Components

## Context
- Plug: Management
- Module: Automotive & Mobility
- Route base: management/automotive-and-mobility/maintenance-cost-tracking

## Screen-to-Component Matrix
1. Dashboard (`management/automotive-and-mobility/maintenance-cost-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/automotive-and-mobility/maintenance-cost-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/automotive-and-mobility/maintenance-cost-tracking/create`, `management/automotive-and-mobility/maintenance-cost-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/automotive-and-mobility/maintenance-cost-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/automotive-and-mobility/maintenance-cost-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/automotive-and-mobility/maintenance-cost-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/automotive-and-mobility/maintenance-cost-tracking/analytics`)
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
