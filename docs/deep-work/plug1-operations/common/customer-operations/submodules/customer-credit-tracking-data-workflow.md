# Customer credit tracking: Data Model and Workflow

## Context
- Plug: Business Operations
- Module: Customer Operations
- Route base: operations/customer-operations/customer-credit-tracking

## Data Entities
1. Main transaction entity
- id, org/branch scope, status lifecycle, owner

2. Detail/line entity
- parent_id, sequence, value fields, validation flags

3. Approval entity
- request_id, approver_role, decision, reason, decided_at

4. Posting entity
- posting_ref, posted_at, posted_by, result_hash

5. Audit entity
- actor, action, object, before_hash, after_hash, timestamp

## State Machine
- Draft -> Validated -> Submitted -> Approved -> Posted -> Closed
- Rejection path: Submitted -> Rejected -> Draft
- Correction path: Posted -> ReversalRequested -> Reversed

## Workflow Flow
1. Create draft
2. Validate schema + business rules
3. Route for approval if threshold/risk requires
4. Post/finalize transaction
5. Emit audit and reporting events
6. Reconcile and close

## Offline/Sync Behavior
- Local temp id and enqueue event
- Retry with idempotency key
- Resolve conflicts via server-authoritative state

## API Contract Draft
- GET /list
- GET /detail/:id
- POST /create
- PATCH /update/:id
- POST /submit/:id
- POST /approve/:id
- POST /post/:id
- POST /reverse/:id
- GET /reports
- GET /analytics

## Validation Rules (Baseline)
- Required fields and type checks
- Status transition guards
- Permission and approval guards
- Duplicate/idempotency checks
