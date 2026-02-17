# Pesticide usage documentation: Implementation Components

## Context
- Plug: Administration
- Module: Agriculture & Agribusiness
- Route base: administration/agriculture-and-agribusiness/pesticide-usage-documentation

## Screen-to-Component Matrix
1. Dashboard (`administration/agriculture-and-agribusiness/pesticide-usage-documentation/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/agriculture-and-agribusiness/pesticide-usage-documentation/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/agriculture-and-agribusiness/pesticide-usage-documentation/create`, `administration/agriculture-and-agribusiness/pesticide-usage-documentation/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/agriculture-and-agribusiness/pesticide-usage-documentation/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/agriculture-and-agribusiness/pesticide-usage-documentation/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/agriculture-and-agribusiness/pesticide-usage-documentation/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/agriculture-and-agribusiness/pesticide-usage-documentation/analytics`)
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
