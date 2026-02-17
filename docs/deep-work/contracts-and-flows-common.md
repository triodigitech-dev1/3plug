# Contracts and Flows: Common Layer

## Purpose
Define shared (cross-plug) backend/UI contracts and workflow flows derived from the deep-work data/workflow specs.

## 1) Common Domain Contracts

### A. Identity and Access Contract
- Inputs: `user_id`, `role_ids`, `permission_codes`, `branch_scope`
- Outputs: `authorized_actions[]`, `denied_actions[]`, `approval_required_actions[]`
- Rules:
- Deny by default
- Role + branch scope required on every write
- High-risk actions must return approval requirement metadata

### B. Document Lifecycle Contract
- Inputs: `entity_type`, `entity_id`, `current_state`, `requested_transition`, `actor`
- Outputs: `next_state`, `transition_status`, `validation_errors[]`, `audit_ref`
- Standard states:
- `draft -> validated -> submitted -> approved -> posted -> reconciled -> closed`
- Reversal path:
- `posted -> reversal_requested -> reversed`

### C. Validation Contract
- Inputs: `schema_version`, `payload`, `business_ruleset`
- Outputs: `is_valid`, `field_errors[]`, `rule_violations[]`
- Rules:
- Schema validation first
- Business rules second
- Permission-aware rules third

### D. Approval Contract
- Inputs: `request_id`, `entity_ref`, `threshold_context`, `decision`, `reason`
- Outputs: `approval_state`, `decision_event_ref`, `next_allowed_actions[]`
- Rules:
- Reject/escalate requires reason
- SLA timer and escalation path tracked

### E. Audit Contract
- Inputs: `actor`, `action`, `object_type`, `object_id`, `before_hash`, `after_hash`
- Outputs: `audit_event_id`, `event_hash`, `chain_status`
- Rules:
- Immutable append-only write
- No write action without audit event

### F. Reporting Contract
- Inputs: `report_id`, `filters`, `group_by`, `time_range`
- Outputs: `rows[]`, `totals`, `meta(dimensions, generated_at)`
- Rules:
- Stable column schema per report_id
- Export format support: csv/pdf

### G. Analytics Contract
- Inputs: `metric_set`, `time_range`, `compare_range`, `dimensions`
- Outputs: `series[]`, `variance[]`, `anomalies[]`, `forecast[]`
- Rules:
- Explainability note required on anomaly output

### H. Offline Sync Contract
- Inputs: `temp_id`, `idempotency_key`, `event_type`, `payload`, `device_id`, `created_at`
- Outputs: `sync_status`, `server_id`, `conflict_payload`
- Rules:
- Server-authoritative final state
- Retry-safe idempotency required

## 2) Common API Flow Patterns

### Read Flow
1. UI hook -> API client
2. API gateway -> auth scope filter
3. service/query -> db
4. normalize DTO -> UI props

### Write Flow
1. UI action -> command endpoint
2. auth + validation + approval checks
3. transaction write + posting hooks
4. audit emit + activity event
5. return next state + refs

### Reversal Flow
1. reversal request
2. permission + reason validation
3. reversal posting transaction
4. audit + linkage to original

## 3) Common Error and State Contract
- `LOADING`: async in progress
- `EMPTY`: no records for filters
- `ERROR_VALIDATION`: user-correctable
- `ERROR_AUTH`: permission denied
- `ERROR_CONFLICT`: offline/server mismatch
- `ERROR_SYSTEM`: unexpected server failure

## 4) Common Event Contract
- `entity.created`
- `entity.updated`
- `entity.submitted`
- `entity.approved`
- `entity.posted`
- `entity.reversed`
- `entity.sync_conflict`
- `audit.logged`

## 5) Common Implementation Checklist
- Contract schema documented
- State transitions tested
- Approval paths tested
- Audit event verified
- Offline replay verified
