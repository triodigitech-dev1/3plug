# Supply chain bottleneck analysis: Implementation Components

## Context
- Plug: Management
- Module: Distribution & Logistics
- Route base: management/distribution-and-logistics/supply-chain-bottleneck-analysis

## Screen-to-Component Matrix
1. Dashboard (`management/distribution-and-logistics/supply-chain-bottleneck-analysis/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/distribution-and-logistics/supply-chain-bottleneck-analysis/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/distribution-and-logistics/supply-chain-bottleneck-analysis/create`, `management/distribution-and-logistics/supply-chain-bottleneck-analysis/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/distribution-and-logistics/supply-chain-bottleneck-analysis/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/distribution-and-logistics/supply-chain-bottleneck-analysis/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/distribution-and-logistics/supply-chain-bottleneck-analysis/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/distribution-and-logistics/supply-chain-bottleneck-analysis/analytics`)
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
