# Multi-warehouse management: Implementation Components

## Context
- Plug: Business Operations
- Module: Inventory & Stock Operations
- Route base: operations/inventory-and-stock-operations/multi-warehouse-management

## Screen-to-Component Matrix
1. Dashboard (`operations/inventory-and-stock-operations/multi-warehouse-management/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/inventory-and-stock-operations/multi-warehouse-management/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/inventory-and-stock-operations/multi-warehouse-management/create`, `operations/inventory-and-stock-operations/multi-warehouse-management/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/inventory-and-stock-operations/multi-warehouse-management/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/inventory-and-stock-operations/multi-warehouse-management/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/inventory-and-stock-operations/multi-warehouse-management/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/inventory-and-stock-operations/multi-warehouse-management/analytics`)
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
