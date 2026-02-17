# Student enrollment billing: Implementation Components

## Context
- Plug: Business Operations
- Module: Education & Training
- Route base: operations/education-and-training/student-enrollment-billing

## Screen-to-Component Matrix
1. Dashboard (`operations/education-and-training/student-enrollment-billing/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/education-and-training/student-enrollment-billing/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/education-and-training/student-enrollment-billing/create`, `operations/education-and-training/student-enrollment-billing/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/education-and-training/student-enrollment-billing/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/education-and-training/student-enrollment-billing/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/education-and-training/student-enrollment-billing/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/education-and-training/student-enrollment-billing/analytics`)
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
