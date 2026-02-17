const Submodule1c5a0d2aRoutes = {
  dashboard: 'production-planning/dashboard',
  list: 'production-planning/list',
  create: 'production-planning/create',
  detail: 'production-planning/detail/:id',
  edit: 'production-planning/edit/:id',
  approvals: 'production-planning/approvals',
  reports: 'production-planning/reports',
  analytics: 'production-planning/analytics',
}

function Submodule1c5a0d2aWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">production-planning</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule1c5a0d2aRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule1c5a0d2aRoutes }
export default Submodule1c5a0d2aWorkspace

