const Submodule4a88601fRoutes = {
  dashboard: 'inventory-movement-reports/dashboard',
  list: 'inventory-movement-reports/list',
  create: 'inventory-movement-reports/create',
  detail: 'inventory-movement-reports/detail/:id',
  edit: 'inventory-movement-reports/edit/:id',
  approvals: 'inventory-movement-reports/approvals',
  reports: 'inventory-movement-reports/reports',
  analytics: 'inventory-movement-reports/analytics',
}

function Submodule4a88601fWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">inventory-movement-reports</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule4a88601fRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule4a88601fRoutes }
export default Submodule4a88601fWorkspace

