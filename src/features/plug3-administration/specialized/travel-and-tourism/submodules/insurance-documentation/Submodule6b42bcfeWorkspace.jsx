const Submodule6b42bcfeRoutes = {
  dashboard: 'insurance-documentation/dashboard',
  list: 'insurance-documentation/list',
  create: 'insurance-documentation/create',
  detail: 'insurance-documentation/detail/:id',
  edit: 'insurance-documentation/edit/:id',
  approvals: 'insurance-documentation/approvals',
  reports: 'insurance-documentation/reports',
  analytics: 'insurance-documentation/analytics',
}

function Submodule6b42bcfeWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">insurance-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule6b42bcfeRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule6b42bcfeRoutes }
export default Submodule6b42bcfeWorkspace

