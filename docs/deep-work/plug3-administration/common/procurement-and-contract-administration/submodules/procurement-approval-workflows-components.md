# Procurement approval workflows: Implementation Components

## Context
- Plug: Administration
- Module: Procurement & Contract Administration
- Route base: administration/procurement-and-contract-administration/procurement-approval-workflows

## Screen-to-Component Matrix
1. Dashboard (`administration/procurement-and-contract-administration/procurement-approval-workflows/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/procurement-and-contract-administration/procurement-approval-workflows/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/procurement-and-contract-administration/procurement-approval-workflows/create`, `administration/procurement-and-contract-administration/procurement-approval-workflows/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/procurement-and-contract-administration/procurement-approval-workflows/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/procurement-and-contract-administration/procurement-approval-workflows/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/procurement-and-contract-administration/procurement-approval-workflows/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/procurement-and-contract-administration/procurement-approval-workflows/analytics`)
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
