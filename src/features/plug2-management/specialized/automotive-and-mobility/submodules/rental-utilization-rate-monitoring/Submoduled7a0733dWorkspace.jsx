const Submoduled7a0733dRoutes = {
  dashboard: 'rental-utilization-rate-monitoring/dashboard',
  list: 'rental-utilization-rate-monitoring/list',
  create: 'rental-utilization-rate-monitoring/create',
  detail: 'rental-utilization-rate-monitoring/detail/:id',
  edit: 'rental-utilization-rate-monitoring/edit/:id',
  approvals: 'rental-utilization-rate-monitoring/approvals',
  reports: 'rental-utilization-rate-monitoring/reports',
  analytics: 'rental-utilization-rate-monitoring/analytics',
}

function Submoduled7a0733dWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">rental-utilization-rate-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled7a0733dRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled7a0733dRoutes }
export default Submoduled7a0733dWorkspace

