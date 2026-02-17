# Hostel billing operations: Implementation Components

## Context
- Plug: Business Operations
- Module: Education & Training
- Route base: operations/education-and-training/hostel-billing-operations

## Screen-to-Component Matrix
1. Dashboard (`operations/education-and-training/hostel-billing-operations/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/education-and-training/hostel-billing-operations/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/education-and-training/hostel-billing-operations/create`, `operations/education-and-training/hostel-billing-operations/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/education-and-training/hostel-billing-operations/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/education-and-training/hostel-billing-operations/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/education-and-training/hostel-billing-operations/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/education-and-training/hostel-billing-operations/analytics`)
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
