# Course package sales: Implementation Components

## Context
- Plug: Business Operations
- Module: Education & Training
- Route base: operations/education-and-training/course-package-sales

## Screen-to-Component Matrix
1. Dashboard (`operations/education-and-training/course-package-sales/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/education-and-training/course-package-sales/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/education-and-training/course-package-sales/create`, `operations/education-and-training/course-package-sales/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/education-and-training/course-package-sales/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/education-and-training/course-package-sales/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/education-and-training/course-package-sales/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/education-and-training/course-package-sales/analytics`)
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
