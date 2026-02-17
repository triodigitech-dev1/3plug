const Submodule6e55a47dRoutes = {
  dashboard: 'audit-performance-monitoring/dashboard',
  list: 'audit-performance-monitoring/list',
  create: 'audit-performance-monitoring/create',
  detail: 'audit-performance-monitoring/detail/:id',
  edit: 'audit-performance-monitoring/edit/:id',
  approvals: 'audit-performance-monitoring/approvals',
  reports: 'audit-performance-monitoring/reports',
  analytics: 'audit-performance-monitoring/analytics',
}

function Submodule6e55a47dWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">audit-performance-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule6e55a47dRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule6e55a47dRoutes }
export default Submodule6e55a47dWorkspace

