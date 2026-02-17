const Submodule5f4dcfdbRoutes = {
  dashboard: 'grant-tracking/dashboard',
  list: 'grant-tracking/list',
  create: 'grant-tracking/create',
  detail: 'grant-tracking/detail/:id',
  edit: 'grant-tracking/edit/:id',
  approvals: 'grant-tracking/approvals',
  reports: 'grant-tracking/reports',
  analytics: 'grant-tracking/analytics',
}

function Submodule5f4dcfdbWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">grant-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule5f4dcfdbRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule5f4dcfdbRoutes }
export default Submodule5f4dcfdbWorkspace

