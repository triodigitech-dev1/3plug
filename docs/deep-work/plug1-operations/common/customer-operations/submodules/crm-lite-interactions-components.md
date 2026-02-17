# CRM-lite interactions: Implementation Components

## Context
- Plug: Business Operations
- Module: Customer Operations
- Route base: operations/customer-operations/crm-lite-interactions

## Screen-to-Component Matrix
1. Dashboard (`operations/customer-operations/crm-lite-interactions/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/customer-operations/crm-lite-interactions/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/customer-operations/crm-lite-interactions/create`, `operations/customer-operations/crm-lite-interactions/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/customer-operations/crm-lite-interactions/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/customer-operations/crm-lite-interactions/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/customer-operations/crm-lite-interactions/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/customer-operations/crm-lite-interactions/analytics`)
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
