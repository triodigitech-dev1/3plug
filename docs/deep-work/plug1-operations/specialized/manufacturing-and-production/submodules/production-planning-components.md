# Production planning: Implementation Components

## Context
- Plug: Business Operations
- Module: Manufacturing & Production
- Route base: operations/manufacturing-and-production/production-planning

## Screen-to-Component Matrix
1. Dashboard (`operations/manufacturing-and-production/production-planning/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/manufacturing-and-production/production-planning/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/manufacturing-and-production/production-planning/create`, `operations/manufacturing-and-production/production-planning/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/manufacturing-and-production/production-planning/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/manufacturing-and-production/production-planning/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/manufacturing-and-production/production-planning/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/manufacturing-and-production/production-planning/analytics`)
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
