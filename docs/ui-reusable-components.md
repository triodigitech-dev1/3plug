# ui-reusable-components.md

## 3PlugPOS Shared UI System (Benchmark-Aligned)

Reference baseline:
- `docs/sample.md`
- `docs/build-flow.md`
- `docs/plug1.bizoperations.md`
- `docs/plug2.management.md`
- `docs/plug3.administration.md`

Status legend:
- `[x]` implemented
- `[~]` partial/in-progress
- `[ ]` planned

---

## 1) Layout & Structural Components
- `[x]` App shell (desktop wrapper)
- `[x]` Container/section wrappers
- `[x]` Shared page header + footer
- `[x]` Scroll container (customized)
- `[~]` Multi-column workspace
- `[ ]` Split layout (resizable panes)
- `[ ]` Dockable panels
- `[ ]` Sticky subheaders
- `[ ]` Safe-area wrapper (desktop controls)

---

## 2) Navigation Components
- `[x]` Sidebar (collapsible)
- `[x]` Mini sidebar (icon-only)
- `[~]` Multi-level sidebar
- `[x]` Top navigation bar
- `[ ]` Bottom nav (tablet POS mode)
- `[x]` Command palette
- `[x]` Breadcrumbs
- `[x]` Stepper/Wizard
- `[x]` Tabs (horizontal)
- `[ ]` Vertical tabs
- `[ ]` Context menu
- `[ ]` Dropdown menu
- `[ ]` Mega menu
- `[ ]` Quick access panel
- `[ ]` Module switcher
- `[ ]` Workspace switcher
- `[ ]` User profile menu
- `[~]` Notification dropdown (list primitive done)
- `[x]` Search global bar

---

## 3) Data Display Components
### Tables
- `[x]` Basic table
- `[x]` Filterable table
- `[x]` Paginated table
- `[x]` Action/bulk bars
- `[x]` Column configurator panel
- `[ ]` Sortable table
- `[ ]` Editable/inline edit table
- `[ ]` Expandable row table
- `[ ]` Grouped/tree table
- `[ ]` Frozen columns
- `[ ]` Drag-to-reorder table
- `[ ]` Infinite/virtualized table

### Cards
- `[x]` Basic card
- `[x]` KPI/metric/stat cards
- `[x]` Summary/activity cards
- `[ ]` Expandable/draggable cards
- `[ ]` Chart cards
- `[ ]` Profile/product/invoice cards

### Lists
- `[x]` Timeline list
- `[x]` Activity feed list
- `[~]` Selectable list
- `[ ]` Virtual list
- `[ ]` Tree/nested list

---

## 4) Charts & Analytics
- `[x]` Canvas trend board (custom SVG workspace)
- `[x]` KPI trend/progress bars
- `[ ]` Line/bar/area charts
- `[ ]` Pie/donut charts
- `[ ]` Heatmap/radar/scatter charts
- `[ ]` Gauge/progress ring
- `[ ]` Sparkline/funnel/inventory movement graphs

---

## 5) Forms & Input Components
### Basic Inputs
- `[x]` Text
- `[x]` Password + strength meter
- `[x]` Number
- `[x]` Currency
- `[x]` Percentage
- `[x]` Date
- `[x]` Time
- `[x]` DateTime
- `[x]` Date range
- `[x]` Toggle switch
- `[x]` Checkbox
- `[x]` Radio group
- `[x]` Select
- `[x]` Multi-select
- `[x]` Combobox
- `[x]` Search input
- `[x]` Textarea
- `[ ]` Rich text editor
- `[ ]` Markdown editor

### Advanced Inputs
- `[ ]` Barcode scanner input
- `[ ]` QR scanner input
- `[x]` File upload
- `[x]` Image upload
- `[x]` Signature pad
- `[ ]` Drag/drop upload zone
- `[x]` Tag input
- `[x]` Color picker
- `[x]` Slider/range slider
- `[ ]` Stepper numeric input
- `[x]` OTP input
- `[ ]` PIN pad (POS)
- `[ ]` Virtual keyboard (touch)

---

## 6) POS-Specific Components
- `[~]` Product/cart panel baseline
- `[~]` Receipt/payment summary panel baseline
- `[ ]` Product grid
- `[ ]` Category grid
- `[ ]` Payment modal
- `[ ]` Split payment panel
- `[ ]` Cash drawer panel
- `[ ]` Discount panel
- `[ ]` Tax breakdown panel
- `[ ]` Change calculator
- `[ ]` Receipt print preview
- `[ ]` Customer quick lookup
- `[ ]` Loyalty panel
- `[ ]` Barcode entry panel
- `[ ]` Refund panel
- `[ ]` Shift close summary
- `[ ]` X/Z report panel

---

## 7) ERP/Admin Components
- `[x]` Approval workflow board (kanban baseline)
- `[x]` Audit timeline baseline
- `[ ]` Journal entry grid
- `[ ]` Ledger/account tree
- `[ ]` Budget planner grid
- `[ ]` PO/SO builders
- `[ ]` Invoice generator
- `[ ]` Payroll table
- `[ ]` Inventory reorder panel
- `[ ]` Warehouse transfer panel
- `[ ]` Stock adjustment modal
- `[ ]` Permissions matrix table
- `[ ]` Role builder panel

---

## 8) Overlays & Feedback
- `[x]` Modal
- `[x]` Fullscreen modal
- `[x]` Drawer
- `[x]` Bottom sheet
- `[x]` Popover
- `[x]` Toast notice
- `[x]` Alert banners
- `[x]` Confirmation dialog
- `[x]` Spinner
- `[x]` Skeleton loader
- `[ ]` Tooltip/hover card
- `[ ]` Snackbar stack manager
- `[ ]` Error/success/warning dialog variants
- `[ ]` Progress modal
- `[ ]` Loading overlay
- `[ ]` Shimmer placeholder

---

## 9) Utility Components
- `[x]` Badge/tag/chip family
- `[x]` Avatar
- `[x]` Icon button
- `[x]` Button group
- `[x]` Toggle group
- `[x]` Accordion/collapse
- `[ ]` Floating action button
- `[ ]` Divider component
- `[ ]` Resizable handle
- `[ ]` Drag handle
- `[ ]` Clipboard copy button
- `[ ]` Online/offline indicator
- `[ ]` Theme switcher

---

## 10) Power-User / Desktop (Tauri)
- `[ ]` Window controls
- `[ ]` Tray menu integrations
- `[ ]` Multi-window manager UI
- `[ ]` Shortcut overlay
- `[ ]` File explorer panel
- `[ ]` Desktop notification bridge status
- `[ ]` Sync conflict resolver UI

---

## 11) Security & Access Control UI
- `[~]` OTP UI primitives present
- `[x]` Password strength meter
- `[ ]` 2FA setup panel
- `[ ]` Session manager
- `[ ]` Device manager
- `[ ]` Login activity viewer
- `[ ]` Access restriction banner
- `[ ]` Permission denied view
- `[ ]` Reset password wizard

---

## 12) Workflow & Automation
- `[x]` Approval/task board (kanban)
- `[x]` Activity timeline
- `[ ]` Workflow builder (graph)
- `[ ]` Trigger editor
- `[ ]` Condition builder
- `[ ]` Rule engine UI
- `[ ]` SLA monitor panel

---

## 13) Current Catalog Page
- Route: `/ui-foundation`
- Purpose: team/developer shared UI guide + live component catalog
- Includes: navigation, bars, forms, tables, overlays, workflow, chat, notifications, field library

---

## 14) Folder Structure (Target)
Use this structure to scale component coverage category-by-category:

```txt
src/components
  /layout
  /navigation
  /data-display
  /forms
  /pos
  /erp
  /admin
  /charts
  /overlays
  /system
  /ui
  /common
  /dashboard
```

---

## 15) Next Implementation Wave (Highest Priority)
1. POS: product grid, category rail, cart line editor, payment modal, split-payment matrix.
2. Tables: sortable columns, inline edits, grouped rows, saved views.
3. Navigation: profile menu, notification bell dropdown, module/workspace switchers.
4. Overlays: tooltip system, snackbar stack, standardized dialog variants.
5. Forms: barcode/QR inputs, drag-drop upload zone, pin pad, validation error summary manager.
