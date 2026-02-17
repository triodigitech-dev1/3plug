# helper-dev-blueprint.md
## 3PlugPOS — Internal Helper & Developer Toolkit Blueprint

This document defines the internal **Helper Library & Developer Standards System**  
for 3PlugPOS.

Purpose:

- Enforce architectural consistency
- Reduce duplicated logic
- Guarantee audit integrity
- Standardize validation & security
- Make future industry extensions safe and predictable
- Simplify onboarding of new developers
- Prevent architectural drift

This toolkit is mandatory for all modules (Core + Operations + Management + Administration).

---

# 1. PHILOSOPHY

The Helper Toolkit is:

- Centralized
- Reusable
- Plug-aware
- Audit-enforcing
- Permission-aware
- Industry-extension-friendly

No module should:
- Write direct raw queries without helpers
- Perform sensitive actions without audit helpers
- Implement custom validation without validation helpers
- Implement manual permission checks without RBAC helpers

---

# 2. HELPER TOOLKIT STRUCTURE

/helpers  
│  
├── core/  
├── auth/  
├── audit/  
├── validation/  
├── financial/  
├── reporting/  
├── logging/  
├── approval/  
├── workflow/  
├── industry/  
├── migration/  
└── testing/

---

# 3. CORE HELPERS

## 3.1 ID & Identity Helpers

- UUID generator (industry-safe)
- Branch-aware ID strategy
- Sequential document number generator
- Entity ownership verification
- Versioning helpers (`updated_at`, `version` logic)

Purpose:
Ensure global consistency for future sync & traceability.

---

## 3.2 Date & Time Helpers

- Timezone-safe date handling
- Business-day calculation
- Month-end/quarter-end helpers
- Fiscal-year boundary helpers
- Cut-off validation helpers

Purpose:
Avoid inconsistent financial reporting.

---

# 4. AUTH & RBAC HELPERS

## 4.1 Role Enforcement

- `requireRole(role)`
- `requirePermission(permission)`
- `requirePlugAccess(plug)`
- `requireModuleAccess(module)`
- `requireActionAccess(action)`

## 4.2 Field-Level Enforcement

- `requireFieldEditPermission(entity, field)`
- Sensitive-field update guard

## 4.3 Session Helpers

- Secure session validator
- Device identity extraction
- Login attempt tracker

Purpose:
Centralize permission logic — never hardcode role logic inside modules.

---

# 5. AUDIT HELPERS (MANDATORY)

All write actions must use audit helpers.

## 5.1 Audit Event Builder

- `createAuditEvent({ actor, entity, action, before, after, reason })`
- Automatic timestamp
- Device capture
- Plug/module tagging
- Approval reference support

## 5.2 Hash Chain Helper

- `generateAuditHash(previousHash, currentEvent)`
- Tamper-evidence enforcement

## 5.3 Sensitive Action Wrapper

- `executeWithAudit(actionFn, metadata)`

This wrapper:
1. Validates permissions
2. Executes transaction
3. Captures before/after
4. Logs audit event
5. Verifies integrity

No sensitive module action may bypass this wrapper.

---

# 6. VALIDATION HELPERS

## 6.1 Schema Validation

- Input validators (Zod/Joi/Ajv)
- Required-field enforcement
- Cross-field validation rules
- Industry-specific conditional validators

## 6.2 Business Rule Validators

- Credit limit check
- Stock availability check
- Duplicate invoice check
- Document status transition guard
- Closed-period modification guard

Purpose:
Prevent inconsistent states.

---

# 7. FINANCIAL HELPERS

Critical for Administration & Operations.

## 7.1 Money Handling

- Precision-safe arithmetic (avoid float errors)
- Currency conversion helper
- Multi-currency rate resolver
- Rounding policy enforcement

## 7.2 Ledger Posting Helpers

- `postJournalEntry(debit, credit, metadata)`
- Double-entry enforcement guard
- Balance validation check
- Period-lock validation

## 7.3 Tax Helpers

- VAT calculation
- Withholding tax logic
- Tax tagging validation
- Tax-inclusive vs exclusive calculations

Purpose:
Prevent accounting corruption.

---

# 8. REPORTING & ANALYTICS HELPERS

## 8.1 Query Builders

- Standard filter builder
- Date range builder
- Pagination helper
- Sorting helper

## 8.2 KPI Aggregators

- Revenue summary helper
- Margin calculation helper
- Inventory turnover helper
- Expense ratio helper

## 8.3 Export Helpers

- CSV export generator
- PDF export wrapper
- Structured report formatter

Purpose:
Standardize reporting across all modules and industries.

---

# 9. APPROVAL & WORKFLOW HELPERS

## 9.1 Approval Engine

- `requestApproval(action, metadata)`
- Approval chain builder
- Multi-level approval logic
- Escalation rules

## 9.2 Workflow Guards

- Status transition validation
- Locking rules
- Expiry validation

Purpose:
Keep governance consistent across plugs.

---

# 10. INDUSTRY EXTENSION HELPERS

Used when implementing specialized industries.

## 10.1 Industry Registration

- `registerIndustryModule(name, config)`
- Feature toggle helpers
- Industry-specific permission extensions

## 10.2 Industry Validation Extensions

- Custom rule injection framework
- Industry KPI injection points

Purpose:
Allow industries to extend behavior without modifying core logic.

---

# 11. MIGRATION & VERSIONING HELPERS

## 11.1 Migration Safety

- Pre-migration backup enforcement
- Migration integrity check
- Version compatibility guard

## 11.2 Schema Change Tracker

- Track schema version
- Ensure audit compatibility
- Rollback guidance logger

Purpose:
Prevent upgrade disasters in on-prem environments.

---

# 12. LOGGING HELPERS

## 12.1 System Logging

- Structured log builder
- Log level classifier
- Rotation management

## 12.2 Security Logging

- Failed login logger
- Privilege escalation logger
- Export action logger
- Suspicious pattern detector

Purpose:
Support forensic investigations.

---

# 13. TESTING HELPERS

## 13.1 Test Data Factories

- Create test business
- Create test user
- Create test inventory
- Create test financial records

## 13.2 Mock Audit Verifier

- Verify audit completeness
- Verify hash chain continuity
- Verify permission enforcement

## 13.3 Migration Test Harness

- Simulate upgrade
- Validate schema state
- Validate rollback behavior

Purpose:
Guarantee release stability.

---

# 14. DEVELOPMENT RULES

1. No module writes directly to DB without helper layer.
2. No sensitive action without audit wrapper.
3. No financial transaction without financial helper.
4. No API endpoint without validation helper.
5. No industry extension modifies core logic directly.
6. All new modules must register in module registry.
7. All new permissions must update RBAC matrix.
8. Every release must run:
   - audit integrity tests
   - migration tests
   - backup verification tests

---

# 15. LONG-TERM BENEFITS

This helper system ensures:

- Consistency across 3 plugs
- Safe scaling across 20 industries
- Easier onboarding of developers
- Strong fraud resistance
- Reliable forensic reconstruction
- Stable migrations
- Predictable future maintenance

---

# FINAL PRINCIPLE

3PlugPOS is not just a product.
It is a controlled architectural ecosystem.

The Helper Toolkit is the enforcement layer that prevents architectural decay.