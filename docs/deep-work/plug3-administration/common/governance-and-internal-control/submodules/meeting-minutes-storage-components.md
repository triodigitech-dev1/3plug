# Meeting minutes storage: Implementation Components

## Context
- Plug: Administration
- Module: Governance & Internal Control
- Route base: administration/governance-and-internal-control/meeting-minutes-storage

## Screen-to-Component Matrix
1. Dashboard (`administration/governance-and-internal-control/meeting-minutes-storage/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/governance-and-internal-control/meeting-minutes-storage/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/governance-and-internal-control/meeting-minutes-storage/create`, `administration/governance-and-internal-control/meeting-minutes-storage/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/governance-and-internal-control/meeting-minutes-storage/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/governance-and-internal-control/meeting-minutes-storage/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/governance-and-internal-control/meeting-minutes-storage/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/governance-and-internal-control/meeting-minutes-storage/analytics`)
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
