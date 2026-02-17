const Submodule384dcb80Routes = {
  dashboard: 'sales-pipeline-oversight/dashboard',
  list: 'sales-pipeline-oversight/list',
  create: 'sales-pipeline-oversight/create',
  detail: 'sales-pipeline-oversight/detail/:id',
  edit: 'sales-pipeline-oversight/edit/:id',
  approvals: 'sales-pipeline-oversight/approvals',
  reports: 'sales-pipeline-oversight/reports',
  analytics: 'sales-pipeline-oversight/analytics',
}

function Submodule384dcb80Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">sales-pipeline-oversight</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule384dcb80Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule384dcb80Routes }
export default Submodule384dcb80Workspace

