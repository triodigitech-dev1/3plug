# Usage-based billing: Implementation Components

## Context
- Plug: Business Operations
- Module: Technology & SaaS
- Route base: operations/technology-and-saas/usage-based-billing

## Screen-to-Component Matrix
1. Dashboard (`operations/technology-and-saas/usage-based-billing/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/technology-and-saas/usage-based-billing/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/technology-and-saas/usage-based-billing/create`, `operations/technology-and-saas/usage-based-billing/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/technology-and-saas/usage-based-billing/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/technology-and-saas/usage-based-billing/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/technology-and-saas/usage-based-billing/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/technology-and-saas/usage-based-billing/analytics`)
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
