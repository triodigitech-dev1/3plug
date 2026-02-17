# Shared services efficiency analysis: Implementation Components

## Context
- Plug: Management
- Module: Multi-Industry Groups
- Route base: management/multi-industry-groups/shared-services-efficiency-analysis

## Screen-to-Component Matrix
1. Dashboard (`management/multi-industry-groups/shared-services-efficiency-analysis/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/multi-industry-groups/shared-services-efficiency-analysis/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/multi-industry-groups/shared-services-efficiency-analysis/create`, `management/multi-industry-groups/shared-services-efficiency-analysis/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/multi-industry-groups/shared-services-efficiency-analysis/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/multi-industry-groups/shared-services-efficiency-analysis/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/multi-industry-groups/shared-services-efficiency-analysis/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/multi-industry-groups/shared-services-efficiency-analysis/analytics`)
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
