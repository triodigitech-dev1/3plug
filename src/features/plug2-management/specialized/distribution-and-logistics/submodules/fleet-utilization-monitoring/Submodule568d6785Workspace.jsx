const Submodule568d6785Routes = {
  dashboard: 'fleet-utilization-monitoring/dashboard',
  list: 'fleet-utilization-monitoring/list',
  create: 'fleet-utilization-monitoring/create',
  detail: 'fleet-utilization-monitoring/detail/:id',
  edit: 'fleet-utilization-monitoring/edit/:id',
  approvals: 'fleet-utilization-monitoring/approvals',
  reports: 'fleet-utilization-monitoring/reports',
  analytics: 'fleet-utilization-monitoring/analytics',
}

function Submodule568d6785Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">fleet-utilization-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule568d6785Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule568d6785Routes }
export default Submodule568d6785Workspace

