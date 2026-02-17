# Food safety certification tracking: Implementation Components

## Context
- Plug: Administration
- Module: Hospitality & Food & Beverage
- Route base: administration/hospitality-and-food-and-beverage/food-safety-certification-tracking

## Screen-to-Component Matrix
1. Dashboard (`administration/hospitality-and-food-and-beverage/food-safety-certification-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/hospitality-and-food-and-beverage/food-safety-certification-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/hospitality-and-food-and-beverage/food-safety-certification-tracking/create`, `administration/hospitality-and-food-and-beverage/food-safety-certification-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/hospitality-and-food-and-beverage/food-safety-certification-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/hospitality-and-food-and-beverage/food-safety-certification-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/hospitality-and-food-and-beverage/food-safety-certification-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/hospitality-and-food-and-beverage/food-safety-certification-tracking/analytics`)
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
