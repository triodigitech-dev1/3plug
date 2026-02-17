# Room booking (for hotels): Implementation Components

## Context
- Plug: Business Operations
- Module: Hospitality, Food & Beverage
- Route base: operations/hospitality-food-and-beverage/room-booking-for-hotels

## Screen-to-Component Matrix
1. Dashboard (`operations/hospitality-food-and-beverage/room-booking-for-hotels/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/hospitality-food-and-beverage/room-booking-for-hotels/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/hospitality-food-and-beverage/room-booking-for-hotels/create`, `operations/hospitality-food-and-beverage/room-booking-for-hotels/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/hospitality-food-and-beverage/room-booking-for-hotels/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/hospitality-food-and-beverage/room-booking-for-hotels/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/hospitality-food-and-beverage/room-booking-for-hotels/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/hospitality-food-and-beverage/room-booking-for-hotels/analytics`)
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
