# Business continuity documentation: Implementation Components

## Context
- Plug: Administration
- Module: Risk & Insurance Administration
- Route base: administration/risk-and-insurance-administration/business-continuity-documentation

## Screen-to-Component Matrix
1. Dashboard (`administration/risk-and-insurance-administration/business-continuity-documentation/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/risk-and-insurance-administration/business-continuity-documentation/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/risk-and-insurance-administration/business-continuity-documentation/create`, `administration/risk-and-insurance-administration/business-continuity-documentation/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/risk-and-insurance-administration/business-continuity-documentation/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/risk-and-insurance-administration/business-continuity-documentation/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/risk-and-insurance-administration/business-continuity-documentation/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/risk-and-insurance-administration/business-continuity-documentation/analytics`)
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
