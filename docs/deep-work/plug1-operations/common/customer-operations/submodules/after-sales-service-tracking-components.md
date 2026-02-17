# After-sales service tracking: Implementation Components

## Context
- Plug: Business Operations
- Module: Customer Operations
- Route base: operations/customer-operations/after-sales-service-tracking

## Screen-to-Component Matrix
1. Dashboard (`operations/customer-operations/after-sales-service-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/customer-operations/after-sales-service-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/customer-operations/after-sales-service-tracking/create`, `operations/customer-operations/after-sales-service-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/customer-operations/after-sales-service-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/customer-operations/after-sales-service-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/customer-operations/after-sales-service-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/customer-operations/after-sales-service-tracking/analytics`)
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
