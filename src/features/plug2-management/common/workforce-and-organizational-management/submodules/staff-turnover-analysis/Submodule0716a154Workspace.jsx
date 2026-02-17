const Submodule0716a154Routes = {
  dashboard: 'staff-turnover-analysis/dashboard',
  list: 'staff-turnover-analysis/list',
  create: 'staff-turnover-analysis/create',
  detail: 'staff-turnover-analysis/detail/:id',
  edit: 'staff-turnover-analysis/edit/:id',
  approvals: 'staff-turnover-analysis/approvals',
  reports: 'staff-turnover-analysis/reports',
  analytics: 'staff-turnover-analysis/analytics',
}

function Submodule0716a154Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">staff-turnover-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule0716a154Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule0716a154Routes }
export default Submodule0716a154Workspace

