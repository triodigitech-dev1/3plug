# Home visit tracking: Implementation Components

## Context
- Plug: Business Operations
- Module: Home & Personal Services
- Route base: operations/home-and-personal-services/home-visit-tracking

## Screen-to-Component Matrix
1. Dashboard (`operations/home-and-personal-services/home-visit-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/home-and-personal-services/home-visit-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/home-and-personal-services/home-visit-tracking/create`, `operations/home-and-personal-services/home-visit-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/home-and-personal-services/home-visit-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/home-and-personal-services/home-visit-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/home-and-personal-services/home-visit-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/home-and-personal-services/home-visit-tracking/analytics`)
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
