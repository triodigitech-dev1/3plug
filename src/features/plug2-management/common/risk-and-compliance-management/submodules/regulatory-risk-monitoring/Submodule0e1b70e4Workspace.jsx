const Submodule0e1b70e4Routes = {
  dashboard: 'regulatory-risk-monitoring/dashboard',
  list: 'regulatory-risk-monitoring/list',
  create: 'regulatory-risk-monitoring/create',
  detail: 'regulatory-risk-monitoring/detail/:id',
  edit: 'regulatory-risk-monitoring/edit/:id',
  approvals: 'regulatory-risk-monitoring/approvals',
  reports: 'regulatory-risk-monitoring/reports',
  analytics: 'regulatory-risk-monitoring/analytics',
}

function Submodule0e1b70e4Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">regulatory-risk-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule0e1b70e4Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule0e1b70e4Routes }
export default Submodule0e1b70e4Workspace

