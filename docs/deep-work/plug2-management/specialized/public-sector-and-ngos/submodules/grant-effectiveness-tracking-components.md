# Grant effectiveness tracking: Implementation Components

## Context
- Plug: Management
- Module: Public Sector & NGOs
- Route base: management/public-sector-and-ngos/grant-effectiveness-tracking

## Screen-to-Component Matrix
1. Dashboard (`management/public-sector-and-ngos/grant-effectiveness-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/public-sector-and-ngos/grant-effectiveness-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/public-sector-and-ngos/grant-effectiveness-tracking/create`, `management/public-sector-and-ngos/grant-effectiveness-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/public-sector-and-ngos/grant-effectiveness-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/public-sector-and-ngos/grant-effectiveness-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/public-sector-and-ngos/grant-effectiveness-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/public-sector-and-ngos/grant-effectiveness-tracking/analytics`)
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
