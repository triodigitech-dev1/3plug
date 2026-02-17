const Submodule208f93e0Routes = {
  dashboard: 'multi-warehouse-management/dashboard',
  list: 'multi-warehouse-management/list',
  create: 'multi-warehouse-management/create',
  detail: 'multi-warehouse-management/detail/:id',
  edit: 'multi-warehouse-management/edit/:id',
  approvals: 'multi-warehouse-management/approvals',
  reports: 'multi-warehouse-management/reports',
  analytics: 'multi-warehouse-management/analytics',
}

function Submodule208f93e0Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">multi-warehouse-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule208f93e0Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule208f93e0Routes }
export default Submodule208f93e0Workspace

