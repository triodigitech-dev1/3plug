# Investment evaluation: Implementation Components

## Context
- Plug: Management
- Module: Financial Oversight (Managerial Level)
- Route base: management/financial-oversight-managerial-level/investment-evaluation

## Screen-to-Component Matrix
1. Dashboard (`management/financial-oversight-managerial-level/investment-evaluation/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/financial-oversight-managerial-level/investment-evaluation/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/financial-oversight-managerial-level/investment-evaluation/create`, `management/financial-oversight-managerial-level/investment-evaluation/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/financial-oversight-managerial-level/investment-evaluation/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/financial-oversight-managerial-level/investment-evaluation/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/financial-oversight-managerial-level/investment-evaluation/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/financial-oversight-managerial-level/investment-evaluation/analytics`)
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
