# Facility maintenance scheduling: Implementation Components

## Context
- Plug: Business Operations
- Module: Construction & Real Estate
- Route base: operations/construction-and-real-estate/facility-maintenance-scheduling

## Screen-to-Component Matrix
1. Dashboard (`operations/construction-and-real-estate/facility-maintenance-scheduling/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/construction-and-real-estate/facility-maintenance-scheduling/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/construction-and-real-estate/facility-maintenance-scheduling/create`, `operations/construction-and-real-estate/facility-maintenance-scheduling/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/construction-and-real-estate/facility-maintenance-scheduling/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/construction-and-real-estate/facility-maintenance-scheduling/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/construction-and-real-estate/facility-maintenance-scheduling/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/construction-and-real-estate/facility-maintenance-scheduling/analytics`)
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
