# Bank reconciliation (operational level): UI/UX Detailed Spec

## Context
- Plug: Business Operations
- Module: Financial Transaction Operations
- Route base: operations/financial-transaction-operations/bank-reconciliation-operational-level

## Screen Set
- operations/financial-transaction-operations/bank-reconciliation-operational-level/dashboard
- operations/financial-transaction-operations/bank-reconciliation-operational-level/list
- operations/financial-transaction-operations/bank-reconciliation-operational-level/create
- operations/financial-transaction-operations/bank-reconciliation-operational-level/detail/:id
- operations/financial-transaction-operations/bank-reconciliation-operational-level/edit/:id
- operations/financial-transaction-operations/bank-reconciliation-operational-level/approvals
- operations/financial-transaction-operations/bank-reconciliation-operational-level/reports
- operations/financial-transaction-operations/bank-reconciliation-operational-level/analytics

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
