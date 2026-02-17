# Financial ratio analysis: Implementation Components

## Context
- Plug: Management
- Module: Financial Oversight (Managerial Level)
- Route base: management/financial-oversight-managerial-level/financial-ratio-analysis

## Screen-to-Component Matrix
1. Dashboard (`management/financial-oversight-managerial-level/financial-ratio-analysis/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/financial-oversight-managerial-level/financial-ratio-analysis/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/financial-oversight-managerial-level/financial-ratio-analysis/create`, `management/financial-oversight-managerial-level/financial-ratio-analysis/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/financial-oversight-managerial-level/financial-ratio-analysis/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/financial-oversight-managerial-level/financial-ratio-analysis/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/financial-oversight-managerial-level/financial-ratio-analysis/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/financial-oversight-managerial-level/financial-ratio-analysis/analytics`)
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
