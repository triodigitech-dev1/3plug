const Submodule0818bb64Routes = {
  dashboard: 'output-yield-monitoring/dashboard',
  list: 'output-yield-monitoring/list',
  create: 'output-yield-monitoring/create',
  detail: 'output-yield-monitoring/detail/:id',
  edit: 'output-yield-monitoring/edit/:id',
  approvals: 'output-yield-monitoring/approvals',
  reports: 'output-yield-monitoring/reports',
  analytics: 'output-yield-monitoring/analytics',
}

function Submodule0818bb64Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">output-yield-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule0818bb64Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule0818bb64Routes }
export default Submodule0818bb64Workspace

