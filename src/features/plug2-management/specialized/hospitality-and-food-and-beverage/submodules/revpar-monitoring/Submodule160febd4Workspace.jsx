const Submodule160febd4Routes = {
  dashboard: 'revpar-monitoring/dashboard',
  list: 'revpar-monitoring/list',
  create: 'revpar-monitoring/create',
  detail: 'revpar-monitoring/detail/:id',
  edit: 'revpar-monitoring/edit/:id',
  approvals: 'revpar-monitoring/approvals',
  reports: 'revpar-monitoring/reports',
  analytics: 'revpar-monitoring/analytics',
}

function Submodule160febd4Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">revpar-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule160febd4Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule160febd4Routes }
export default Submodule160febd4Workspace

