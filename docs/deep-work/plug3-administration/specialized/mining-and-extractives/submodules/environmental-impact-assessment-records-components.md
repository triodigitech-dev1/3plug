# Environmental impact assessment records: Implementation Components

## Context
- Plug: Administration
- Module: Mining & Extractives
- Route base: administration/mining-and-extractives/environmental-impact-assessment-records

## Screen-to-Component Matrix
1. Dashboard (`administration/mining-and-extractives/environmental-impact-assessment-records/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/mining-and-extractives/environmental-impact-assessment-records/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/mining-and-extractives/environmental-impact-assessment-records/create`, `administration/mining-and-extractives/environmental-impact-assessment-records/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/mining-and-extractives/environmental-impact-assessment-records/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/mining-and-extractives/environmental-impact-assessment-records/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/mining-and-extractives/environmental-impact-assessment-records/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/mining-and-extractives/environmental-impact-assessment-records/analytics`)
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
