# Reservation management: Implementation Components

## Context
- Plug: Business Operations
- Module: Hospitality, Food & Beverage
- Route base: operations/hospitality-food-and-beverage/reservation-management

## Screen-to-Component Matrix
1. Dashboard (`operations/hospitality-food-and-beverage/reservation-management/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/hospitality-food-and-beverage/reservation-management/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/hospitality-food-and-beverage/reservation-management/create`, `operations/hospitality-food-and-beverage/reservation-management/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/hospitality-food-and-beverage/reservation-management/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/hospitality-food-and-beverage/reservation-management/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/hospitality-food-and-beverage/reservation-management/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/hospitality-food-and-beverage/reservation-management/analytics`)
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
