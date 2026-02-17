const Submoduleedf7f741Routes = {
  dashboard: 'leadership-performance-tracking/dashboard',
  list: 'leadership-performance-tracking/list',
  create: 'leadership-performance-tracking/create',
  detail: 'leadership-performance-tracking/detail/:id',
  edit: 'leadership-performance-tracking/edit/:id',
  approvals: 'leadership-performance-tracking/approvals',
  reports: 'leadership-performance-tracking/reports',
  analytics: 'leadership-performance-tracking/analytics',
}

function Submoduleedf7f741Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">leadership-performance-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleedf7f741Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleedf7f741Routes }
export default Submoduleedf7f741Workspace

