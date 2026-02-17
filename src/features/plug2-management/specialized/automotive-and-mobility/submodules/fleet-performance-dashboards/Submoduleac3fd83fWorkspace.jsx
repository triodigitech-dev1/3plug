const Submoduleac3fd83fRoutes = {
  dashboard: 'fleet-performance-dashboards/dashboard',
  list: 'fleet-performance-dashboards/list',
  create: 'fleet-performance-dashboards/create',
  detail: 'fleet-performance-dashboards/detail/:id',
  edit: 'fleet-performance-dashboards/edit/:id',
  approvals: 'fleet-performance-dashboards/approvals',
  reports: 'fleet-performance-dashboards/reports',
  analytics: 'fleet-performance-dashboards/analytics',
}

function Submoduleac3fd83fWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">fleet-performance-dashboards</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleac3fd83fRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleac3fd83fRoutes }
export default Submoduleac3fd83fWorkspace

