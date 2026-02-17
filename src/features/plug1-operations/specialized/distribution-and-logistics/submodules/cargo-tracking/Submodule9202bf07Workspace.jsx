const Submodule9202bf07Routes = {
  dashboard: 'cargo-tracking/dashboard',
  list: 'cargo-tracking/list',
  create: 'cargo-tracking/create',
  detail: 'cargo-tracking/detail/:id',
  edit: 'cargo-tracking/edit/:id',
  approvals: 'cargo-tracking/approvals',
  reports: 'cargo-tracking/reports',
  analytics: 'cargo-tracking/analytics',
}

function Submodule9202bf07Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">cargo-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule9202bf07Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule9202bf07Routes }
export default Submodule9202bf07Workspace

