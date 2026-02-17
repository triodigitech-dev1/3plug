const Submodule1ab1a10eRoutes = {
  dashboard: 'budget-utilization-monitoring/dashboard',
  list: 'budget-utilization-monitoring/list',
  create: 'budget-utilization-monitoring/create',
  detail: 'budget-utilization-monitoring/detail/:id',
  edit: 'budget-utilization-monitoring/edit/:id',
  approvals: 'budget-utilization-monitoring/approvals',
  reports: 'budget-utilization-monitoring/reports',
  analytics: 'budget-utilization-monitoring/analytics',
}

function Submodule1ab1a10eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">budget-utilization-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule1ab1a10eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule1ab1a10eRoutes }
export default Submodule1ab1a10eWorkspace

