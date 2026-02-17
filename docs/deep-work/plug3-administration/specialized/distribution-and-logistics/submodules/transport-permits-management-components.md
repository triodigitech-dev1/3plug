# Transport permits management: Implementation Components

## Context
- Plug: Administration
- Module: Distribution & Logistics
- Route base: administration/distribution-and-logistics/transport-permits-management

## Screen-to-Component Matrix
1. Dashboard (`administration/distribution-and-logistics/transport-permits-management/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/distribution-and-logistics/transport-permits-management/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/distribution-and-logistics/transport-permits-management/create`, `administration/distribution-and-logistics/transport-permits-management/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/distribution-and-logistics/transport-permits-management/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/distribution-and-logistics/transport-permits-management/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/distribution-and-logistics/transport-permits-management/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/distribution-and-logistics/transport-permits-management/analytics`)
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
