# Engagement letter storage: Implementation Components

## Context
- Plug: Administration
- Module: Professional Services
- Route base: administration/professional-services/engagement-letter-storage

## Screen-to-Component Matrix
1. Dashboard (`administration/professional-services/engagement-letter-storage/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/professional-services/engagement-letter-storage/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/professional-services/engagement-letter-storage/create`, `administration/professional-services/engagement-letter-storage/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/professional-services/engagement-letter-storage/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/professional-services/engagement-letter-storage/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/professional-services/engagement-letter-storage/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/professional-services/engagement-letter-storage/analytics`)
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
