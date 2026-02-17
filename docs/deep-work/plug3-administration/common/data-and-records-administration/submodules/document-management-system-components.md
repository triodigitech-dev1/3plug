# Document management system: Implementation Components

## Context
- Plug: Administration
- Module: Data & Records Administration
- Route base: administration/data-and-records-administration/document-management-system

## Screen-to-Component Matrix
1. Dashboard (`administration/data-and-records-administration/document-management-system/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/data-and-records-administration/document-management-system/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/data-and-records-administration/document-management-system/create`, `administration/data-and-records-administration/document-management-system/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/data-and-records-administration/document-management-system/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/data-and-records-administration/document-management-system/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/data-and-records-administration/document-management-system/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/data-and-records-administration/document-management-system/analytics`)
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
