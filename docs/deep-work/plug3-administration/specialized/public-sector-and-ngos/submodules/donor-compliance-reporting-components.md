# Donor compliance reporting: Implementation Components

## Context
- Plug: Administration
- Module: Public Sector & NGOs
- Route base: administration/public-sector-and-ngos/donor-compliance-reporting

## Screen-to-Component Matrix
1. Dashboard (`administration/public-sector-and-ngos/donor-compliance-reporting/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/public-sector-and-ngos/donor-compliance-reporting/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/public-sector-and-ngos/donor-compliance-reporting/create`, `administration/public-sector-and-ngos/donor-compliance-reporting/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/public-sector-and-ngos/donor-compliance-reporting/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/public-sector-and-ngos/donor-compliance-reporting/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/public-sector-and-ngos/donor-compliance-reporting/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/public-sector-and-ngos/donor-compliance-reporting/analytics`)
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
