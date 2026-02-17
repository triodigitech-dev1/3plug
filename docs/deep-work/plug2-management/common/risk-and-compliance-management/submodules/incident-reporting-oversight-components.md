# Incident reporting oversight: Implementation Components

## Context
- Plug: Management
- Module: Risk & Compliance Management
- Route base: management/risk-and-compliance-management/incident-reporting-oversight

## Screen-to-Component Matrix
1. Dashboard (`management/risk-and-compliance-management/incident-reporting-oversight/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/risk-and-compliance-management/incident-reporting-oversight/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/risk-and-compliance-management/incident-reporting-oversight/create`, `management/risk-and-compliance-management/incident-reporting-oversight/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/risk-and-compliance-management/incident-reporting-oversight/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/risk-and-compliance-management/incident-reporting-oversight/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/risk-and-compliance-management/incident-reporting-oversight/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/risk-and-compliance-management/incident-reporting-oversight/analytics`)
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
