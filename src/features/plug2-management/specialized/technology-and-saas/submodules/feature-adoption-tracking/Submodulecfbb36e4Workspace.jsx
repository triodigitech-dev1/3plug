const Submodulecfbb36e4Routes = {
  dashboard: 'feature-adoption-tracking/dashboard',
  list: 'feature-adoption-tracking/list',
  create: 'feature-adoption-tracking/create',
  detail: 'feature-adoption-tracking/detail/:id',
  edit: 'feature-adoption-tracking/edit/:id',
  approvals: 'feature-adoption-tracking/approvals',
  reports: 'feature-adoption-tracking/reports',
  analytics: 'feature-adoption-tracking/analytics',
}

function Submodulecfbb36e4Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">feature-adoption-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulecfbb36e4Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulecfbb36e4Routes }
export default Submodulecfbb36e4Workspace

