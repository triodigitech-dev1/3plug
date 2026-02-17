# Program expansion feasibility analysis: Implementation Components

## Context
- Plug: Management
- Module: Education & Training
- Route base: management/education-and-training/program-expansion-feasibility-analysis

## Screen-to-Component Matrix
1. Dashboard (`management/education-and-training/program-expansion-feasibility-analysis/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/education-and-training/program-expansion-feasibility-analysis/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/education-and-training/program-expansion-feasibility-analysis/create`, `management/education-and-training/program-expansion-feasibility-analysis/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/education-and-training/program-expansion-feasibility-analysis/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/education-and-training/program-expansion-feasibility-analysis/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/education-and-training/program-expansion-feasibility-analysis/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/education-and-training/program-expansion-feasibility-analysis/analytics`)
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
