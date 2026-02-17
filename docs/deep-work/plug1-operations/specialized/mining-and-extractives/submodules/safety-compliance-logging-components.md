# Safety compliance logging: Implementation Components

## Context
- Plug: Business Operations
- Module: Mining & Extractives
- Route base: operations/mining-and-extractives/safety-compliance-logging

## Screen-to-Component Matrix
1. Dashboard (`operations/mining-and-extractives/safety-compliance-logging/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/mining-and-extractives/safety-compliance-logging/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/mining-and-extractives/safety-compliance-logging/create`, `operations/mining-and-extractives/safety-compliance-logging/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/mining-and-extractives/safety-compliance-logging/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/mining-and-extractives/safety-compliance-logging/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/mining-and-extractives/safety-compliance-logging/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/mining-and-extractives/safety-compliance-logging/analytics`)
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
