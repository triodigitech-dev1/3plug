# Repeat customer rate monitoring: Implementation Components

## Context
- Plug: Management
- Module: Home & Personal Services
- Route base: management/home-and-personal-services/repeat-customer-rate-monitoring

## Screen-to-Component Matrix
1. Dashboard (`management/home-and-personal-services/repeat-customer-rate-monitoring/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/home-and-personal-services/repeat-customer-rate-monitoring/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/home-and-personal-services/repeat-customer-rate-monitoring/create`, `management/home-and-personal-services/repeat-customer-rate-monitoring/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/home-and-personal-services/repeat-customer-rate-monitoring/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/home-and-personal-services/repeat-customer-rate-monitoring/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/home-and-personal-services/repeat-customer-rate-monitoring/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/home-and-personal-services/repeat-customer-rate-monitoring/analytics`)
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
