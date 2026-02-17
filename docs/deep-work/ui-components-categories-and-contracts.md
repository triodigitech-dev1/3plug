# UI Components: Common vs Unique (Categories, Subcomponents, Data Contracts)

## Purpose
Define the final merged component model for implementation:
1. Common reusable components
2. Unique plug/module/submodule components
3. Data contracts (what each component receives, emits, and triggers)

## Contract Format (Use for Every Component)
- `Inputs (props)`:
- `Data Source`:
- `Outputs (events/callbacks)`:
- `Side Activities`:
- `Subcomponents`:

## 1) Common UI Components (Shared Across All Plugs)

### A. Layout and Shell
#### `AppShell`
- Inputs (props): `title`, `children`, `statusContext`
- Data Source: app route context + session context
- Outputs (events/callbacks): `onNavigate`, `onGlobalSearch`
- Side Activities: layout persistence (collapsed sidebar, panel sizes)
- Subcomponents: `TopBar`, `SidebarNav`, `MainCanvas`, `FooterStatus`

#### `TopBar`
- Inputs: `branch`, `user`, `onlineState`, `quickActions`
- Data Source: auth/session + connectivity store
- Outputs: `onActionClick(actionId)`, `onOpenCommandPalette`
- Side Activities: keyboard shortcuts, global notifications
- Subcomponents: `ContextBadge`, `ActionButtonGroup`, `SearchInput`

### B. Navigation
#### `SidebarNav`
- Inputs: `treeItems`, `activePath`, `collapsed`
- Data Source: module registry
- Outputs: `onSelect(path)`, `onToggleCollapse`
- Side Activities: remember expanded sections per user
- Subcomponents: `NavSection`, `NavItem`, `CollapseToggle`

#### `BreadcrumbTrail`
- Inputs: `items[]`
- Data Source: route resolver
- Outputs: `onNavigate(path)`
- Side Activities: none
- Subcomponents: `BreadcrumbItem`

### C. Data Display
#### `SmartDataTable`
- Inputs: `columns`, `rows`, `pagination`, `sort`, `filters`, `selection`
- Data Source: API list endpoints
- Outputs: `onFilterChange`, `onSortChange`, `onPageChange`, `onRowAction`
- Side Activities: column preference persistence
- Subcomponents: `TableToolbar`, `TableHeader`, `TableBody`, `BulkActionsBar`, `Pagination`

#### `KpiCard` and `KpiGrid`
- Inputs: `label`, `value`, `trend`, `status`
- Data Source: summary endpoints
- Outputs: `onDrilldown(metricId)`
- Side Activities: threshold highlighting
- Subcomponents: `TrendBadge`, `DeltaChip`

### D. Forms and Actions
#### `EntityForm`
- Inputs: `schema`, `initialValues`, `mode(create|edit)`, `permissions`
- Data Source: schema metadata + detail endpoint
- Outputs: `onSaveDraft`, `onSubmit`, `onCancel`
- Side Activities: autosave draft, dirty-state guard
- Subcomponents: `FormSection`, `FieldRenderer`, `ValidationSummary`, `ActionBar`

#### `ApprovalDecisionPanel`
- Inputs: `requestId`, `allowedActions`, `requiresReason`
- Data Source: approval queue endpoint
- Outputs: `onApprove`, `onReject`, `onEscalate`
- Side Activities: mandatory reason capture + audit note
- Subcomponents: `DecisionButtons`, `ReasonModal`, `EscalationSelector`

### E. Reporting and Analytics
#### `ReportWorkspace`
- Inputs: `reportId`, `filters`, `columns`
- Data Source: reporting endpoints
- Outputs: `onRunReport`, `onExport(format)`
- Side Activities: saved report presets
- Subcomponents: `ReportFilterBar`, `ResultsTable`, `ExportActions`

#### `AnalyticsWorkspace`
- Inputs: `metricSet`, `timeRange`, `groupBy`
- Data Source: analytics endpoints
- Outputs: `onTimeRangeChange`, `onDrilldown`
- Side Activities: anomaly flag rendering
- Subcomponents: `TrendChartPanel`, `VarianceCards`, `AnomalyList`

### F. Reliability and System States
#### `AsyncStateBoundary`
- Inputs: `loading`, `error`, `empty`, `children`
- Data Source: request state from hooks
- Outputs: `onRetry`
- Side Activities: telemetry for request failures
- Subcomponents: `LoadingSkeleton`, `ErrorState`, `EmptyState`

#### `OfflineSyncIndicator`
- Inputs: `queueDepth`, `lastSyncAt`, `conflicts`
- Data Source: sync engine store
- Outputs: `onOpenSyncPanel`, `onRetrySync`
- Side Activities: polling sync health
- Subcomponents: `SyncBadge`, `ConflictPanel`

## 2) Unique UI Components (By Plug)

### A. Plug 1: Business Operations
#### Category: POS and Frontline Execution
- Components:
- `PosRegisterWorkspace`
- `CartLineEditor`
- `SplitPaymentPanel`
- `CashDrawerPanel`
- `ReceiptCenter`
- `ShiftCloseWizard`
- Data contracts:
- Input data: product catalog, tax rules, active session, cart lines, payment methods
- Output events: add/remove line, apply discount, submit payment, print receipt, close shift
- Side activities: offline queue enqueue, drawer reconciliation checks, audit posting events

#### Category: Operations Control
- Components:
- `OperationsExceptionsBoard`
- `StockRiskPanel`
- `ApprovalQueueOps`
- Data contracts:
- Input data: alerts stream, pending approvals, risk counters
- Output events: open issue, assign owner, escalate approval

### B. Plug 2: Management
#### Category: Strategic and Performance
- Components:
- `StrategyKpiBoard`
- `ObjectiveProgressMatrix`
- `VarianceExplorer`
- `ExecutiveSummaryPanel`
- Data contracts:
- Input data: KPI aggregates, targets, baseline, forecast
- Output events: drilldown, compare period, export summary
- Side activities: scenario snapshots, executive audit notes

#### Category: Governance Oversight
- Components:
- `RiskPostureHeatmap`
- `ComplianceTrendPanel`
- `DecisionQueueManager`
- Data contracts:
- Input data: risk incidents, compliance metrics, unresolved decisions
- Output events: assign decision owner, set priority, approve governance item

### C. Plug 3: Administration
#### Category: Finance/HR/Legal Administration
- Components:
- `LedgerControlWorkspace`
- `PolicyComplianceBoard`
- `DocumentRegistryPanel`
- `ContractLifecycleTracker`
- Data contracts:
- Input data: ledger status, policy controls, documents, contracts
- Output events: create/update record, submit approval, mark compliance action
- Side activities: compliance timestamping, archival hooks, immutable audit

#### Category: Records and Controls
- Components:
- `RecordsRetentionPanel`
- `InsuranceRiskTracker`
- `InternalControlChecklist`
- Data contracts:
- Input data: retention rules, risk logs, control checklists
- Output events: acknowledge item, create incident, close control action

## 3) Unique UI Components (By Module/Submodule)

### Pattern
- Each module gets a `ModuleWorkspace` + `ComponentKits`
- Each submodule gets:
- `SubmoduleWorkspace`
- `ScreenChecklist`
- `RouteMap`

### Required files (already scaffolded in `src/features`)
- `<ModuleName>ModuleWorkspace.jsx`
- `<ModuleName>ComponentKits.jsx`
- `SubmoduleXXXXXXXXWorkspace.jsx`
- `SubmoduleXXXXXXXXChecklist.js`

## 4) Data Passing and Getting Rules

### Read Flow
1. Page -> hook (`useXxxData`)
2. Hook -> API client (`core/api/*`)
3. API -> DTO normalize
4. DTO -> component props

### Write Flow
1. Component action -> callback
2. Callback -> command API (`create/update/submit/approve/post`)
3. Response -> state update + toast
4. Audit + activity log event emitted

### State Ownership
- Server state: React query/store hooks
- UI state: local component state
- Cross-screen context: session/branch/auth/sync stores

## 5) Component Categories to Build First
1. Common primitives: table/form/modal/approval/state boundary
2. Plug 1 POS execution components
3. Plug 1 compliance and approval components
4. Plug 2 KPI/variance/decision components
5. Plug 3 records/compliance/ledger components

## 6) Implementation Checklist (Per Component)
- Contract defined (inputs/outputs/activities)
- Data hook connected
- Loading/empty/error/offline states
- RBAC visibility checks
- Audit event emission on write actions
- Unit test for render + callbacks
- Integration test for data flow
