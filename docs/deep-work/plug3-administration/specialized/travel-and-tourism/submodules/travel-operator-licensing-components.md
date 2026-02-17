# Travel operator licensing: Implementation Components

## Context
- Plug: Administration
- Module: Travel & Tourism
- Route base: administration/travel-and-tourism/travel-operator-licensing

## Screen-to-Component Matrix
1. Dashboard (`administration/travel-and-tourism/travel-operator-licensing/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/travel-and-tourism/travel-operator-licensing/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/travel-and-tourism/travel-operator-licensing/create`, `administration/travel-and-tourism/travel-operator-licensing/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/travel-and-tourism/travel-operator-licensing/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/travel-and-tourism/travel-operator-licensing/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/travel-and-tourism/travel-operator-licensing/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/travel-and-tourism/travel-operator-licensing/analytics`)
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
