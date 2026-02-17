# Insurance policy tracking: Implementation Components

## Context
- Plug: Administration
- Module: Risk & Insurance Administration
- Route base: administration/risk-and-insurance-administration/insurance-policy-tracking

## Screen-to-Component Matrix
1. Dashboard (`administration/risk-and-insurance-administration/insurance-policy-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/risk-and-insurance-administration/insurance-policy-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/risk-and-insurance-administration/insurance-policy-tracking/create`, `administration/risk-and-insurance-administration/insurance-policy-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/risk-and-insurance-administration/insurance-policy-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/risk-and-insurance-administration/insurance-policy-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/risk-and-insurance-administration/insurance-policy-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/risk-and-insurance-administration/insurance-policy-tracking/analytics`)
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
