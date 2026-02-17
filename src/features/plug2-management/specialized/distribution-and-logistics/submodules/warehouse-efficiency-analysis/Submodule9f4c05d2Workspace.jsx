const Submodule9f4c05d2Routes = {
  dashboard: 'warehouse-efficiency-analysis/dashboard',
  list: 'warehouse-efficiency-analysis/list',
  create: 'warehouse-efficiency-analysis/create',
  detail: 'warehouse-efficiency-analysis/detail/:id',
  edit: 'warehouse-efficiency-analysis/edit/:id',
  approvals: 'warehouse-efficiency-analysis/approvals',
  reports: 'warehouse-efficiency-analysis/reports',
  analytics: 'warehouse-efficiency-analysis/analytics',
}

function Submodule9f4c05d2Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">warehouse-efficiency-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule9f4c05d2Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule9f4c05d2Routes }
export default Submodule9f4c05d2Workspace

