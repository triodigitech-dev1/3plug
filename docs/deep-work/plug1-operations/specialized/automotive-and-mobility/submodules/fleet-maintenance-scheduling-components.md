# Fleet maintenance scheduling: Implementation Components

## Context
- Plug: Business Operations
- Module: Automotive & Mobility
- Route base: operations/automotive-and-mobility/fleet-maintenance-scheduling

## Screen-to-Component Matrix
1. Dashboard (`operations/automotive-and-mobility/fleet-maintenance-scheduling/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/automotive-and-mobility/fleet-maintenance-scheduling/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/automotive-and-mobility/fleet-maintenance-scheduling/create`, `operations/automotive-and-mobility/fleet-maintenance-scheduling/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/automotive-and-mobility/fleet-maintenance-scheduling/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/automotive-and-mobility/fleet-maintenance-scheduling/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/automotive-and-mobility/fleet-maintenance-scheduling/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/automotive-and-mobility/fleet-maintenance-scheduling/analytics`)
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
