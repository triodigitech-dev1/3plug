# Customer acquisition cost (CAC) tracking: Implementation Components

## Context
- Plug: Management
- Module: E-commerce & Digital Commerce
- Route base: management/e-commerce-and-digital-commerce/customer-acquisition-cost-cac-tracking

## Screen-to-Component Matrix
1. Dashboard (`management/e-commerce-and-digital-commerce/customer-acquisition-cost-cac-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/e-commerce-and-digital-commerce/customer-acquisition-cost-cac-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/e-commerce-and-digital-commerce/customer-acquisition-cost-cac-tracking/create`, `management/e-commerce-and-digital-commerce/customer-acquisition-cost-cac-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/e-commerce-and-digital-commerce/customer-acquisition-cost-cac-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/e-commerce-and-digital-commerce/customer-acquisition-cost-cac-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/e-commerce-and-digital-commerce/customer-acquisition-cost-cac-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/e-commerce-and-digital-commerce/customer-acquisition-cost-cac-tracking/analytics`)
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
