# Business Operations: UI Component Architecture

## Purpose
Define reusable component system required to implement all pages in this plug.

## Global Layout Components
- AppShell (header, footer, internal scrolling canvas)
- StickyHeader (context, global actions, search)
- SidebarNav (module/submodule tree, collapse states)
- BreadcrumbTrail
- ContextStatusBar (branch/session/connectivity/offline queue)

## Navigation Components
- ModuleNavTabs
- QuickActionRail
- CommandPalette
- RecentViewsList

## Core Data Components
- SmartDataTable (filter/sort/paginate/column visibility/bulk actions)
- EntityCardGrid
- ActivityTimeline
- MetricsKpiRow + TrendBadge

## Form Components
- FormSection, FormFieldGroup, FormErrorSummary
- Input/select/multi-select/date/time/date-range/currency/percentage
- ApprovalDecisionPanel (approve/reject/escalate + reason)

## Overlay Components
- Modal, FullscreenModal, Drawer, BottomSheet, ConfirmDialog
- Toast, AlertBanner, InlineWarning

## Reporting and Analytics Components
- ReportFilterBar
- ReportTable + ExportActions
- TrendChart, VarianceChart, AnomalyList

## Reliability Components
- LoadingSkeleton, EmptyState, ErrorState
- OfflineQueueIndicator + SyncConflictPanel
- AuditTrailViewer

## Accessibility Requirements
- Keyboard navigable interactions
- Focus ring and skip links
- Large target sizes for critical actions
- Clear text labels and helper content
