# Insurance documentation: Implementation Components

## Context
- Plug: Administration
- Module: Automotive & Mobility
- Route base: administration/automotive-and-mobility/insurance-documentation

## Screen-to-Component Matrix
1. Dashboard (`administration/automotive-and-mobility/insurance-documentation/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/automotive-and-mobility/insurance-documentation/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/automotive-and-mobility/insurance-documentation/create`, `administration/automotive-and-mobility/insurance-documentation/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/automotive-and-mobility/insurance-documentation/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/automotive-and-mobility/insurance-documentation/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/automotive-and-mobility/insurance-documentation/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/automotive-and-mobility/insurance-documentation/analytics`)
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
