# Trade permit management: Implementation Components

## Context
- Plug: Administration
- Module: Retail & Commerce
- Route base: administration/retail-and-commerce/trade-permit-management

## Screen-to-Component Matrix
1. Dashboard (`administration/retail-and-commerce/trade-permit-management/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/retail-and-commerce/trade-permit-management/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/retail-and-commerce/trade-permit-management/create`, `administration/retail-and-commerce/trade-permit-management/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/retail-and-commerce/trade-permit-management/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/retail-and-commerce/trade-permit-management/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/retail-and-commerce/trade-permit-management/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/retail-and-commerce/trade-permit-management/analytics`)
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
