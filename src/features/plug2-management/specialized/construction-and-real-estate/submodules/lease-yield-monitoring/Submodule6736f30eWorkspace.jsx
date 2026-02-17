const Submodule6736f30eRoutes = {
  dashboard: 'lease-yield-monitoring/dashboard',
  list: 'lease-yield-monitoring/list',
  create: 'lease-yield-monitoring/create',
  detail: 'lease-yield-monitoring/detail/:id',
  edit: 'lease-yield-monitoring/edit/:id',
  approvals: 'lease-yield-monitoring/approvals',
  reports: 'lease-yield-monitoring/reports',
  analytics: 'lease-yield-monitoring/analytics',
}

function Submodule6736f30eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">lease-yield-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule6736f30eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule6736f30eRoutes }
export default Submodule6736f30eWorkspace

