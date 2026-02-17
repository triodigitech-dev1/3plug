const Submoduled124a6f1Routes = {
  dashboard: 'digital-campaign-performance-analysis/dashboard',
  list: 'digital-campaign-performance-analysis/list',
  create: 'digital-campaign-performance-analysis/create',
  detail: 'digital-campaign-performance-analysis/detail/:id',
  edit: 'digital-campaign-performance-analysis/edit/:id',
  approvals: 'digital-campaign-performance-analysis/approvals',
  reports: 'digital-campaign-performance-analysis/reports',
  analytics: 'digital-campaign-performance-analysis/analytics',
}

function Submoduled124a6f1Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">digital-campaign-performance-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled124a6f1Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled124a6f1Routes }
export default Submoduled124a6f1Workspace

