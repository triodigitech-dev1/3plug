const Submodule421c7aacRoutes = {
  dashboard: 'produce-aggregation-tracking/dashboard',
  list: 'produce-aggregation-tracking/list',
  create: 'produce-aggregation-tracking/create',
  detail: 'produce-aggregation-tracking/detail/:id',
  edit: 'produce-aggregation-tracking/edit/:id',
  approvals: 'produce-aggregation-tracking/approvals',
  reports: 'produce-aggregation-tracking/reports',
  analytics: 'produce-aggregation-tracking/analytics',
}

function Submodule421c7aacWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">produce-aggregation-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule421c7aacRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule421c7aacRoutes }
export default Submodule421c7aacWorkspace

