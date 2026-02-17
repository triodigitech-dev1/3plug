# Client billing automation: Implementation Components

## Context
- Plug: Business Operations
- Module: Professional Services
- Route base: operations/professional-services/client-billing-automation

## Screen-to-Component Matrix
1. Dashboard (`operations/professional-services/client-billing-automation/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/professional-services/client-billing-automation/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/professional-services/client-billing-automation/create`, `operations/professional-services/client-billing-automation/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/professional-services/client-billing-automation/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/professional-services/client-billing-automation/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/professional-services/client-billing-automation/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/professional-services/client-billing-automation/analytics`)
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
