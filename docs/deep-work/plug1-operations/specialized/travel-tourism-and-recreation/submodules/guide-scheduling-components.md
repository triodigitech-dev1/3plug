# Guide scheduling: Implementation Components

## Context
- Plug: Business Operations
- Module: Travel, Tourism & Recreation
- Route base: operations/travel-tourism-and-recreation/guide-scheduling

## Screen-to-Component Matrix
1. Dashboard (`operations/travel-tourism-and-recreation/guide-scheduling/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/travel-tourism-and-recreation/guide-scheduling/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/travel-tourism-and-recreation/guide-scheduling/create`, `operations/travel-tourism-and-recreation/guide-scheduling/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/travel-tourism-and-recreation/guide-scheduling/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/travel-tourism-and-recreation/guide-scheduling/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/travel-tourism-and-recreation/guide-scheduling/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/travel-tourism-and-recreation/guide-scheduling/analytics`)
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
