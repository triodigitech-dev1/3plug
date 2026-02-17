const Submodule36f24265Routes = {
  dashboard: 'fleet-vehicle-utilization-oversight/dashboard',
  list: 'fleet-vehicle-utilization-oversight/list',
  create: 'fleet-vehicle-utilization-oversight/create',
  detail: 'fleet-vehicle-utilization-oversight/detail/:id',
  edit: 'fleet-vehicle-utilization-oversight/edit/:id',
  approvals: 'fleet-vehicle-utilization-oversight/approvals',
  reports: 'fleet-vehicle-utilization-oversight/reports',
  analytics: 'fleet-vehicle-utilization-oversight/analytics',
}

function Submodule36f24265Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">fleet-vehicle-utilization-oversight</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule36f24265Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule36f24265Routes }
export default Submodule36f24265Workspace

