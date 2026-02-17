import { useMemo, useState } from 'react'
import PageMeta from '../components/common/PageMeta'
import ActivityTimeline from '../components/ui/ActivityTimeline'
import Accordion from '../components/ui/Accordion'
import AlertBanner from '../components/ui/AlertBanner'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import BottomSheet from '../components/ui/BottomSheet'
import Button from '../components/ui/Button'
import ButtonGroup from '../components/ui/ButtonGroup'
import CanvasBoard from '../components/ui/CanvasBoard'
import ChatPanel from '../components/ui/ChatPanel'
import CheckboxField from '../components/ui/CheckboxField'
import Popover from '../components/ui/Popover'
import CommandPalette from '../components/ui/CommandPalette'
import FormSection from '../components/ui/FormSection'
import DataTable from '../components/ui/DataTable'
import Drawer from '../components/ui/Drawer'
import EmptyState from '../components/ui/EmptyState'
import InputField from '../components/ui/InputField'
import IconButton from '../components/ui/IconButton'
import KanbanBoard from '../components/ui/KanbanBoard'
import Modal from '../components/ui/Modal'
import Panel from '../components/ui/Panel'
import Pagination from '../components/ui/Pagination'
import ProgressBar from '../components/ui/ProgressBar'
import RadioGroup from '../components/ui/RadioGroup'
import SearchBar from '../components/ui/SearchBar'
import SelectField from '../components/ui/SelectField'
import SkeletonBlock from '../components/ui/SkeletonBlock'
import Sidebar from '../components/ui/Sidebar'
import Spinner from '../components/ui/Spinner'
import StatCard from '../components/ui/StatCard'
import StatusBadge from '../components/ui/StatusBadge'
import Stepper from '../components/ui/Stepper'
import TableToolbar from '../components/ui/TableToolbar'
import Tabs from '../components/ui/Tabs'
import TextareaField from '../components/ui/TextareaField'
import ToggleGroup from '../components/ui/ToggleGroup'
import ToggleSwitch from '../components/ui/ToggleSwitch'
import NotificationList from '../components/ui/NotificationList'
import ComboboxField from '../components/ui/ComboboxField'
import ColorPickerField from '../components/ui/ColorPickerField'
import CurrencyField from '../components/ui/CurrencyField'
import DateRangeField from '../components/ui/DateRangeField'
import FileUploadField from '../components/ui/FileUploadField'
import MultiSelectField from '../components/ui/MultiSelectField'
import OtpField from '../components/ui/OtpField'
import PasswordField from '../components/ui/PasswordField'
import PercentageField from '../components/ui/PercentageField'
import RangeSliderField from '../components/ui/RangeSliderField'
import SignaturePadField from '../components/ui/SignaturePadField'
import TagInputField from '../components/ui/TagInputField'
import ColumnVisibilityPanel from '../components/ui/ColumnVisibilityPanel'
import ConfirmDialog from '../components/ui/ConfirmDialog'
import FormErrorSummary from '../components/ui/FormErrorSummary'
import FullscreenModal from '../components/ui/FullscreenModal'
import MetricBar from '../components/ui/MetricBar'
import MiniSidebar from '../components/ui/MiniSidebar'
import TableBulkActionsBar from '../components/ui/TableBulkActionsBar'
import TableFilterBar from '../components/ui/TableFilterBar'
import ToastNotice from '../components/ui/ToastNotice'
import TopActionBar from '../components/ui/TopActionBar'

function toDateInputValue(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function toTimeInputValue(date) {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

function toDateTimeLocalValue(date) {
  return `${toDateInputValue(date)}T${toTimeInputValue(date)}`
}

function UIFoundationPage() {
  const now = useMemo(() => new Date(), [])
  const weekAhead = useMemo(() => {
    const date = new Date(now)
    date.setDate(date.getDate() + 7)
    return date
  }, [now])

  const [isModalOpen, setModalOpen] = useState(false)
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [isPaletteOpen, setPaletteOpen] = useState(false)
  const [isSheetOpen, setSheetOpen] = useState(false)
  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const [isConfirmOpen, setConfirmOpen] = useState(false)
  const [isFullModalOpen, setFullModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [accordionOpen, setAccordionOpen] = useState('audit')
  const [isRealtimeOn, setRealtimeOn] = useState(true)
  const [search, setSearch] = useState('')
  const [tableQuery, setTableQuery] = useState('')
  const [module, setModule] = useState('operations')
  const [page, setPage] = useState(1)
  const [billingMode, setBillingMode] = useState('cash')
  const [requireApproval, setRequireApproval] = useState(true)
  const [notes, setNotes] = useState('')
  const [password, setPassword] = useState('')
  const [currency, setCurrency] = useState('1299.99')
  const [percentage, setPercentage] = useState('12.5')
  const [datetimeValue, setDatetimeValue] = useState(() => toDateTimeLocalValue(now))
  const [dateStart, setDateStart] = useState(() => toDateInputValue(now))
  const [dateEnd, setDateEnd] = useState(() => toDateInputValue(weekAhead))
  const [timeValue, setTimeValue] = useState(() => toTimeInputValue(now))
  const [sliderValue, setSliderValue] = useState(35)
  const [otp, setOtp] = useState('')
  const [tags, setTags] = useState(['finance', 'audit'])
  const [color, setColor] = useState('#1290df')
  const [assignee, setAssignee] = useState('Anna W.')
  const [multiValues, setMultiValues] = useState(['ops', 'admin'])
  const [visibleColumns, setVisibleColumns] = useState(['module', 'status', 'owner', 'eta'])

  const tableColumns = useMemo(
    () => [
      { key: 'module', label: 'Module' },
      { key: 'status', label: 'Status' },
      { key: 'owner', label: 'Owner' },
      { key: 'eta', label: 'ETA' },
    ],
    [],
  )

  const tableRows = useMemo(
    () => [
      { module: 'Sidebar Shell', status: 'Ready', owner: 'Frontend', eta: 'Complete' },
      { module: 'Data Tables', status: 'Ready', owner: 'Frontend', eta: 'Complete' },
      { module: 'Modal + Drawer', status: 'Ready', owner: 'Frontend', eta: 'Complete' },
      { module: 'Chat Panel', status: 'Ready', owner: 'Shared UI', eta: 'Complete' },
    ],
    [],
  )

  const messages = useMemo(
    () => [
      { id: 1, author: 'Ops Lead', role: 'other', text: 'We need a reusable approval modal for refunds.' },
      { id: 2, author: 'UI Core', role: 'me', text: 'Common modal pattern is now available in UI Foundation.' },
      { id: 3, author: 'Manager', role: 'other', text: 'Good. Reuse it in Operations and Admin flows.' },
    ],
    [],
  )

  const timelineEvents = useMemo(
    () => [
      { id: 1, title: 'Backup verification completed', time: new Date(now.getTime() - 1000 * 60 * 90).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      { id: 2, title: 'Role matrix updated for Management', time: new Date(now.getTime() - 1000 * 60 * 48).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      { id: 3, title: 'Audit hash continuity check passed', time: new Date(now.getTime() - 1000 * 60 * 14).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
    ],
    [now],
  )

  const kanbanColumns = useMemo(
    () => [
      { key: 'todo', title: 'To Do', items: [{ id: 'a', title: 'Standardize table filters' }, { id: 'b', title: 'Add wizard form shell' }] },
      { key: 'doing', title: 'In Progress', items: [{ id: 'c', title: 'Operations grid actions' }] },
      { key: 'done', title: 'Done', items: [{ id: 'd', title: 'Modal + Drawer base patterns' }] },
    ],
    [],
  )

  const notifications = useMemo(
    () => [
      { id: 1, title: 'Backup completed successfully', time: '3m ago' },
      { id: 2, title: 'Manager approval needed for refund', time: '11m ago' },
      { id: 3, title: 'Role policy changed for Cashier', time: '24m ago' },
    ],
    [],
  )

  const toggleColumn = (key) => {
    setVisibleColumns((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))
  }

  return (
    <>
      <PageMeta pageTitle="UI Foundation" />
      <div className="grid h-full min-h-0 gap-5 lg:grid-cols-[250px_minmax(0,1fr)]">
        <Sidebar
          title="Foundation Areas"
          items={[
            { to: '/ui-foundation', label: 'UI Foundation', icon: 'UF', section: 'Core' },
            { to: '/operations', label: 'Operations Dashboards', icon: 'OP', section: 'Dashboards' },
            { to: '/management', label: 'Management Dashboards', icon: 'MG', section: 'Dashboards' },
            { to: '/administration', label: 'Administration Dashboards', icon: 'AD', section: 'Dashboards' },
          ]}
        />

        <div className="ui-scroll min-h-0 space-y-5 overflow-auto pr-1">
          <Panel title="Developer Guide" subtitle="Use this page as the shared UI contract for all teams.">
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="space-y-2 text-sm text-slate-200">
                <p className="font-semibold text-slate-100">Rules</p>
                <ul className="space-y-1">
                  <li>1. Reuse components from `src/components/ui` before creating new ones.</li>
                  <li>2. Keep brand/footer/meta behavior consistent via shared layout.</li>
                  <li>3. Build plug screens from common primitives, not one-off styles.</li>
                  <li>4. Add new components here first, then consume in dashboards/modules.</li>
                </ul>
              </div>
              <div className="space-y-2 text-sm text-slate-200">
                <p className="font-semibold text-slate-100">Import Pattern</p>
                <pre className="overflow-auto rounded-xl border border-white/15 bg-[#07192a]/75 p-3 text-xs text-slate-100">
{`import Panel from '../components/ui/Panel'
import Button from '../components/ui/Button'
import DataTable from '../components/ui/DataTable'`}
                </pre>
                <p className="text-xs text-slate-300">
                  Keep imports from shared UI folders to preserve consistency.
                </p>
              </div>
            </div>
          </Panel>

          <Panel
            title="Common UI Kit"
            subtitle="Exhaustive shared components for all plugs before feature logic."
            actions={
              <>
                <Button variant="secondary" onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                <Button variant="ghost" onClick={() => setPaletteOpen(true)}>Command</Button>
                <Button variant="ghost" onClick={() => setSheetOpen(true)}>Bottom Sheet</Button>
                <Button variant="ghost" onClick={() => setFullModalOpen(true)}>Fullscreen</Button>
                <Button variant="danger" onClick={() => setConfirmOpen(true)}>Confirm</Button>
                <Button variant="secondary" onClick={() => setShowToast(true)}>Toast</Button>
              </>
            }
          >
            <div className="space-y-4">
              <Breadcrumbs items={[{ to: '/pos', label: 'Home' }, { to: '/ui-foundation', label: 'UI Foundation' }, { label: 'Catalog' }]} />
              <Tabs
                tabs={[
                  { value: 'overview', label: 'Overview' },
                  { value: 'forms', label: 'Forms' },
                  { value: 'workflow', label: 'Workflow' },
                  { value: 'collab', label: 'Collab' },
                ]}
                active={activeTab}
                onChange={setActiveTab}
              />
              <div className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
              <ButtonGroup>
                <IconButton icon="⟳" label="Refresh" />
                <IconButton icon="+" label="Add" variant="primary" />
                <IconButton icon="⚠" label="Alert" variant="danger" />
              </ButtonGroup>
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status="healthy" />
                <StatusBadge status="warning" />
                <StatusBadge status="critical" />
                <Badge tone="success">plug-shared</Badge>
                <Badge tone="info">offline-ready</Badge>
                <ToggleSwitch label="Realtime Sync" checked={isRealtimeOn} onChange={setRealtimeOn} />
                <Avatar name="Triotek QA" />
              </div>
              <Stepper steps={['Design', 'Review', 'Implement', 'Ship']} current={2} />
            </div>
          </Panel>

          <div className="grid gap-5 xl:grid-cols-2">
            <Panel title="Data Table" subtitle="Shared table style for all modules" scroll maxHeight="320px">
              <TableFilterBar query={tableQuery} onQueryChange={(e) => setTableQuery(e.target.value)} chips={['Branch: HQ', 'Status: Active']} />
              <TableBulkActionsBar selectedCount={2} />
              <TableToolbar query={tableQuery} onQueryChange={(e) => setTableQuery(e.target.value)} />
              <DataTable columns={tableColumns.filter((c) => visibleColumns.includes(c.key))} rows={tableRows} />
              <div className="mt-3 flex justify-end">
                <Pagination page={page} totalPages={8} onPageChange={setPage} />
              </div>
            </Panel>
            <Panel title="Canvas Area" subtitle="Visual workspace for trends/flows" scroll maxHeight="320px">
              <CanvasBoard title="Operations Flow Canvas" />
            </Panel>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            <Panel title="Forms & Filters" subtitle="Reusable input controls for module screens">
              <div className="space-y-3">
                <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type to filter records" />
                <FormSection title="Quick Filter" description="Standard filter controls for plug pages.">
                  <InputField id="search" label="Search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Filter records" />
                  <SelectField
                    id="module"
                    label="Active Module"
                    value={module}
                    onChange={(e) => setModule(e.target.value)}
                    options={[
                      { value: 'operations', label: 'Operations' },
                      { value: 'management', label: 'Management' },
                      { value: 'administration', label: 'Administration' },
                    ]}
                  />
                  <RadioGroup
                    name="billing_mode"
                    value={billingMode}
                    onChange={setBillingMode}
                    options={[
                      { value: 'cash', label: 'Cash' },
                      { value: 'card', label: 'Card' },
                      { value: 'split', label: 'Split' },
                    ]}
                  />
                  <CheckboxField label="Require manager approval" checked={requireApproval} onChange={setRequireApproval} />
                  <TextareaField id="notes" label="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Write workflow notes..." />
                </FormSection>
              </div>
            </Panel>
            <Panel title="Timeline + Accordion" subtitle="Audit, alerts, and detail expansion patterns" scroll maxHeight="360px">
              <ActivityTimeline events={timelineEvents} />
              <div className="mt-4">
                <Accordion
                  openKey={accordionOpen}
                  onToggle={setAccordionOpen}
                  items={[
                    { key: 'audit', title: 'Audit Log Policy', content: 'All sensitive actions must include reason codes and actor metadata.' },
                    { key: 'security', title: 'Security Alerting', content: 'Permission denial and privilege escalation events are captured by default.' },
                  ]}
                />
              </div>
            </Panel>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            <Panel title="Workflow & Tasking" subtitle="Shared board for approvals and assignments" scroll maxHeight="340px">
              <ToggleGroup
                options={[
                  { value: 'week', label: 'This Week' },
                  { value: 'month', label: 'This Month' },
                  { value: 'quarter', label: 'Quarter' },
                ]}
                value="week"
                onChange={() => {}}
              />
              <KanbanBoard columns={kanbanColumns} />
            </Panel>
            <Panel title="Collaboration" subtitle="Embedded communication and empty state" scroll maxHeight="340px">
              <div className="space-y-3">
                <ChatPanel messages={messages} />
                <EmptyState
                  title="No pending escalations"
                  description="All critical approval tasks are currently resolved."
                  action={<Button size="sm">Create escalation</Button>}
                />
              </div>
            </Panel>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            <Panel title="Feedback & State" subtitle="Alerts, progress, loading, and placeholders.">
              <div className="space-y-3">
                <AlertBanner tone="info" title="Sync Queue Active" message="Local write queue is buffering 2 events." />
                <AlertBanner tone="warning" title="Approval Required" message="1 refund request exceeds threshold." />
                <ProgressBar value={72} label="Daily reconciliation progress" />
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <Spinner />
                  <span>Loading settlement summary...</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <SkeletonBlock className="h-8" />
                  <SkeletonBlock className="h-8" />
                  <SkeletonBlock className="h-8" />
                </div>
              </div>
            </Panel>
            <Panel title="Notifications & Popover" subtitle="Reusable notification center patterns.">
              <div className="relative space-y-3">
                <Button variant="secondary" size="sm" onClick={() => setPopoverOpen((v) => !v)}>
                  Toggle Popover
                </Button>
                <NotificationList items={notifications} />
                <Popover open={isPopoverOpen}>
                  <p className="text-xs text-slate-100">Quick actions</p>
                  <div className="mt-2 flex flex-col gap-1 text-xs text-slate-200">
                    <button type="button" className="rounded-md border border-white/20 px-2 py-1 text-left">Open shift report</button>
                    <button type="button" className="rounded-md border border-white/20 px-2 py-1 text-left">Run integrity check</button>
                  </div>
                </Popover>
              </div>
            </Panel>
          </div>

          <Panel title="Field Library (Exhaustive)" subtitle="Reusable fields for POS, management, administration, and setup flows." scroll maxHeight="460px">
            <div className="grid gap-4 md:grid-cols-2">
              <InputField id="field-text" label="Text" value="Standard text" onChange={() => {}} />
              <InputField id="field-email" label="Email" type="email" value="team@trioteksystems.com" onChange={() => {}} />
              <InputField id="field-phone" label="Phone" type="tel" value="+1 555 0142" onChange={() => {}} />
              <InputField id="field-url" label="URL" type="url" value="https://trioteksystems.com" onChange={() => {}} />
              <PasswordField id="field-password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <InputField id="field-number" label="Number" type="number" value="27" onChange={() => {}} />
              <CurrencyField id="field-currency" label="Currency" value={currency} onChange={(e) => setCurrency(e.target.value)} currency="USD" />
              <PercentageField id="field-percent" label="Percentage" value={percentage} onChange={(e) => setPercentage(e.target.value)} />
              <InputField id="field-date" label="Date" type="date" value={dateStart} onChange={(e) => setDateStart(e.target.value)} />
              <InputField id="field-time" label="Time" type="time" value={timeValue} onChange={(e) => setTimeValue(e.target.value)} />
              <InputField id="field-datetime" label="DateTime" type="datetime-local" value={datetimeValue} onChange={(e) => setDatetimeValue(e.target.value)} />
              <DateRangeField
                label="Date Range"
                startValue={dateStart}
                endValue={dateEnd}
                onStartChange={(e) => setDateStart(e.target.value)}
                onEndChange={(e) => setDateEnd(e.target.value)}
              />
              <RangeSliderField label="Risk Threshold" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
              <ColorPickerField id="field-color" label="Color" value={color} onChange={(e) => setColor(e.target.value)} />
              <ComboboxField
                id="field-combobox"
                label="Combobox"
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                placeholder="Choose assignee"
                options={['Anna W.', 'David M.', 'Brian K.', 'Support Desk']}
              />
              <SelectField
                id="field-select"
                label="Select"
                value={module}
                onChange={(e) => setModule(e.target.value)}
                options={[
                  { value: 'operations', label: 'Operations' },
                  { value: 'management', label: 'Management' },
                  { value: 'administration', label: 'Administration' },
                ]}
              />
              <MultiSelectField
                id="field-multiselect"
                label="Multi-Select"
                value={multiValues}
                onChange={(e) => setMultiValues(Array.from(e.target.selectedOptions).map((o) => o.value))}
                options={[
                  { value: 'ops', label: 'Operations' },
                  { value: 'mgmt', label: 'Management' },
                  { value: 'admin', label: 'Administration' },
                  { value: 'audit', label: 'Audit' },
                ]}
              />
              <TagInputField label="Tag Input" tags={tags} onChange={setTags} />
              <OtpField label="OTP / PIN" value={otp} onChange={setOtp} length={6} />
              <FileUploadField label="File Upload" id="field-file" onChange={() => {}} />
              <FileUploadField label="Image Upload (Multiple)" id="field-image" accept="image/*" multiple onChange={() => {}} />
            </div>
            <div className="mt-4">
              <SignaturePadField label="Signature Pad" />
            </div>
          </Panel>

          <Panel title="Card Variants" subtitle="Shared card/metric patterns for dashboards.">
            <div className="grid gap-3 md:grid-cols-4">
              <StatCard label="MRR" value="$82K" trend="+4.8% this month" tone="sky" />
              <StatCard label="Ops Throughput" value="1,248" trend="+2.1% today" tone="green" />
              <StatCard label="Open Risks" value="6" trend="2 high priority" tone="amber" />
              <StatCard label="Compliance" value="97%" trend="All core controls active" tone="blue" />
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <MetricBar label="Cash Reconciliation" value={72} max={100} tone="sky" />
              <MetricBar label="Control Checklist" value={93} max={100} tone="green" />
              <MetricBar label="Escalation SLA" value={64} max={100} tone="amber" />
            </div>
          </Panel>

          <div className="grid gap-5 xl:grid-cols-2">
            <Panel title="Subcomponents: Sidebar, Bars, Columns" subtitle="Deeper category coverage beyond base wrappers." scroll maxHeight="360px">
              <TopActionBar
                title="Operations Control Bar"
                subtitle="Reusable header bar for module actions"
                actions={<><Button size="sm">New</Button><Button size="sm" variant="ghost">Export</Button></>}
              />
              <div className="mt-3 grid gap-3 md:grid-cols-[88px_1fr]">
                <MiniSidebar
                  items={[
                    { icon: '💳', label: 'POS' },
                    { icon: '📦', label: 'Stock' },
                    { icon: '🧾', label: 'Invoices' },
                    { icon: '⚙', label: 'Settings' },
                  ]}
                />
                <ColumnVisibilityPanel columns={tableColumns} visible={visibleColumns} onToggle={toggleColumn} />
              </div>
            </Panel>
            <Panel title="Form Error Summary" subtitle="Standardized validation summary block for complex forms.">
              <FormErrorSummary
                errors={[
                  'Customer field is required.',
                  'Discount cannot exceed manager threshold.',
                  'Payment split must match total amount.',
                ]}
              />
            </Panel>
          </div>

          <Panel title="Team Delivery Notes" subtitle="How this foundation should be used in upcoming work.">
            <div className="grid gap-4 lg:grid-cols-3 text-sm">
              <article className="rounded-xl border border-white/15 bg-white/5 p-3">
                <p className="font-semibold text-slate-100">Frontend Team</p>
                <p className="mt-1 text-slate-200">Implement new plug screens by composing existing primitives first.</p>
              </article>
              <article className="rounded-xl border border-white/15 bg-white/5 p-3">
                <p className="font-semibold text-slate-100">Backend Team</p>
                <p className="mt-1 text-slate-200">Expose data contracts that feed these widgets without changing UI shape.</p>
              </article>
              <article className="rounded-xl border border-white/15 bg-white/5 p-3">
                <p className="font-semibold text-slate-100">QA Team</p>
                <p className="mt-1 text-slate-200">Use this page for baseline visual and interaction regression checks.</p>
              </article>
            </div>
          </Panel>
        </div>
      </div>

      <Modal open={isModalOpen} title="Shared Modal Example" onClose={() => setModalOpen(false)}>
        <p className="text-sm text-slate-100">
          This is the default modal style for approvals, confirmations, and sensitive workflow actions.
        </p>
      </Modal>

      <FullscreenModal open={isFullModalOpen} title="Fullscreen Modal Example" onClose={() => setFullModalOpen(false)}>
        <p className="text-sm text-slate-100">Use for dense screens like advanced report builders and bulk editors.</p>
      </FullscreenModal>

      <ConfirmDialog
        open={isConfirmOpen}
        title="Confirm sensitive action"
        message="Are you sure you want to void this transaction? This will be logged in audit trail."
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => setConfirmOpen(false)}
        confirmText="Void transaction"
      />

      <Drawer open={isDrawerOpen} title="Shared Drawer Example" onClose={() => setDrawerOpen(false)}>
        <p className="text-sm text-slate-100">
          Use this drawer for filters, quick edits, and side actions without leaving current context.
        </p>
      </Drawer>

      <CommandPalette
        open={isPaletteOpen}
        onClose={() => setPaletteOpen(false)}
        commands={[
          'Open Operations Dashboard',
          'Open Management Dashboard',
          'Open Administration Dashboard',
          'Start End-of-Day Reconciliation',
          'View Audit Integrity Report',
        ]}
      />

      <BottomSheet open={isSheetOpen} title="Bottom Sheet Example" onClose={() => setSheetOpen(false)}>
        <p className="text-sm text-slate-100">
          Bottom sheet is useful for tablet/POS quick actions and compact workflows.
        </p>
      </BottomSheet>

      <ToastNotice open={showToast} message="Saved successfully to local queue." tone="success" />
    </>
  )
}

export default UIFoundationPage
