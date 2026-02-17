# Subscription contract governance: Implementation Components

## Context
- Plug: Administration
- Module: Technology & SaaS
- Route base: administration/technology-and-saas/subscription-contract-governance

## Screen-to-Component Matrix
1. Dashboard (`administration/technology-and-saas/subscription-contract-governance/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/technology-and-saas/subscription-contract-governance/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/technology-and-saas/subscription-contract-governance/create`, `administration/technology-and-saas/subscription-contract-governance/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/technology-and-saas/subscription-contract-governance/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/technology-and-saas/subscription-contract-governance/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/technology-and-saas/subscription-contract-governance/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/technology-and-saas/subscription-contract-governance/analytics`)
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
