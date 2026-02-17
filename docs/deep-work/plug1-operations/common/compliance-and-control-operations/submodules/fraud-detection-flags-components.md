# Fraud detection flags: Implementation Components

## Context
- Plug: Business Operations
- Module: Compliance & Control Operations
- Route base: operations/compliance-and-control-operations/fraud-detection-flags

## Screen-to-Component Matrix
1. Dashboard (`operations/compliance-and-control-operations/fraud-detection-flags/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/compliance-and-control-operations/fraud-detection-flags/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/compliance-and-control-operations/fraud-detection-flags/create`, `operations/compliance-and-control-operations/fraud-detection-flags/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/compliance-and-control-operations/fraud-detection-flags/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/compliance-and-control-operations/fraud-detection-flags/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/compliance-and-control-operations/fraud-detection-flags/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/compliance-and-control-operations/fraud-detection-flags/analytics`)
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
