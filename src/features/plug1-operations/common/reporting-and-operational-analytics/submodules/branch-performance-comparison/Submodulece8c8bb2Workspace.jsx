const Submodulece8c8bb2Routes = {
  dashboard: 'branch-performance-comparison/dashboard',
  list: 'branch-performance-comparison/list',
  create: 'branch-performance-comparison/create',
  detail: 'branch-performance-comparison/detail/:id',
  edit: 'branch-performance-comparison/edit/:id',
  approvals: 'branch-performance-comparison/approvals',
  reports: 'branch-performance-comparison/reports',
  analytics: 'branch-performance-comparison/analytics',
}

function Submodulece8c8bb2Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">branch-performance-comparison</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulece8c8bb2Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulece8c8bb2Routes }
export default Submodulece8c8bb2Workspace

