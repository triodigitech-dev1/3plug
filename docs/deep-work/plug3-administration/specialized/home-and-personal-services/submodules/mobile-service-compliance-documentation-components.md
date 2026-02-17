# Mobile service compliance documentation: Implementation Components

## Context
- Plug: Administration
- Module: Home & Personal Services
- Route base: administration/home-and-personal-services/mobile-service-compliance-documentation

## Screen-to-Component Matrix
1. Dashboard (`administration/home-and-personal-services/mobile-service-compliance-documentation/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`administration/home-and-personal-services/mobile-service-compliance-documentation/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`administration/home-and-personal-services/mobile-service-compliance-documentation/create`, `administration/home-and-personal-services/mobile-service-compliance-documentation/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`administration/home-and-personal-services/mobile-service-compliance-documentation/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`administration/home-and-personal-services/mobile-service-compliance-documentation/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`administration/home-and-personal-services/mobile-service-compliance-documentation/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`administration/home-and-personal-services/mobile-service-compliance-documentation/analytics`)
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
