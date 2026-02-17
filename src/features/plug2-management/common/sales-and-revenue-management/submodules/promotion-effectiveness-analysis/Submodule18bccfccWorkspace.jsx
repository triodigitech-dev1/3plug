const Submodule18bccfccRoutes = {
  dashboard: 'promotion-effectiveness-analysis/dashboard',
  list: 'promotion-effectiveness-analysis/list',
  create: 'promotion-effectiveness-analysis/create',
  detail: 'promotion-effectiveness-analysis/detail/:id',
  edit: 'promotion-effectiveness-analysis/edit/:id',
  approvals: 'promotion-effectiveness-analysis/approvals',
  reports: 'promotion-effectiveness-analysis/reports',
  analytics: 'promotion-effectiveness-analysis/analytics',
}

function Submodule18bccfccWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">promotion-effectiveness-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule18bccfccRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule18bccfccRoutes }
export default Submodule18bccfccWorkspace

