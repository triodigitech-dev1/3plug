# Contractor license verification: Implementation Components

## Context
- Plug: Administration
- Module: Construction & Real Estate
- Route base: administration/construction-and-real-estate/contractor-license-verification

## Screen-to-Component Matrix
1. Dashboard (`administration/construction-and-real-estate/contractor-license-verification/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/construction-and-real-estate/contractor-license-verification/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/construction-and-real-estate/contractor-license-verification/create`, `administration/construction-and-real-estate/contractor-license-verification/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/construction-and-real-estate/contractor-license-verification/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/construction-and-real-estate/contractor-license-verification/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/construction-and-real-estate/contractor-license-verification/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/construction-and-real-estate/contractor-license-verification/analytics`)
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
