# Employee records management: Implementation Components

## Context
- Plug: Administration
- Module: Human Resource Administration
- Route base: administration/human-resource-administration/employee-records-management

## Screen-to-Component Matrix
1. Dashboard (`administration/human-resource-administration/employee-records-management/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/human-resource-administration/employee-records-management/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/human-resource-administration/employee-records-management/create`, `administration/human-resource-administration/employee-records-management/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/human-resource-administration/employee-records-management/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/human-resource-administration/employee-records-management/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/human-resource-administration/employee-records-management/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/human-resource-administration/employee-records-management/analytics`)
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
