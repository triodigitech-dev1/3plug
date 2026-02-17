const Submodulef09776c9Routes = {
  dashboard: 'service-delivery-performance-dashboards/dashboard',
  list: 'service-delivery-performance-dashboards/list',
  create: 'service-delivery-performance-dashboards/create',
  detail: 'service-delivery-performance-dashboards/detail/:id',
  edit: 'service-delivery-performance-dashboards/edit/:id',
  approvals: 'service-delivery-performance-dashboards/approvals',
  reports: 'service-delivery-performance-dashboards/reports',
  analytics: 'service-delivery-performance-dashboards/analytics',
}

function Submodulef09776c9Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">service-delivery-performance-dashboards</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef09776c9Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef09776c9Routes }
export default Submodulef09776c9Workspace

