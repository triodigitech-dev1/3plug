# Automated executive summaries: Implementation Components

## Context
- Plug: Management
- Module: Reporting & Executive Intelligence
- Route base: management/reporting-and-executive-intelligence/automated-executive-summaries

## Screen-to-Component Matrix
1. Dashboard (`management/reporting-and-executive-intelligence/automated-executive-summaries/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/reporting-and-executive-intelligence/automated-executive-summaries/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/reporting-and-executive-intelligence/automated-executive-summaries/create`, `management/reporting-and-executive-intelligence/automated-executive-summaries/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/reporting-and-executive-intelligence/automated-executive-summaries/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/reporting-and-executive-intelligence/automated-executive-summaries/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/reporting-and-executive-intelligence/automated-executive-summaries/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/reporting-and-executive-intelligence/automated-executive-summaries/analytics`)
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
