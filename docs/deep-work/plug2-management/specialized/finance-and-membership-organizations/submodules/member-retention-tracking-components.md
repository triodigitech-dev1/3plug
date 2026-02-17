# Member retention tracking: Implementation Components

## Context
- Plug: Management
- Module: Finance & Membership Organizations
- Route base: management/finance-and-membership-organizations/member-retention-tracking

## Screen-to-Component Matrix
1. Dashboard (`management/finance-and-membership-organizations/member-retention-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`management/finance-and-membership-organizations/member-retention-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`management/finance-and-membership-organizations/member-retention-tracking/create`, `management/finance-and-membership-organizations/member-retention-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`management/finance-and-membership-organizations/member-retention-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`management/finance-and-membership-organizations/member-retention-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`management/finance-and-membership-organizations/member-retention-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`management/finance-and-membership-organizations/member-retention-tracking/analytics`)
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
