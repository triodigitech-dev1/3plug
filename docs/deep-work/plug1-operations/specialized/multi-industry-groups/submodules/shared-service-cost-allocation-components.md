# Shared service cost allocation: Implementation Components

## Context
- Plug: Business Operations
- Module: Multi-Industry Groups
- Route base: operations/multi-industry-groups/shared-service-cost-allocation

## Screen-to-Component Matrix
1. Dashboard (`operations/multi-industry-groups/shared-service-cost-allocation/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/multi-industry-groups/shared-service-cost-allocation/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/multi-industry-groups/shared-service-cost-allocation/create`, `operations/multi-industry-groups/shared-service-cost-allocation/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/multi-industry-groups/shared-service-cost-allocation/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/multi-industry-groups/shared-service-cost-allocation/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/multi-industry-groups/shared-service-cost-allocation/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/multi-industry-groups/shared-service-cost-allocation/analytics`)
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
