const Submodule9d9cb723Routes = {
  dashboard: 'prescription-tracking/dashboard',
  list: 'prescription-tracking/list',
  create: 'prescription-tracking/create',
  detail: 'prescription-tracking/detail/:id',
  edit: 'prescription-tracking/edit/:id',
  approvals: 'prescription-tracking/approvals',
  reports: 'prescription-tracking/reports',
  analytics: 'prescription-tracking/analytics',
}

function Submodule9d9cb723Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">prescription-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule9d9cb723Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule9d9cb723Routes }
export default Submodule9d9cb723Workspace

