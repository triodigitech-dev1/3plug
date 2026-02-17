# Mobile technician dispatch: Implementation Components

## Context
- Plug: Business Operations
- Module: Home & Personal Services
- Route base: operations/home-and-personal-services/mobile-technician-dispatch

## Screen-to-Component Matrix
1. Dashboard (`operations/home-and-personal-services/mobile-technician-dispatch/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/home-and-personal-services/mobile-technician-dispatch/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/home-and-personal-services/mobile-technician-dispatch/create`, `operations/home-and-personal-services/mobile-technician-dispatch/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/home-and-personal-services/mobile-technician-dispatch/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/home-and-personal-services/mobile-technician-dispatch/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/home-and-personal-services/mobile-technician-dispatch/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/home-and-personal-services/mobile-technician-dispatch/analytics`)
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
