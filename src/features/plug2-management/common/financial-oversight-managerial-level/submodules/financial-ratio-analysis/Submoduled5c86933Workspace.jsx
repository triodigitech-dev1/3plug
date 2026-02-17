const Submoduled5c86933Routes = {
  dashboard: 'financial-ratio-analysis/dashboard',
  list: 'financial-ratio-analysis/list',
  create: 'financial-ratio-analysis/create',
  detail: 'financial-ratio-analysis/detail/:id',
  edit: 'financial-ratio-analysis/edit/:id',
  approvals: 'financial-ratio-analysis/approvals',
  reports: 'financial-ratio-analysis/reports',
  analytics: 'financial-ratio-analysis/analytics',
}

function Submoduled5c86933Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">financial-ratio-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled5c86933Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled5c86933Routes }
export default Submoduled5c86933Workspace

