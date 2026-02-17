# Patient registration (non-clinical ops): Implementation Components

## Context
- Plug: Business Operations
- Module: Healthcare & Medical
- Route base: operations/healthcare-and-medical/patient-registration-non-clinical-ops

## Screen-to-Component Matrix
1. Dashboard (`operations/healthcare-and-medical/patient-registration-non-clinical-ops/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/healthcare-and-medical/patient-registration-non-clinical-ops/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/healthcare-and-medical/patient-registration-non-clinical-ops/create`, `operations/healthcare-and-medical/patient-registration-non-clinical-ops/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/healthcare-and-medical/patient-registration-non-clinical-ops/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/healthcare-and-medical/patient-registration-non-clinical-ops/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/healthcare-and-medical/patient-registration-non-clinical-ops/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/healthcare-and-medical/patient-registration-non-clinical-ops/analytics`)
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
