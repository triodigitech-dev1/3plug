const Submoduledc391e20Routes = {
  dashboard: 'pharmacy-margin-analysis/dashboard',
  list: 'pharmacy-margin-analysis/list',
  create: 'pharmacy-margin-analysis/create',
  detail: 'pharmacy-margin-analysis/detail/:id',
  edit: 'pharmacy-margin-analysis/edit/:id',
  approvals: 'pharmacy-margin-analysis/approvals',
  reports: 'pharmacy-margin-analysis/reports',
  analytics: 'pharmacy-margin-analysis/analytics',
}

function Submoduledc391e20Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">pharmacy-margin-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduledc391e20Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduledc391e20Routes }
export default Submoduledc391e20Workspace

