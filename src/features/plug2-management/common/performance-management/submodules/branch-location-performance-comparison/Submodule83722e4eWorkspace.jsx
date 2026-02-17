const Submodule83722e4eRoutes = {
  dashboard: 'branch-location-performance-comparison/dashboard',
  list: 'branch-location-performance-comparison/list',
  create: 'branch-location-performance-comparison/create',
  detail: 'branch-location-performance-comparison/detail/:id',
  edit: 'branch-location-performance-comparison/edit/:id',
  approvals: 'branch-location-performance-comparison/approvals',
  reports: 'branch-location-performance-comparison/reports',
  analytics: 'branch-location-performance-comparison/analytics',
}

function Submodule83722e4eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">branch-location-performance-comparison</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule83722e4eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule83722e4eRoutes }
export default Submodule83722e4eWorkspace

