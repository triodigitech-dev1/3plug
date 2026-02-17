# Client confidentiality agreements: Implementation Components

## Context
- Plug: Administration
- Module: Professional Services
- Route base: administration/professional-services/client-confidentiality-agreements

## Screen-to-Component Matrix
1. Dashboard (`administration/professional-services/client-confidentiality-agreements/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/professional-services/client-confidentiality-agreements/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/professional-services/client-confidentiality-agreements/create`, `administration/professional-services/client-confidentiality-agreements/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/professional-services/client-confidentiality-agreements/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/professional-services/client-confidentiality-agreements/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/professional-services/client-confidentiality-agreements/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/professional-services/client-confidentiality-agreements/analytics`)
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
