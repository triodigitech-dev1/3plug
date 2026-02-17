# Menu performance engineering: Implementation Components

## Context
- Plug: Management
- Module: Hospitality & Food & Beverage
- Route base: management/hospitality-and-food-and-beverage/menu-performance-engineering

## Screen-to-Component Matrix
1. Dashboard (`management/hospitality-and-food-and-beverage/menu-performance-engineering/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/hospitality-and-food-and-beverage/menu-performance-engineering/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/hospitality-and-food-and-beverage/menu-performance-engineering/create`, `management/hospitality-and-food-and-beverage/menu-performance-engineering/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/hospitality-and-food-and-beverage/menu-performance-engineering/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/hospitality-and-food-and-beverage/menu-performance-engineering/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/hospitality-and-food-and-beverage/menu-performance-engineering/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/hospitality-and-food-and-beverage/menu-performance-engineering/analytics`)
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
