# Order fulfillment workflows: Implementation Components

## Context
- Plug: Business Operations
- Module: E-commerce & Digital Commerce
- Route base: operations/e-commerce-and-digital-commerce/order-fulfillment-workflows

## Screen-to-Component Matrix
1. Dashboard (`operations/e-commerce-and-digital-commerce/order-fulfillment-workflows/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/e-commerce-and-digital-commerce/order-fulfillment-workflows/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/e-commerce-and-digital-commerce/order-fulfillment-workflows/create`, `operations/e-commerce-and-digital-commerce/order-fulfillment-workflows/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/e-commerce-and-digital-commerce/order-fulfillment-workflows/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/e-commerce-and-digital-commerce/order-fulfillment-workflows/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/e-commerce-and-digital-commerce/order-fulfillment-workflows/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/e-commerce-and-digital-commerce/order-fulfillment-workflows/analytics`)
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
