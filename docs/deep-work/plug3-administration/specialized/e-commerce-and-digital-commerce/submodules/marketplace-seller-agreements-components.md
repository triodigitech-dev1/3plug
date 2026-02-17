# Marketplace seller agreements: Implementation Components

## Context
- Plug: Administration
- Module: E-commerce & Digital Commerce
- Route base: administration/e-commerce-and-digital-commerce/marketplace-seller-agreements

## Screen-to-Component Matrix
1. Dashboard (`administration/e-commerce-and-digital-commerce/marketplace-seller-agreements/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/e-commerce-and-digital-commerce/marketplace-seller-agreements/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/e-commerce-and-digital-commerce/marketplace-seller-agreements/create`, `administration/e-commerce-and-digital-commerce/marketplace-seller-agreements/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/e-commerce-and-digital-commerce/marketplace-seller-agreements/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/e-commerce-and-digital-commerce/marketplace-seller-agreements/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/e-commerce-and-digital-commerce/marketplace-seller-agreements/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/e-commerce-and-digital-commerce/marketplace-seller-agreements/analytics`)
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
