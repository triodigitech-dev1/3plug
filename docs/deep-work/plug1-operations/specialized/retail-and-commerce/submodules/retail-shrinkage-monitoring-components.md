# Retail shrinkage monitoring: Implementation Components

## Context
- Plug: Business Operations
- Module: Retail & Commerce
- Route base: operations/retail-and-commerce/retail-shrinkage-monitoring

## Screen-to-Component Matrix
1. Dashboard (`operations/retail-and-commerce/retail-shrinkage-monitoring/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/retail-and-commerce/retail-shrinkage-monitoring/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/retail-and-commerce/retail-shrinkage-monitoring/create`, `operations/retail-and-commerce/retail-shrinkage-monitoring/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/retail-and-commerce/retail-shrinkage-monitoring/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/retail-and-commerce/retail-shrinkage-monitoring/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/retail-and-commerce/retail-shrinkage-monitoring/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/retail-and-commerce/retail-shrinkage-monitoring/analytics`)
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
