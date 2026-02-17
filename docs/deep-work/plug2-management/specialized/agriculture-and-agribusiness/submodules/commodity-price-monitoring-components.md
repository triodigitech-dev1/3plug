# Commodity price monitoring: Implementation Components

## Context
- Plug: Management
- Module: Agriculture & Agribusiness
- Route base: management/agriculture-and-agribusiness/commodity-price-monitoring

## Screen-to-Component Matrix
1. Dashboard (`management/agriculture-and-agribusiness/commodity-price-monitoring/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/agriculture-and-agribusiness/commodity-price-monitoring/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/agriculture-and-agribusiness/commodity-price-monitoring/create`, `management/agriculture-and-agribusiness/commodity-price-monitoring/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/agriculture-and-agribusiness/commodity-price-monitoring/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/agriculture-and-agribusiness/commodity-price-monitoring/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/agriculture-and-agribusiness/commodity-price-monitoring/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/agriculture-and-agribusiness/commodity-price-monitoring/analytics`)
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
