# Seasonal risk modeling: Implementation Components

## Context
- Plug: Management
- Module: Agriculture & Agribusiness
- Route base: management/agriculture-and-agribusiness/seasonal-risk-modeling

## Screen-to-Component Matrix
1. Dashboard (`management/agriculture-and-agribusiness/seasonal-risk-modeling/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/agriculture-and-agribusiness/seasonal-risk-modeling/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/agriculture-and-agribusiness/seasonal-risk-modeling/create`, `management/agriculture-and-agribusiness/seasonal-risk-modeling/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/agriculture-and-agribusiness/seasonal-risk-modeling/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/agriculture-and-agribusiness/seasonal-risk-modeling/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/agriculture-and-agribusiness/seasonal-risk-modeling/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/agriculture-and-agribusiness/seasonal-risk-modeling/analytics`)
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
