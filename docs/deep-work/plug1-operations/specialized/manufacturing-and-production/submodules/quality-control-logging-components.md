# Quality control logging: Implementation Components

## Context
- Plug: Business Operations
- Module: Manufacturing & Production
- Route base: operations/manufacturing-and-production/quality-control-logging

## Screen-to-Component Matrix
1. Dashboard (`operations/manufacturing-and-production/quality-control-logging/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/manufacturing-and-production/quality-control-logging/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/manufacturing-and-production/quality-control-logging/create`, `operations/manufacturing-and-production/quality-control-logging/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/manufacturing-and-production/quality-control-logging/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/manufacturing-and-production/quality-control-logging/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/manufacturing-and-production/quality-control-logging/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/manufacturing-and-production/quality-control-logging/analytics`)
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
