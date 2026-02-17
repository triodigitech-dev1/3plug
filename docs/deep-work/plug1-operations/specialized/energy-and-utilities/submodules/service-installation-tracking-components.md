# Service installation tracking: Implementation Components

## Context
- Plug: Business Operations
- Module: Energy & Utilities
- Route base: operations/energy-and-utilities/service-installation-tracking

## Screen-to-Component Matrix
1. Dashboard (`operations/energy-and-utilities/service-installation-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/energy-and-utilities/service-installation-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/energy-and-utilities/service-installation-tracking/create`, `operations/energy-and-utilities/service-installation-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/energy-and-utilities/service-installation-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/energy-and-utilities/service-installation-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/energy-and-utilities/service-installation-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/energy-and-utilities/service-installation-tracking/analytics`)
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
