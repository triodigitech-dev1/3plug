# Vehicle assignment: Implementation Components

## Context
- Plug: Business Operations
- Module: Travel, Tourism & Recreation
- Route base: operations/travel-tourism-and-recreation/vehicle-assignment

## Screen-to-Component Matrix
1. Dashboard (`operations/travel-tourism-and-recreation/vehicle-assignment/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/travel-tourism-and-recreation/vehicle-assignment/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/travel-tourism-and-recreation/vehicle-assignment/create`, `operations/travel-tourism-and-recreation/vehicle-assignment/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/travel-tourism-and-recreation/vehicle-assignment/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/travel-tourism-and-recreation/vehicle-assignment/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/travel-tourism-and-recreation/vehicle-assignment/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/travel-tourism-and-recreation/vehicle-assignment/analytics`)
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
