const Submodule261767ecRoutes = {
  dashboard: 'business-continuity-documentation/dashboard',
  list: 'business-continuity-documentation/list',
  create: 'business-continuity-documentation/create',
  detail: 'business-continuity-documentation/detail/:id',
  edit: 'business-continuity-documentation/edit/:id',
  approvals: 'business-continuity-documentation/approvals',
  reports: 'business-continuity-documentation/reports',
  analytics: 'business-continuity-documentation/analytics',
}

function Submodule261767ecWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">business-continuity-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule261767ecRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule261767ecRoutes }
export default Submodule261767ecWorkspace

