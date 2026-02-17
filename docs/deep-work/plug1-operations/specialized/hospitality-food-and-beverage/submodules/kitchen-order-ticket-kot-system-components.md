# Kitchen order ticket (KOT) system: Implementation Components

## Context
- Plug: Business Operations
- Module: Hospitality, Food & Beverage
- Route base: operations/hospitality-food-and-beverage/kitchen-order-ticket-kot-system

## Screen-to-Component Matrix
1. Dashboard (`operations/hospitality-food-and-beverage/kitchen-order-ticket-kot-system/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/hospitality-food-and-beverage/kitchen-order-ticket-kot-system/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/hospitality-food-and-beverage/kitchen-order-ticket-kot-system/create`, `operations/hospitality-food-and-beverage/kitchen-order-ticket-kot-system/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/hospitality-food-and-beverage/kitchen-order-ticket-kot-system/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/hospitality-food-and-beverage/kitchen-order-ticket-kot-system/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/hospitality-food-and-beverage/kitchen-order-ticket-kot-system/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/hospitality-food-and-beverage/kitchen-order-ticket-kot-system/analytics`)
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
