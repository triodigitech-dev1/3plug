# Commission payout tracking: Implementation Components

## Context
- Plug: Business Operations
- Module: Finance & Membership Organizations
- Route base: operations/finance-and-membership-organizations/commission-payout-tracking

## Screen-to-Component Matrix
1. Dashboard (`operations/finance-and-membership-organizations/commission-payout-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/finance-and-membership-organizations/commission-payout-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/finance-and-membership-organizations/commission-payout-tracking/create`, `operations/finance-and-membership-organizations/commission-payout-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/finance-and-membership-organizations/commission-payout-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/finance-and-membership-organizations/commission-payout-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/finance-and-membership-organizations/commission-payout-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/finance-and-membership-organizations/commission-payout-tracking/analytics`)
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
