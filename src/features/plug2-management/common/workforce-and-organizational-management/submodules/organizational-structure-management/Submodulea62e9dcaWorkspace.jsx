const Submodulea62e9dcaRoutes = {
  dashboard: 'organizational-structure-management/dashboard',
  list: 'organizational-structure-management/list',
  create: 'organizational-structure-management/create',
  detail: 'organizational-structure-management/detail/:id',
  edit: 'organizational-structure-management/edit/:id',
  approvals: 'organizational-structure-management/approvals',
  reports: 'organizational-structure-management/reports',
  analytics: 'organizational-structure-management/analytics',
}

function Submodulea62e9dcaWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">organizational-structure-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulea62e9dcaRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulea62e9dcaRoutes }
export default Submodulea62e9dcaWorkspace

