# Food cost percentage tracking: Implementation Components

## Context
- Plug: Management
- Module: Hospitality & Food & Beverage
- Route base: management/hospitality-and-food-and-beverage/food-cost-percentage-tracking

## Screen-to-Component Matrix
1. Dashboard (`management/hospitality-and-food-and-beverage/food-cost-percentage-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/hospitality-and-food-and-beverage/food-cost-percentage-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/hospitality-and-food-and-beverage/food-cost-percentage-tracking/create`, `management/hospitality-and-food-and-beverage/food-cost-percentage-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/hospitality-and-food-and-beverage/food-cost-percentage-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/hospitality-and-food-and-beverage/food-cost-percentage-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/hospitality-and-food-and-beverage/food-cost-percentage-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/hospitality-and-food-and-beverage/food-cost-percentage-tracking/analytics`)
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
