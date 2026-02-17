# Management: Data and Workflow Architecture

## Purpose
Define canonical entities, state machines, and cross-module integration contracts for Management.

## Shared Data Domains
- Organization scope: company, branch, outlet, warehouse, terminal
- Identity scope: user, role, permission, session
- Master data scope: catalog, categories, tax/rules, counterparties
- Transaction scope: draft/submitted/posted/cancelled document lifecycle
- Ledger scope: financial and operational append-only records
- Audit scope: immutable actor-action-object event stream

## Workflow Design Rules
- All write actions are transactional
- Posted records are immutable; corrections use reversal flows
- Approvals are explicit state transitions
- Offline actions produce queue events and reconciliation states

## Standard State Machine
- Draft -> Validated -> Submitted -> Posted -> Reconciled -> Closed
- Error branches: FailedValidation, Rejected, Reversed, Cancelled

## Core Integration Contracts
- RBAC service authorizes transitions
- Validation service enforces schema and business rules
- Posting service writes ledgers and balances
- Audit service records before/after transition metadata
- Reporting service materializes aggregates

## API Standards
- GET list/detail
- POST create
- PATCH update-draft
- POST validate/submit/post/reverse
- GET reports and analytics endpoints

## Quality Gates
- State transition tests
- Permission and approval tests
- Ledger/audit integrity checks
- Offline queue replay and conflict tests
