# Technician productivity tracking: Implementation Components

## Context
- Plug: Management
- Module: Home & Personal Services
- Route base: management/home-and-personal-services/technician-productivity-tracking

## Screen-to-Component Matrix
1. Dashboard (`management/home-and-personal-services/technician-productivity-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/home-and-personal-services/technician-productivity-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/home-and-personal-services/technician-productivity-tracking/create`, `management/home-and-personal-services/technician-productivity-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/home-and-personal-services/technician-productivity-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/home-and-personal-services/technician-productivity-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/home-and-personal-services/technician-productivity-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/home-and-personal-services/technician-productivity-tracking/analytics`)
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
