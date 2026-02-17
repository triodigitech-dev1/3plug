# Service appointment scheduling: Implementation Components

## Context
- Plug: Business Operations
- Module: Home & Personal Services
- Route base: operations/home-and-personal-services/service-appointment-scheduling

## Screen-to-Component Matrix
1. Dashboard (`operations/home-and-personal-services/service-appointment-scheduling/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/home-and-personal-services/service-appointment-scheduling/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/home-and-personal-services/service-appointment-scheduling/create`, `operations/home-and-personal-services/service-appointment-scheduling/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/home-and-personal-services/service-appointment-scheduling/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/home-and-personal-services/service-appointment-scheduling/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/home-and-personal-services/service-appointment-scheduling/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/home-and-personal-services/service-appointment-scheduling/analytics`)
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
