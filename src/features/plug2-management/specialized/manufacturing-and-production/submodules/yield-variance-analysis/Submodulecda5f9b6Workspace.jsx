const Submodulecda5f9b6Routes = {
  dashboard: 'yield-variance-analysis/dashboard',
  list: 'yield-variance-analysis/list',
  create: 'yield-variance-analysis/create',
  detail: 'yield-variance-analysis/detail/:id',
  edit: 'yield-variance-analysis/edit/:id',
  approvals: 'yield-variance-analysis/approvals',
  reports: 'yield-variance-analysis/reports',
  analytics: 'yield-variance-analysis/analytics',
}

function Submodulecda5f9b6Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">yield-variance-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulecda5f9b6Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulecda5f9b6Routes }
export default Submodulecda5f9b6Workspace

