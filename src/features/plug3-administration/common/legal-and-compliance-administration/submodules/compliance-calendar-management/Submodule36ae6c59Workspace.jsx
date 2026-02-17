const Submodule36ae6c59Routes = {
  dashboard: 'compliance-calendar-management/dashboard',
  list: 'compliance-calendar-management/list',
  create: 'compliance-calendar-management/create',
  detail: 'compliance-calendar-management/detail/:id',
  edit: 'compliance-calendar-management/edit/:id',
  approvals: 'compliance-calendar-management/approvals',
  reports: 'compliance-calendar-management/reports',
  analytics: 'compliance-calendar-management/analytics',
}

function Submodule36ae6c59Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">compliance-calendar-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule36ae6c59Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule36ae6c59Routes }
export default Submodule36ae6c59Workspace

