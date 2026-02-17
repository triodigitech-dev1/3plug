const Submodule3f99e835Routes = {
  dashboard: 'facility-maintenance-scheduling/dashboard',
  list: 'facility-maintenance-scheduling/list',
  create: 'facility-maintenance-scheduling/create',
  detail: 'facility-maintenance-scheduling/detail/:id',
  edit: 'facility-maintenance-scheduling/edit/:id',
  approvals: 'facility-maintenance-scheduling/approvals',
  reports: 'facility-maintenance-scheduling/reports',
  analytics: 'facility-maintenance-scheduling/analytics',
}

function Submodule3f99e835Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">facility-maintenance-scheduling</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule3f99e835Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule3f99e835Routes }
export default Submodule3f99e835Workspace

