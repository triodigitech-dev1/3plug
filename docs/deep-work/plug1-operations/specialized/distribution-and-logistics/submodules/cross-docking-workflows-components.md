# Cross-docking workflows: Implementation Components

## Context
- Plug: Business Operations
- Module: Distribution & Logistics
- Route base: operations/distribution-and-logistics/cross-docking-workflows

## Screen-to-Component Matrix
1. Dashboard (`operations/distribution-and-logistics/cross-docking-workflows/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/distribution-and-logistics/cross-docking-workflows/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/distribution-and-logistics/cross-docking-workflows/create`, `operations/distribution-and-logistics/cross-docking-workflows/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/distribution-and-logistics/cross-docking-workflows/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/distribution-and-logistics/cross-docking-workflows/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/distribution-and-logistics/cross-docking-workflows/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/distribution-and-logistics/cross-docking-workflows/analytics`)
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
