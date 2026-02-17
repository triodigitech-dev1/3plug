# Equipment registration: Implementation Components

## Context
- Plug: Administration
- Module: Asset & Infrastructure Administration
- Route base: administration/asset-and-infrastructure-administration/equipment-registration

## Screen-to-Component Matrix
1. Dashboard (`administration/asset-and-infrastructure-administration/equipment-registration/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/asset-and-infrastructure-administration/equipment-registration/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/asset-and-infrastructure-administration/equipment-registration/create`, `administration/asset-and-infrastructure-administration/equipment-registration/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/asset-and-infrastructure-administration/equipment-registration/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/asset-and-infrastructure-administration/equipment-registration/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/asset-and-infrastructure-administration/equipment-registration/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/asset-and-infrastructure-administration/equipment-registration/analytics`)
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
