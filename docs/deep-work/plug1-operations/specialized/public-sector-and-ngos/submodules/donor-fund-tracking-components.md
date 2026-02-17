# Donor fund tracking: Implementation Components

## Context
- Plug: Business Operations
- Module: Public Sector & NGOs
- Route base: operations/public-sector-and-ngos/donor-fund-tracking

## Screen-to-Component Matrix
1. Dashboard (`operations/public-sector-and-ngos/donor-fund-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/public-sector-and-ngos/donor-fund-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/public-sector-and-ngos/donor-fund-tracking/create`, `operations/public-sector-and-ngos/donor-fund-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/public-sector-and-ngos/donor-fund-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/public-sector-and-ngos/donor-fund-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/public-sector-and-ngos/donor-fund-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/public-sector-and-ngos/donor-fund-tracking/analytics`)
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
