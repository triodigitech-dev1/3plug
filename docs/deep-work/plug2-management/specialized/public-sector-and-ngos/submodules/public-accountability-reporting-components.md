# Public accountability reporting: Implementation Components

## Context
- Plug: Management
- Module: Public Sector & NGOs
- Route base: management/public-sector-and-ngos/public-accountability-reporting

## Screen-to-Component Matrix
1. Dashboard (`management/public-sector-and-ngos/public-accountability-reporting/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/public-sector-and-ngos/public-accountability-reporting/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/public-sector-and-ngos/public-accountability-reporting/create`, `management/public-sector-and-ngos/public-accountability-reporting/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/public-sector-and-ngos/public-accountability-reporting/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/public-sector-and-ngos/public-accountability-reporting/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/public-sector-and-ngos/public-accountability-reporting/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/public-sector-and-ngos/public-accountability-reporting/analytics`)
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
