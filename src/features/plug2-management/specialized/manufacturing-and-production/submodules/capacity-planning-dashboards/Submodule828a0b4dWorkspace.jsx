const Submodule828a0b4dRoutes = {
  dashboard: 'capacity-planning-dashboards/dashboard',
  list: 'capacity-planning-dashboards/list',
  create: 'capacity-planning-dashboards/create',
  detail: 'capacity-planning-dashboards/detail/:id',
  edit: 'capacity-planning-dashboards/edit/:id',
  approvals: 'capacity-planning-dashboards/approvals',
  reports: 'capacity-planning-dashboards/reports',
  analytics: 'capacity-planning-dashboards/analytics',
}

function Submodule828a0b4dWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">capacity-planning-dashboards</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule828a0b4dRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule828a0b4dRoutes }
export default Submodule828a0b4dWorkspace

