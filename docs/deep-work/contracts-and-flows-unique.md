# Contracts and Flows: Unique Layer (By Plug)

## Purpose
Define unique contracts and workflows that differ by plug while still conforming to the common contract foundation.

## 1) Plug 1 (Business Operations) Unique Contracts and Flows

### A. POS Transaction Contract
- Inputs:
- `session_id`, `register_id`, `cashier_id`, `cart_lines[]`, `tax_snapshot`, `discount_snapshot`, `payment_split[]`
- Outputs:
- `txn_id`, `invoice_ref`, `posting_ref`, `receipt_ref`, `stock_effect_ref`
- Unique rules:
- Cart snapshot frozen at submit
- Payment totals must reconcile before post
- Receipt generation on successful post

### B. Shift Session Flow
1. Open shift (opening float)
2. Process transactions/cash events
3. Cash count and variance check
4. Supervisor review if variance threshold exceeded
5. Shift close + report lock

### C. Stock-Coupled Sales Flow
1. Sale submit
2. Stock decrement reservation
3. Posting confirmation
4. Stock ledger append
5. Exception route on negative stock policy

## 2) Plug 2 (Management) Unique Contracts and Flows

### A. Strategic KPI Contract
- Inputs:
- `target_set_id`, `actuals[]`, `time_window`, `org_scope`
- Outputs:
- `attainment_score`, `variance_score`, `risk_flags[]`, `decision_queue_items[]`
- Unique rules:
- KPI versions must be time-bounded
- Compare against baseline and plan in same response

### B. Executive Decision Flow
1. KPI anomaly detection
2. Decision item creation
3. Owner assignment
4. Action-plan approval
5. Outcome tracking and closure

### C. Scenario and Forecast Flow
1. Select model inputs
2. Run scenario
3. Compare with current trajectory
4. Save decision memo
5. Publish to executive dashboard

## 3) Plug 3 (Administration) Unique Contracts and Flows

### A. Compliance Record Contract
- Inputs:
- `policy_id`, `control_id`, `evidence_refs[]`, `attestation_status`, `reviewer`
- Outputs:
- `compliance_record_id`, `status`, `review_cycle`, `audit_bundle_ref`
- Unique rules:
- Evidence references required on compliance close
- Review cycle dates mandatory

### B. Governance Control Flow
1. Control task created
2. Evidence collection
3. Reviewer assessment
4. Approval/rejection
5. Archive + audit packaging

### C. Document and Retention Flow
1. Document registration
2. Classification/tagging
3. Access policy assignment
4. Retention timer tracking
5. Archive/disposal workflow with approvals

## 4) Cross-Plug Unique Integration Points

### A. Operations -> Administration
- Trigger compliance and audit events from high-risk operational actions.

### B. Operations -> Management
- Publish operational KPIs and anomalies to management decision boards.

### C. Management -> Operations/Administration
- Publish strategic targets and control directives downstream.

## 5) Unique Error/Exception Contracts

### Plug 1
- `POS_PAYMENT_MISMATCH`
- `SHIFT_VARIANCE_THRESHOLD_BREACH`
- `STOCK_POLICY_CONFLICT`

### Plug 2
- `KPI_BASELINE_MISSING`
- `DECISION_OWNER_UNASSIGNED`
- `FORECAST_INPUT_INCOMPLETE`

### Plug 3
- `COMPLIANCE_EVIDENCE_MISSING`
- `RETENTION_POLICY_VIOLATION`
- `CONTROL_REVIEW_OVERDUE`

## 6) Unique Implementation Checklist
- Plug-specific DTO schemas defined
- Plug-specific transitions documented
- Plug-specific exceptions mapped to UI state handling
- Plug-specific reporting/analytics output contracts validated
