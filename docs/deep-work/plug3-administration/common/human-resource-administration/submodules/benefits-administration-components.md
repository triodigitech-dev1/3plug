# Benefits administration: Implementation Components

## Context
- Plug: Administration
- Module: Human Resource Administration
- Route base: administration/human-resource-administration/benefits-administration

## Screen-to-Component Matrix
1. Dashboard (`administration/human-resource-administration/benefits-administration/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/human-resource-administration/benefits-administration/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/human-resource-administration/benefits-administration/create`, `administration/human-resource-administration/benefits-administration/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/human-resource-administration/benefits-administration/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/human-resource-administration/benefits-administration/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/human-resource-administration/benefits-administration/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/human-resource-administration/benefits-administration/analytics`)
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
