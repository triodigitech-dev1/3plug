# Ensures regulatory compliance: Implementation Components

## Context
- Plug: Administration
- Module: Multi-Industry Groups
- Route base: administration/multi-industry-groups/ensures-regulatory-compliance

## Screen-to-Component Matrix
1. Dashboard (`administration/multi-industry-groups/ensures-regulatory-compliance/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/multi-industry-groups/ensures-regulatory-compliance/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/multi-industry-groups/ensures-regulatory-compliance/create`, `administration/multi-industry-groups/ensures-regulatory-compliance/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/multi-industry-groups/ensures-regulatory-compliance/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/multi-industry-groups/ensures-regulatory-compliance/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/multi-industry-groups/ensures-regulatory-compliance/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/multi-industry-groups/ensures-regulatory-compliance/analytics`)
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
