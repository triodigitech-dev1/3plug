const Submodule7fed7dc3Routes = {
  dashboard: 'supports-risk-aware-growth/dashboard',
  list: 'supports-risk-aware-growth/list',
  create: 'supports-risk-aware-growth/create',
  detail: 'supports-risk-aware-growth/detail/:id',
  edit: 'supports-risk-aware-growth/edit/:id',
  approvals: 'supports-risk-aware-growth/approvals',
  reports: 'supports-risk-aware-growth/reports',
  analytics: 'supports-risk-aware-growth/analytics',
}

function Submodule7fed7dc3Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">supports-risk-aware-growth</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule7fed7dc3Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule7fed7dc3Routes }
export default Submodule7fed7dc3Workspace

