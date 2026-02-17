# Plug 1 Dashboard Blueprint (Business Operations)

## Purpose
The Plug 1 main dashboard is the macro control surface for frontline execution, visibility, and fast navigation into operational modules.

## Accessibility Principles
- High contrast but low-strain color tokens
- Large hit targets for common actions
- Keyboard-first navigation support
- Clear status language (Healthy, Warning, Critical)

## Core Dashboard Zones
1. Global Status Strip
- Active branch
- Active session/shift
- Connectivity state (online/offline queue)
- Pending approvals count

2. KPI Grid
- Sales today
- Orders processed
- Average basket value
- Open carts
- Stock risk alerts
- Returns/refund count

3. Action Hub
- New sale
- Open held cart
- Start return
- Cash in/out
- Shift handover

4. Alerts and Exceptions
- Low stock criticals
- Failed payment events
- Sync conflict items
- Approval-required transactions

5. Module Navigator
- Links to all common modules
- Links to all specialized industry modules
- Recent modules used

## Reporting on Main Dashboard
- Daily operations summary
- Cash movement snapshot
- Item movement highlights
- Staff activity summary

## Analytics on Main Dashboard
- Hourly demand curve
- Discount impact trend
- Refund anomaly trend
- Shift productivity index

## API Contracts (Draft)
- GET /api/v1/operations/dashboard/summary
- GET /api/v1/operations/dashboard/alerts
- GET /api/v1/operations/dashboard/trends

## Security + Audit
- All widgets filtered by role scope
- All sensitive quick actions require permission checks
- Dashboard action clicks logged in audit stream
