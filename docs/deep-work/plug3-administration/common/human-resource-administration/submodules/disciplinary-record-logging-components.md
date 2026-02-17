# Disciplinary record logging: Implementation Components

## Context
- Plug: Administration
- Module: Human Resource Administration
- Route base: administration/human-resource-administration/disciplinary-record-logging

## Screen-to-Component Matrix
1. Dashboard (`administration/human-resource-administration/disciplinary-record-logging/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/human-resource-administration/disciplinary-record-logging/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/human-resource-administration/disciplinary-record-logging/create`, `administration/human-resource-administration/disciplinary-record-logging/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/human-resource-administration/disciplinary-record-logging/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/human-resource-administration/disciplinary-record-logging/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/human-resource-administration/disciplinary-record-logging/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/human-resource-administration/disciplinary-record-logging/analytics`)
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
