# Insurance coverage tracking: Implementation Components

## Context
- Plug: Management
- Module: Risk & Compliance Management
- Route base: management/risk-and-compliance-management/insurance-coverage-tracking

## Screen-to-Component Matrix
1. Dashboard (`management/risk-and-compliance-management/insurance-coverage-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/risk-and-compliance-management/insurance-coverage-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/risk-and-compliance-management/insurance-coverage-tracking/create`, `management/risk-and-compliance-management/insurance-coverage-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/risk-and-compliance-management/insurance-coverage-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/risk-and-compliance-management/insurance-coverage-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/risk-and-compliance-management/insurance-coverage-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/risk-and-compliance-management/insurance-coverage-tracking/analytics`)
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
