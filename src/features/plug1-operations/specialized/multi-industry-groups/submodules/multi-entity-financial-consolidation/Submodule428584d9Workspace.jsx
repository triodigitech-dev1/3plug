const Submodule428584d9Routes = {
  dashboard: 'multi-entity-financial-consolidation/dashboard',
  list: 'multi-entity-financial-consolidation/list',
  create: 'multi-entity-financial-consolidation/create',
  detail: 'multi-entity-financial-consolidation/detail/:id',
  edit: 'multi-entity-financial-consolidation/edit/:id',
  approvals: 'multi-entity-financial-consolidation/approvals',
  reports: 'multi-entity-financial-consolidation/reports',
  analytics: 'multi-entity-financial-consolidation/analytics',
}

function Submodule428584d9Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">multi-entity-financial-consolidation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule428584d9Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule428584d9Routes }
export default Submodule428584d9Workspace

