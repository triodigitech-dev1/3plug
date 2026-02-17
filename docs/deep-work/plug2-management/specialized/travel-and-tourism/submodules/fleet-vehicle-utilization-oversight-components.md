# Fleet/vehicle utilization oversight: Implementation Components

## Context
- Plug: Management
- Module: Travel & Tourism
- Route base: management/travel-and-tourism/fleet-vehicle-utilization-oversight

## Screen-to-Component Matrix
1. Dashboard (`management/travel-and-tourism/fleet-vehicle-utilization-oversight/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/travel-and-tourism/fleet-vehicle-utilization-oversight/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/travel-and-tourism/fleet-vehicle-utilization-oversight/create`, `management/travel-and-tourism/fleet-vehicle-utilization-oversight/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/travel-and-tourism/fleet-vehicle-utilization-oversight/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/travel-and-tourism/fleet-vehicle-utilization-oversight/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/travel-and-tourism/fleet-vehicle-utilization-oversight/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/travel-and-tourism/fleet-vehicle-utilization-oversight/analytics`)
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
