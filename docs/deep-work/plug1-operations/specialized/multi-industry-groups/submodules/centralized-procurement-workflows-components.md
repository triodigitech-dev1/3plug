# Centralized procurement workflows: Implementation Components

## Context
- Plug: Business Operations
- Module: Multi-Industry Groups
- Route base: operations/multi-industry-groups/centralized-procurement-workflows

## Screen-to-Component Matrix
1. Dashboard (`operations/multi-industry-groups/centralized-procurement-workflows/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/multi-industry-groups/centralized-procurement-workflows/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/multi-industry-groups/centralized-procurement-workflows/create`, `operations/multi-industry-groups/centralized-procurement-workflows/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/multi-industry-groups/centralized-procurement-workflows/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/multi-industry-groups/centralized-procurement-workflows/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/multi-industry-groups/centralized-procurement-workflows/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/multi-industry-groups/centralized-procurement-workflows/analytics`)
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
