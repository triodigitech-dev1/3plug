# Data protection compliance (privacy frameworks): Implementation Components

## Context
- Plug: Administration
- Module: Technology & SaaS
- Route base: administration/technology-and-saas/data-protection-compliance-privacy-frameworks

## Screen-to-Component Matrix
1. Dashboard (`administration/technology-and-saas/data-protection-compliance-privacy-frameworks/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/technology-and-saas/data-protection-compliance-privacy-frameworks/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/technology-and-saas/data-protection-compliance-privacy-frameworks/create`, `administration/technology-and-saas/data-protection-compliance-privacy-frameworks/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/technology-and-saas/data-protection-compliance-privacy-frameworks/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/technology-and-saas/data-protection-compliance-privacy-frameworks/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/technology-and-saas/data-protection-compliance-privacy-frameworks/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/technology-and-saas/data-protection-compliance-privacy-frameworks/analytics`)
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
