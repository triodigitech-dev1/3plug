const Submodule2ec45a79Routes = {
  dashboard: 'harvest-yield-logging/dashboard',
  list: 'harvest-yield-logging/list',
  create: 'harvest-yield-logging/create',
  detail: 'harvest-yield-logging/detail/:id',
  edit: 'harvest-yield-logging/edit/:id',
  approvals: 'harvest-yield-logging/approvals',
  reports: 'harvest-yield-logging/reports',
  analytics: 'harvest-yield-logging/analytics',
}

function Submodule2ec45a79Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">harvest-yield-logging</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule2ec45a79Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule2ec45a79Routes }
export default Submodule2ec45a79Workspace

