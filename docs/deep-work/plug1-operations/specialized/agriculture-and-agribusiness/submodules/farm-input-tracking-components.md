# Farm input tracking: Implementation Components

## Context
- Plug: Business Operations
- Module: Agriculture & Agribusiness
- Route base: operations/agriculture-and-agribusiness/farm-input-tracking

## Screen-to-Component Matrix
1. Dashboard (`operations/agriculture-and-agribusiness/farm-input-tracking/dashboard`)
- SubmoduleKpiCards
- SubmoduleActionShortcuts
- SubmoduleRiskRail

2. List (`operations/agriculture-and-agribusiness/farm-input-tracking/list`)
- FilterToolbar
- DataTable + BulkActionsBar
- ColumnVisibilityPanel + Pagination

3. Create/Edit (`operations/agriculture-and-agribusiness/farm-input-tracking/create`, `operations/agriculture-and-agribusiness/farm-input-tracking/edit/:id`)
- FormSection + FormFields
- ValidationSummary
- SaveDraftBar

4. Detail (`operations/agriculture-and-agribusiness/farm-input-tracking/detail/:id`)
- DetailHeader + StatusBadge
- TimelinePanel
- RelatedRecordsPanel

5. Approvals (`operations/agriculture-and-agribusiness/farm-input-tracking/approvals`)
- ApprovalQueueTable
- DecisionForm (approve/reject/escalate)
- MandatoryReasonModal

6. Reports (`operations/agriculture-and-agribusiness/farm-input-tracking/reports`)
- ReportFilters
- ReportResultsTable
- ExportButtons

7. Analytics (`operations/agriculture-and-agribusiness/farm-input-tracking/analytics`)
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
