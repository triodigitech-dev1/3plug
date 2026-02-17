const Submodule2ff2070aRoutes = {
  dashboard: 'business-continuity-planning/dashboard',
  list: 'business-continuity-planning/list',
  create: 'business-continuity-planning/create',
  detail: 'business-continuity-planning/detail/:id',
  edit: 'business-continuity-planning/edit/:id',
  approvals: 'business-continuity-planning/approvals',
  reports: 'business-continuity-planning/reports',
  analytics: 'business-continuity-planning/analytics',
}

function Submodule2ff2070aWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">business-continuity-planning</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule2ff2070aRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule2ff2070aRoutes }
export default Submodule2ff2070aWorkspace

