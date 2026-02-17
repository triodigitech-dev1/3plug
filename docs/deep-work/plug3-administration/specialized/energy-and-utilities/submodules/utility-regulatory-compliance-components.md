# Utility regulatory compliance: Implementation Components

## Context
- Plug: Administration
- Module: Energy & Utilities
- Route base: administration/energy-and-utilities/utility-regulatory-compliance

## Screen-to-Component Matrix
1. Dashboard (`administration/energy-and-utilities/utility-regulatory-compliance/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/energy-and-utilities/utility-regulatory-compliance/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/energy-and-utilities/utility-regulatory-compliance/create`, `administration/energy-and-utilities/utility-regulatory-compliance/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/energy-and-utilities/utility-regulatory-compliance/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/energy-and-utilities/utility-regulatory-compliance/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/energy-and-utilities/utility-regulatory-compliance/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/energy-and-utilities/utility-regulatory-compliance/analytics`)
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
