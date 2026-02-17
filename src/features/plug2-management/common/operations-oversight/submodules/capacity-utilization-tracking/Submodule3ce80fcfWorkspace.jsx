const Submodule3ce80fcfRoutes = {
  dashboard: 'capacity-utilization-tracking/dashboard',
  list: 'capacity-utilization-tracking/list',
  create: 'capacity-utilization-tracking/create',
  detail: 'capacity-utilization-tracking/detail/:id',
  edit: 'capacity-utilization-tracking/edit/:id',
  approvals: 'capacity-utilization-tracking/approvals',
  reports: 'capacity-utilization-tracking/reports',
  analytics: 'capacity-utilization-tracking/analytics',
}

function Submodule3ce80fcfWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">capacity-utilization-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule3ce80fcfRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule3ce80fcfRoutes }
export default Submodule3ce80fcfWorkspace

