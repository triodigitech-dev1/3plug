# Shrinkage management oversight: Implementation Components

## Context
- Plug: Management
- Module: Retail & Commerce
- Route base: management/retail-and-commerce/shrinkage-management-oversight

## Screen-to-Component Matrix
1. Dashboard (`management/retail-and-commerce/shrinkage-management-oversight/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/retail-and-commerce/shrinkage-management-oversight/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/retail-and-commerce/shrinkage-management-oversight/create`, `management/retail-and-commerce/shrinkage-management-oversight/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/retail-and-commerce/shrinkage-management-oversight/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/retail-and-commerce/shrinkage-management-oversight/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/retail-and-commerce/shrinkage-management-oversight/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/retail-and-commerce/shrinkage-management-oversight/analytics`)
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
