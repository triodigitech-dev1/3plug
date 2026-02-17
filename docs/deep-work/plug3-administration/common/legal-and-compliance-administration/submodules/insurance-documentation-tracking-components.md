# Insurance documentation tracking: Implementation Components

## Context
- Plug: Administration
- Module: Legal & Compliance Administration
- Route base: administration/legal-and-compliance-administration/insurance-documentation-tracking

## Screen-to-Component Matrix
1. Dashboard (`administration/legal-and-compliance-administration/insurance-documentation-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/legal-and-compliance-administration/insurance-documentation-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/legal-and-compliance-administration/insurance-documentation-tracking/create`, `administration/legal-and-compliance-administration/insurance-documentation-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/legal-and-compliance-administration/insurance-documentation-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/legal-and-compliance-administration/insurance-documentation-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/legal-and-compliance-administration/insurance-documentation-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/legal-and-compliance-administration/insurance-documentation-tracking/analytics`)
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
