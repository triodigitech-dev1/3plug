# Resource allocation decisions: Implementation Components

## Context
- Plug: Management
- Module: Operations Oversight
- Route base: management/operations-oversight/resource-allocation-decisions

## Screen-to-Component Matrix
1. Dashboard (`management/operations-oversight/resource-allocation-decisions/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/operations-oversight/resource-allocation-decisions/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/operations-oversight/resource-allocation-decisions/create`, `management/operations-oversight/resource-allocation-decisions/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/operations-oversight/resource-allocation-decisions/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/operations-oversight/resource-allocation-decisions/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/operations-oversight/resource-allocation-decisions/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/operations-oversight/resource-allocation-decisions/analytics`)
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
