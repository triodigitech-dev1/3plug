const Submodule0486f526Routes = {
  dashboard: 'content-performance-analytics/dashboard',
  list: 'content-performance-analytics/list',
  create: 'content-performance-analytics/create',
  detail: 'content-performance-analytics/detail/:id',
  edit: 'content-performance-analytics/edit/:id',
  approvals: 'content-performance-analytics/approvals',
  reports: 'content-performance-analytics/reports',
  analytics: 'content-performance-analytics/analytics',
}

function Submodule0486f526Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">content-performance-analytics</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule0486f526Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule0486f526Routes }
export default Submodule0486f526Workspace

