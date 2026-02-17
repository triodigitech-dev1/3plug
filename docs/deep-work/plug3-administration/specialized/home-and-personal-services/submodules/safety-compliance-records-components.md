# Safety compliance records: Implementation Components

## Context
- Plug: Administration
- Module: Home & Personal Services
- Route base: administration/home-and-personal-services/safety-compliance-records

## Screen-to-Component Matrix
1. Dashboard (`administration/home-and-personal-services/safety-compliance-records/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/home-and-personal-services/safety-compliance-records/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/home-and-personal-services/safety-compliance-records/create`, `administration/home-and-personal-services/safety-compliance-records/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/home-and-personal-services/safety-compliance-records/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/home-and-personal-services/safety-compliance-records/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/home-and-personal-services/safety-compliance-records/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/home-and-personal-services/safety-compliance-records/analytics`)
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
