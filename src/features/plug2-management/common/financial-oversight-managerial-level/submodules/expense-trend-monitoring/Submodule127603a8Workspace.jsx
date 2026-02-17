const Submodule127603a8Routes = {
  dashboard: 'expense-trend-monitoring/dashboard',
  list: 'expense-trend-monitoring/list',
  create: 'expense-trend-monitoring/create',
  detail: 'expense-trend-monitoring/detail/:id',
  edit: 'expense-trend-monitoring/edit/:id',
  approvals: 'expense-trend-monitoring/approvals',
  reports: 'expense-trend-monitoring/reports',
  analytics: 'expense-trend-monitoring/analytics',
}

function Submodule127603a8Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">expense-trend-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule127603a8Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule127603a8Routes }
export default Submodule127603a8Workspace

