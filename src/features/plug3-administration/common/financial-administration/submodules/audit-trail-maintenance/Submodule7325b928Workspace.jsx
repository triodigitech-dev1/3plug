const Submodule7325b928Routes = {
  dashboard: 'audit-trail-maintenance/dashboard',
  list: 'audit-trail-maintenance/list',
  create: 'audit-trail-maintenance/create',
  detail: 'audit-trail-maintenance/detail/:id',
  edit: 'audit-trail-maintenance/edit/:id',
  approvals: 'audit-trail-maintenance/approvals',
  reports: 'audit-trail-maintenance/reports',
  analytics: 'audit-trail-maintenance/analytics',
}

function Submodule7325b928Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">audit-trail-maintenance</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule7325b928Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule7325b928Routes }
export default Submodule7325b928Workspace

