const Submodulebb931d89Routes = {
  dashboard: 'campaign-roi-analysis/dashboard',
  list: 'campaign-roi-analysis/list',
  create: 'campaign-roi-analysis/create',
  detail: 'campaign-roi-analysis/detail/:id',
  edit: 'campaign-roi-analysis/edit/:id',
  approvals: 'campaign-roi-analysis/approvals',
  reports: 'campaign-roi-analysis/reports',
  analytics: 'campaign-roi-analysis/analytics',
}

function Submodulebb931d89Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">campaign-roi-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulebb931d89Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulebb931d89Routes }
export default Submodulebb931d89Workspace

