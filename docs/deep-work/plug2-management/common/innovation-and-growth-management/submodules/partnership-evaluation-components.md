# Partnership evaluation: Implementation Components

## Context
- Plug: Management
- Module: Innovation & Growth Management
- Route base: management/innovation-and-growth-management/partnership-evaluation

## Screen-to-Component Matrix
1. Dashboard (`management/innovation-and-growth-management/partnership-evaluation/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/innovation-and-growth-management/partnership-evaluation/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/innovation-and-growth-management/partnership-evaluation/create`, `management/innovation-and-growth-management/partnership-evaluation/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/innovation-and-growth-management/partnership-evaluation/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/innovation-and-growth-management/partnership-evaluation/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/innovation-and-growth-management/partnership-evaluation/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/innovation-and-growth-management/partnership-evaluation/analytics`)
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
