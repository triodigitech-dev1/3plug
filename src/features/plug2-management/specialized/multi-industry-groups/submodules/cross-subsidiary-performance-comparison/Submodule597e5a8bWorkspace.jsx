const Submodule597e5a8bRoutes = {
  dashboard: 'cross-subsidiary-performance-comparison/dashboard',
  list: 'cross-subsidiary-performance-comparison/list',
  create: 'cross-subsidiary-performance-comparison/create',
  detail: 'cross-subsidiary-performance-comparison/detail/:id',
  edit: 'cross-subsidiary-performance-comparison/edit/:id',
  approvals: 'cross-subsidiary-performance-comparison/approvals',
  reports: 'cross-subsidiary-performance-comparison/reports',
  analytics: 'cross-subsidiary-performance-comparison/analytics',
}

function Submodule597e5a8bWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">cross-subsidiary-performance-comparison</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule597e5a8bRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule597e5a8bRoutes }
export default Submodule597e5a8bWorkspace

