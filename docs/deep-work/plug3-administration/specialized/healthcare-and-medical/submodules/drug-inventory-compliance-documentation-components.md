# Drug inventory compliance documentation: Implementation Components

## Context
- Plug: Administration
- Module: Healthcare & Medical
- Route base: administration/healthcare-and-medical/drug-inventory-compliance-documentation

## Screen-to-Component Matrix
1. Dashboard (`administration/healthcare-and-medical/drug-inventory-compliance-documentation/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/healthcare-and-medical/drug-inventory-compliance-documentation/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/healthcare-and-medical/drug-inventory-compliance-documentation/create`, `administration/healthcare-and-medical/drug-inventory-compliance-documentation/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/healthcare-and-medical/drug-inventory-compliance-documentation/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/healthcare-and-medical/drug-inventory-compliance-documentation/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/healthcare-and-medical/drug-inventory-compliance-documentation/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/healthcare-and-medical/drug-inventory-compliance-documentation/analytics`)
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
