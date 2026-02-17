const Submodulecd41ce95Routes = {
  dashboard: 'layaway-sales-handling/dashboard',
  list: 'layaway-sales-handling/list',
  create: 'layaway-sales-handling/create',
  detail: 'layaway-sales-handling/detail/:id',
  edit: 'layaway-sales-handling/edit/:id',
  approvals: 'layaway-sales-handling/approvals',
  reports: 'layaway-sales-handling/reports',
  analytics: 'layaway-sales-handling/analytics',
}

function Submodulecd41ce95Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">layaway-sales-handling</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulecd41ce95Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulecd41ce95Routes }
export default Submodulecd41ce95Workspace

