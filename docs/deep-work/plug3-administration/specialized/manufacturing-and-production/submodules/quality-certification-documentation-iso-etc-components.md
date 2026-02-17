# Quality certification documentation (ISO, etc.): Implementation Components

## Context
- Plug: Administration
- Module: Manufacturing & Production
- Route base: administration/manufacturing-and-production/quality-certification-documentation-iso-etc

## Screen-to-Component Matrix
1. Dashboard (`administration/manufacturing-and-production/quality-certification-documentation-iso-etc/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/manufacturing-and-production/quality-certification-documentation-iso-etc/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/manufacturing-and-production/quality-certification-documentation-iso-etc/create`, `administration/manufacturing-and-production/quality-certification-documentation-iso-etc/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/manufacturing-and-production/quality-certification-documentation-iso-etc/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/manufacturing-and-production/quality-certification-documentation-iso-etc/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/manufacturing-and-production/quality-certification-documentation-iso-etc/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/manufacturing-and-production/quality-certification-documentation-iso-etc/analytics`)
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
