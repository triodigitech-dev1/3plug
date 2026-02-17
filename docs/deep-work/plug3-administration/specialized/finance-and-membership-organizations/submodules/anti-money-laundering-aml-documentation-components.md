# Anti-money laundering (AML) documentation: Implementation Components

## Context
- Plug: Administration
- Module: Finance & Membership Organizations
- Route base: administration/finance-and-membership-organizations/anti-money-laundering-aml-documentation

## Screen-to-Component Matrix
1. Dashboard (`administration/finance-and-membership-organizations/anti-money-laundering-aml-documentation/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/finance-and-membership-organizations/anti-money-laundering-aml-documentation/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/finance-and-membership-organizations/anti-money-laundering-aml-documentation/create`, `administration/finance-and-membership-organizations/anti-money-laundering-aml-documentation/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/finance-and-membership-organizations/anti-money-laundering-aml-documentation/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/finance-and-membership-organizations/anti-money-laundering-aml-documentation/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/finance-and-membership-organizations/anti-money-laundering-aml-documentation/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/finance-and-membership-organizations/anti-money-laundering-aml-documentation/analytics`)
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
