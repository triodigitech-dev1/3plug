# Equipment allocation: Implementation Components

## Context
- Plug: Business Operations
- Module: Construction & Real Estate
- Route base: operations/construction-and-real-estate/equipment-allocation

## Screen-to-Component Matrix
1. Dashboard (`operations/construction-and-real-estate/equipment-allocation/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/construction-and-real-estate/equipment-allocation/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/construction-and-real-estate/equipment-allocation/create`, `operations/construction-and-real-estate/equipment-allocation/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/construction-and-real-estate/equipment-allocation/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/construction-and-real-estate/equipment-allocation/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/construction-and-real-estate/equipment-allocation/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/construction-and-real-estate/equipment-allocation/analytics`)
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
