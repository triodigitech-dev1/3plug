# Daily cash reconciliation: UI/UX Detailed Spec

## Context
- Plug: Business Operations
- Module: Financial Transaction Operations
- Route base: operations/financial-transaction-operations/daily-cash-reconciliation

## Screen Set
- operations/financial-transaction-operations/daily-cash-reconciliation/dashboard
- operations/financial-transaction-operations/daily-cash-reconciliation/list
- operations/financial-transaction-operations/daily-cash-reconciliation/create
- operations/financial-transaction-operations/daily-cash-reconciliation/detail/:id
- operations/financial-transaction-operations/daily-cash-reconciliation/edit/:id
- operations/financial-transaction-operations/daily-cash-reconciliation/approvals
- operations/financial-transaction-operations/daily-cash-reconciliation/reports
- operations/financial-transaction-operations/daily-cash-reconciliation/analytics

## Dashboard UX
- Snapshot KPIs
- Action shortcuts
- Risk/exception rail

## List UX
- Multi-filter toolbar
- Bulk actions and column controls
- Row-level actions with permission awareness

## Form UX (Create/Edit)
- Sectioned form groups
- Required/optional indicators
- Inline validation and save-as-draft

## Detail UX
- Header summary with status badge
- Timeline of transitions and approvals
- Related records panel

## Approval UX
- Decision panel (approve/reject/request changes)
- Mandatory reason for rejection/high-risk actions
- Escalation route visibility

## Report/Analytics UX
- Preset period filters
- Drilldown interactions
- Export and share actions

## Accessibility and Feedback
- Keyboard complete path
- Focus management on modal/dialog flows
- Clear success/error/offline messaging
- Loading skeletons and empty-state guidance
